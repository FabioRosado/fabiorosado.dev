import { getCollection } from 'astro:content';

export const prerender = true;

const site = 'https://fabiorosado.dev';
const xmlEscape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const lastmod = (date) => date ? `<lastmod>${new Date(date).toISOString().slice(0, 10)}</lastmod>` : '';

export async function GET() {
  const [articles, cheatsheets, projects] = await Promise.all([
    getCollection('blog'),
    getCollection('cheatsheets'),
    getCollection('projects'),
  ]);
  const pages = [
    { path: '/', date: null },
    { path: '/articles/', date: null },
    { path: '/cheatsheets/', date: null },
    { path: '/projects/', date: null },
    ...articles.map((entry) => ({ path: `/blog/${entry.data.slug}/`, date: entry.data.date })),
    ...cheatsheets.map((entry) => ({ path: `/cheatsheets/${entry.data.slug}/`, date: entry.data.date })),
    ...projects.map((entry) => ({ path: `/projects/${entry.data.slug}/`, date: entry.data.date })),
  ];
  const urls = pages.map(({ path, date }) => `<url><loc>${xmlEscape(new URL(path, site).href)}</loc>${lastmod(date)}</url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
