import { SITE, PAGES } from "../config";

// Generated from PAGES so the sitemap cannot drift from the site's pages.
export const GET = () => {
  const urls = PAGES.map(
    (p) =>
      `  <url><loc>${SITE.url}${p.path === "/" ? "/" : p.path}</loc><lastmod>${SITE.updated}</lastmod><changefreq>${p.freq}</changefreq><priority>${p.priority}</priority></url>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
