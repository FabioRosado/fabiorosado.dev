# Gatsby to Astro migration

## Route decisions

`route-manifest.json` records all 62 preserved page routes, 20 retired routes, and the original Gatsby source paths. Frozen SHA-256 hashes preserve an automated content baseline after the old source tree is removed. `/writings` remains a redirect to `/articles/`; `/twitch` is removed. Book URLs return 410, while `/about/`, `/uses/`, and `/contact/` redirect to matching homepage sections.

## Sequence

1. **Inventory and freeze route decisions — complete.** Record page paths, retirement responses, useful redirects, and supporting SEO routes.
2. **Build the Astro site — complete.** Preserve all article, cheatsheet, and project documents, assets, URLs, metadata, and heading anchors. Implement the single-page homepage and archive routes.
3. **Validate content and routes — complete.** `npm run verify` builds the static site and checks all 62 preserved routes, 58 unchanged content documents against their frozen source hashes, heading anchors, metadata, referenced images, sitemap URLs, redirect rules, retired-route absence, and exact route-set parity.
4. **Review the homepage — complete.** Use the selected portfolio references for typography, composition, and palette, refined by Fabio's engineering-focused direction. The homepage has the concise role and backend/developer-tools summary, a layered conceptual architecture illustration, two featured projects, and LinkedIn/GitHub contact links. Desktop and mobile layouts passed the Impeccable review.
5. **Cut over the repository — complete.** Astro now lives at the repository root; root `package.json`, lockfile, Node version, and Netlify build config select the static Astro site. Gatsby pages, components, configuration, old static files, generated cache, and contact function were removed. The pre-existing uncommitted Gatsby package edits are preserved in `pre-migration-gatsby-package-edits.patch.gz`.
6. **Deploy preview — pending.** The linked Netlify project now builds successfully offline from the root Astro configuration, with route/content verification enabled as the build command. No deployment has been made. Before publishing, create a deploy preview and verify trailing slashes, canonical/social metadata, sitemap output, redirects, and book 410 responses on the host.

## Current status

- The root app is Astro; no Gatsby runtime or contact backend remains in the deployed source tree.
- `npm run verify` is the Netlify build command, so route/content validation runs before the static output is published. The linked Netlify offline build completes with 63 generated pages.
- The post-migration local Netlify preview returned HTTP 301 for `/writings`, `/about/`, `/uses/`, and `/contact/`; HTTP 410 for `/books/` and a book slug; and HTTP 200 for `/articles/`, `/projects/`, and a representative article. Slashless archive and article requests also resolve, while canonical URLs retain trailing slashes.
- Production-host response behavior remains unverified. The site has not been deployed.
- `OA-about.png` was already missing from Gatsby source and returned 404 on the live site. The migrated project page retains the image's “About Page” label; the exception is recorded in the route manifest.
- The `/twitch` redirect was removed. The approved homepage design and the supplied references remain intact.
