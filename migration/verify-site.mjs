import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = root;
const dist = path.join(site, 'dist');
const requireSite = createRequire(path.join(site, 'package.json'));
const GithubSlugger = requireSite('github-slugger');
const manifest = JSON.parse(readFileSync(path.join(root, 'migration/route-manifest.json'), 'utf8'));
const failures = [];

function check(condition, message) {
  if (condition) return;
  failures.push(message);
}

function routeFile(route) {
  return route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.replace(/^\//, ''), 'index.html');
}

function builtHtmlRoutes(directory = dist, relative = '') {
  const routes = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const nextRelative = path.posix.join(relative, entry.name);
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) routes.push(...builtHtmlRoutes(absolute, nextRelative));
    else if (entry.isFile() && entry.name.endsWith('.html')) {
      if (nextRelative === 'index.html') routes.push('/');
      else if (nextRelative.endsWith('/index.html')) routes.push(`/${nextRelative.slice(0, -'index.html'.length)}`);
      else routes.push(`/${nextRelative}`);
    }
  }
  return routes;
}

function frontmatter(source) {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  assert(match, 'Expected YAML frontmatter');
  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (field) fields[field[1]] = field[2].replace(/^['"]|['"]$/g, '').trim();
  }
  return { fields, body: source.slice(match[0].length) };
}

function normalizeAstroImports(source) {
  return source.replace(
    /(from\s+['"]\.\.\/\.\.\/components\/text-decorations\/(?:note|quote|information))(['"])/g,
    '$1.astro$2',
  );
}

function normalizeDocument(source, route) {
  let normalized = normalizeAstroImports(source);
  for (const exception of manifest.contentExceptions ?? []) {
    if (exception.route !== route) continue;
    check(source.includes(exception.sourceText), `${route}: documented content exception no longer matches the source`);
    normalized = normalized.replace(exception.sourceText, exception.replacement);
    const reference = exception.sourceText.match(/\]\(\.\.\/\.\.\/images\/([^\)]+)\)/)?.[1];
    check(reference && !existsSync(path.join(root, 'src/images', reference)) && !existsSync(path.join(root, 'static/images', reference)), `${route}: documented missing-image exception is stale`);
  }
  return normalized;
}

function normalizeMediaAccessibility(source, route) {
  let normalized = source;
  const media = manifest.mediaAccessibility?.[route];
  if (media?.coverAlt) {
    const annotation = `image_alt: ${JSON.stringify(media.coverAlt)}`;
    const count = normalized.split(annotation).length - 1;
    check(count === 1, `${route}: approved cover alt text no longer matches the content`);
    normalized = normalized.replace(`${annotation}\r\n`, '').replace(`${annotation}\n`, '');
  }
  for (const { source: imageSource, alt, count = 1 } of media?.images ?? []) {
    let replaced = 0;
    normalized = normalized.replaceAll(`![${alt}](${imageSource})`, () => {
      replaced += 1;
      return `![](${imageSource})`;
    });
    check(replaced === count, `${route}: approved image alt text no longer matches the content`);
  }
  for (const title of media?.iframes ?? []) {
    let replaced = 0;
    normalized = normalized.replaceAll(` title="${title}"`, () => {
      replaced += 1;
      return '';
    });
    check(replaced === 1, `${route}: approved iframe title no longer matches the content`);
  }
  return normalized;
}

function htmlText(value) {
  return value.replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&#x27;', "'");
}

function attribute(tag, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = tag.match(new RegExp(`(?:^|\\s)${escaped}="([^"]*)"`));
  return match ? htmlText(match[1]) : undefined;
}

function expectedHeadings(body) {
  const slugger = new GithubSlugger();
  const headings = [];
  let fence;
  const lines = body.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const fenceMatch = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (fenceMatch && fence) {
      const closingFence = new RegExp(`^ {0,3}${fence[0]}{${fence.length},}[ \\t]*$`);
      if (closingFence.test(line)) fence = undefined;
      continue;
    }
    if (fence) continue;
    if (fenceMatch && !fenceMatch[2].includes(fenceMatch[1][0].repeat(fenceMatch[1].length))) {
      fence = fenceMatch[1][0].repeat(fenceMatch[1].length);
      continue;
    }
    let match = line.match(/^ {0,3}(#{1,6})\s+(.+?)\s*#*\s*$/);
    let headingText = match?.[2];
    let depth = match?.[1].length;
    const setext = !match && line.trim() ? (lines[index + 1] ?? '').match(/^ {0,3}(=+|-+)\s*$/) : null;
    if (setext) {
      headingText = line.trim();
      depth = setext[1][0] === '=' ? 1 : 2;
      match = [null, setext[1], headingText];
    }
    if (!match) continue;
    const codeSpans = [];
    const text = headingText
      .replace(/`([^`]*)`/g, (_, code) => `\u0000${codeSpans.push(code) - 1}\u0000`)
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/<[^>]+>/g, '')
      .replace(/[\*_~]/g, '')
      .replace(/\\([\\`*_{}\[\]()#+\-.!])/g, '$1')
      .replace(/\u0000(\d+)\u0000/g, (_, index) => codeSpans[Number(index)])
      .trim();
    headings.push({ depth, text, slug: slugger.slug(text) });
  }
  return headings;
}

function assertMetadata(html, { title, description, canonical, socialTitle = title, image }) {
  const titleTag = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  check(htmlText(titleTag ?? '') === `${title} | Fabio Rosado`, `${canonical}: document title missing or changed`);
  const tags = [...html.matchAll(/<meta\b[^>]*>/g)].map((match) => match[0]);
  const descriptionTag = tags.find((tag) => attribute(tag, 'name') === 'description');
  const canonicalTag = [...html.matchAll(/<link\b[^>]*>/g)].map((match) => match[0]).find((tag) => attribute(tag, 'rel') === 'canonical');
  const ogTitleTag = tags.find((tag) => attribute(tag, 'property') === 'og:title');
  const twitterImageTag = tags.find((tag) => attribute(tag, 'name') === 'twitter:image');
  check(attribute(descriptionTag ?? '', 'content') === description, `${canonical}: description missing or changed`);
  check(attribute(canonicalTag ?? '', 'href') === canonical, `${canonical}: canonical URL missing or changed`);
  check(attribute(ogTitleTag ?? '', 'content') === socialTitle, `${canonical}: Open Graph title missing or changed`);
  if (image) check(attribute(twitterImageTag ?? '', 'content') === image, `${canonical}: social image missing or changed`);
}

function localAssetExists(source, route) {
  if (!source || /^(?:data:|https?:|#|\/\/)/i.test(source)) return true;
  const pathname = new URL(source, `https://fabiorosado.dev${route}`).pathname;
  return existsSync(path.join(dist, decodeURIComponent(pathname).replace(/^\//, '')));
}

check(manifest.counts.preservedRoutes === Object.keys(manifest.preservedRoutes).length, 'Preserved route count does not match manifest');
check(manifest.counts.retiredRoutes === Object.keys(manifest.retiredRoutes).length, 'Retired route count does not match manifest');
check(!existsSync(path.join(root, '_redirects')), 'The removed root /twitch redirect file still exists');

const contentRoutes = Object.entries(manifest.preservedRoutes).filter(([, source]) => /^src\/pages\/(blog|cheatsheets|projects)\//.test(source));
check(Object.keys(manifest.sourceContentHashes ?? {}).length === contentRoutes.length, 'Source content hashes do not cover every preserved content route');
for (const [group, count] of Object.entries({ blog: 42, cheatsheets: 5, projects: 11 })) {
  check(contentRoutes.filter(([, source]) => source.split('/')[2] === group).length === count, `Expected ${count} preserved ${group} documents`);
}
for (const [route, sourcePath] of contentRoutes) {
  const legacySourcePath = path.join(root, sourcePath);
  const legacySource = existsSync(legacySourcePath) ? readFileSync(legacySourcePath, 'utf8') : undefined;
  const group = sourcePath.split('/')[2];
  const copy = readFileSync(path.join(site, 'src/content', group, path.basename(sourcePath)), 'utf8');
  const expectedHash = manifest.sourceContentHashes?.[route];
  const hashInput = normalizeMediaAccessibility(copy, route);
  check(Boolean(expectedHash) && createHash('sha256').update(hashInput).digest('hex') === expectedHash, `${route}: content or metadata differs from its frozen pre-migration source apart from approved accessibility labels`);
  if (legacySource) check(normalizeDocument(legacySource, route) === copy, `${route}: source content or metadata changed beyond its documented Astro migration adapters`);
  const { fields, body } = frontmatter(legacySource ?? copy);
  check(fields.slug === route.split('/').filter(Boolean).at(-1), `${route}: frontmatter slug differs from preserved URL`);
  check(existsSync(routeFile(route)), `${route}: missing built HTML output`);
  if (!existsSync(routeFile(route))) continue;

  const html = readFileSync(routeFile(route), 'utf8');
  const coverAlt = manifest.mediaAccessibility?.[route]?.coverAlt;
  if (coverAlt) {
    const coverImage = html.match(/<article\b[^>]*>[\s\S]*?<\/header>\s*(<img\b[^>]*>)/)?.[1];
    check(attribute(coverImage ?? '', 'alt') === coverAlt, `${route}: rendered cover alt text is missing or changed`);
  }
  const socialTitle = `FabioRosado | ${fields.title}`;
  const imageTitle = encodeURIComponent(fields.title).toUpperCase();
  const socialImage = `https://res.cloudinary.com/fabiorosado/image/upload/q_100/c_fit,co_rgb:0efb69,l_text:orbitron_50_style_bold_text_align_center:${imageTitle},w_1012/co_rgb:fc4056,g_south_east,l_text:orbitron_25_style_boldr:fabiorosado.dev,r_0,x_15,y_20/v1605190182/theflyingdev_og_whvovy.png`;
  assertMetadata(html, {
    title: socialTitle,
    description: fields.excerpt ?? fields.subtitle,
    canonical: `https://fabiorosado.dev${route}`,
    socialTitle,
    image: socialImage,
  });

  const bodyStart = html.indexOf('<section data-content-body');
  const bodyEnd = bodyStart < 0 ? -1 : html.indexOf('</section>', bodyStart);
  check(bodyStart >= 0 && bodyEnd > bodyStart, `${route}: rendered content boundary missing`);
  if (bodyStart >= 0 && bodyEnd > bodyStart) {
    const renderedBody = html.slice(bodyStart, bodyEnd);
    const actual = [...renderedBody.matchAll(/<h[1-6]\b[^>]*\bid="([^"]+)"/g)].map((match) => htmlText(match[1]));
    const expected = expectedHeadings(body).map(({ slug }) => slug);
    check(JSON.stringify(actual) === JSON.stringify(expected), `${route}: heading anchors differ (expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)})`);

    const media = manifest.mediaAccessibility?.[route];
    const images = [...renderedBody.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
    for (const tag of images) check(attribute(tag, 'alt') !== undefined, `${route}: rendered image is missing an alt attribute`);
    for (const { alt, count = 1 } of media?.images ?? []) {
      check(images.filter((tag) => attribute(tag, 'alt') === alt).length === count, `${route}: rendered image alt text is missing or changed: ${alt}`);
    }
    const iframes = [...renderedBody.matchAll(/<iframe\b[^>]*>/g)].map((match) => match[0]);
    for (const tag of iframes) check(Boolean(attribute(tag, 'title')?.trim()), `${route}: rendered iframe is missing a descriptive title`);
    for (const title of media?.iframes ?? []) {
      check(iframes.filter((tag) => attribute(tag, 'title') === title).length === 1, `${route}: rendered iframe title is missing or changed: ${title}`);
    }
  }

  for (const match of html.matchAll(/<(?:img|source)\b[^>]*\b(?:src|srcset)="([^"]+)"/g)) {
    const firstAsset = match[1].split(',')[0].trim().split(/\s+/)[0];
    check(localAssetExists(firstAsset, route), `${route}: missing built image asset ${firstAsset}`);
  }

  const imageReference = fields.image?.replace(/^\.\.\/\.\.\/images\//, '');
  if (imageReference) {
    const siteAsset = existsSync(path.join(site, 'src/images', imageReference)) || existsSync(path.join(site, 'public/images', imageReference));
    const legacyAsset = !legacySource || existsSync(path.join(root, 'src/images', imageReference)) || existsSync(path.join(root, 'static/images', imageReference));
    check(legacyAsset && siteAsset, `${route}: frontmatter image ${imageReference} is missing from source or Astro site`);
  }
}

for (const route of Object.keys(manifest.preservedRoutes)) {
  if (route === '/' || route.endsWith('/')) check(existsSync(routeFile(route)), `${route}: expected route output is absent`);
}

for (const route of Object.keys(manifest.retiredRoutes)) {
  const output = routeFile(route);
  check(!existsSync(output), `${route}: retired HTML route was emitted`);
}

for (const route of Object.keys(manifest.supportingRoutes)) {
  const output = route === '/robots.txt' || route.endsWith('.xml') || route.endsWith('.html')
    ? path.join(dist, route.slice(1))
    : routeFile(route);
  check(existsSync(output) && statSync(output).isFile(), `${route}: expected supporting output file is absent`);
}

const expectedHtmlRoutes = new Set([
  ...Object.keys(manifest.preservedRoutes),
  '/404.html',
  ...Object.keys(manifest.supportingRoutes).filter((route) => route.endsWith('.html')),
]);
const actualHtmlRoutes = new Set(builtHtmlRoutes());
check(
  actualHtmlRoutes.size === expectedHtmlRoutes.size && [...expectedHtmlRoutes].every((route) => actualHtmlRoutes.has(route)),
  `Built HTML route set differs from the manifest (expected ${JSON.stringify([...expectedHtmlRoutes].sort())}, got ${JSON.stringify([...actualHtmlRoutes].sort())})`,
);

const redirectPath = path.join(dist, '_redirects');
check(existsSync(redirectPath), 'Netlify-compatible redirects file was not copied to dist');
if (existsSync(redirectPath)) {
  const rules = readFileSync(redirectPath, 'utf8').split(/\r?\n/).filter(Boolean).map((line) => line.trim().split(/\s+/));
  const hasRule = (from, to, status) => rules.some((rule) => rule[0] === from && rule[1] === to && rule[2] === String(status));
  check(hasRule('/writings', '/articles/', 301), 'The /writings redirect is missing');
  check(hasRule('/about/', '/#about', 301) && hasRule('/uses/', '/#about', 301) && hasRule('/contact/', '/#contact', 301), 'A retired About, Uses, or Contact redirect is missing');
  for (const { from, to } of manifest.internalLinkRedirects ?? []) check(hasRule(from, to, 301), `The internal link redirect from ${from} to ${to} is missing`);
  check(hasRule('/books', '/410.html', 410) && hasRule('/books/', '/410.html', 410) && hasRule('/books/*', '/410.html', 410), 'A book route 410 rule is missing');
  check(!rules.some((rule) => rule[0] === '/twitch'), 'An obsolete /twitch redirect remains');
}

const sitemapPath = path.join(dist, 'sitemap-0.xml');
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const urls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => htmlText(match[1])));
  const expected = new Set(Object.keys(manifest.preservedRoutes).map((route) => `https://fabiorosado.dev${route}`));
  check(urls.size === expected.size && [...expected].every((url) => urls.has(url)), 'Sitemap URLs differ from the preserved route manifest');
}

if (failures.length) {
  console.error(`Migration verification failed (${failures.length}):\n- ${failures.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log(`Site verification passed: ${Object.keys(manifest.preservedRoutes).length} preserved page routes, ${contentRoutes.length} source-matched content documents, heading anchors, metadata, images, sitemap, and redirects.`);
}
