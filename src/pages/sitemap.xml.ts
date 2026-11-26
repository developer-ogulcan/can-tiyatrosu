import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { NAV, FOOTER_LINKS } from '../lib/site';

const playRoutes = {
  cocuk: 'cocuk-oyunlari',
  yetiskin: 'yetiskin-oyunlari',
  etkinlik: 'etkinlikler',
} as const;

const escapeXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site, url }) => {
  const origin = (site ?? url).origin;
  const paths = new Set<string>(['/', '/performanslar/etkinlikler']);

  for (const item of NAV) {
    paths.add(item.href);
    item.children?.forEach((c) => paths.add(c.href));
  }
  Object.values(FOOTER_LINKS)
    .flat()
    .forEach((l) => paths.add(l.href));

  try {
    const plays = await getCollection('plays');
    plays.forEach((p) => paths.add(`/performanslar/${playRoutes[p.data.category]}/${p.id}`));
  } catch (e) {
    /* koleksiyon boşsa geç */
  }

  try {
    const workshopPages = await getCollection('workshopPages');
    workshopPages.forEach((p) => paths.add(`/atolyeler/${p.id}`));
  } catch (e) {
    /* koleksiyon boşsa geç */
  }

  const urls = [...paths]
    .filter((p) => p.startsWith('/') && !p.startsWith('/admin'))
    .sort()
    .map((p) => {
      const priority = p === '/' ? '1.0' : p === '/bilet' || p === '/performanslar' ? '0.9' : '0.7';
      return `  <url><loc>${escapeXml(origin + p)}</loc><priority>${priority}</priority></url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};