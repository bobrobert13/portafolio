import type { APIRoute } from 'astro';
import { defaultLocale, locales, site } from '@/config';
import { localePath } from '@/i18n/utils';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = () => {
  const alternate = (locale: string, href: string) =>
    `    <xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(href)}" />`;

  const paths = Object.values(site.routes);

  const urls = paths
    .flatMap((route) =>
      locales.map((locale) => {
        const href = `${site.url}${localePath(locale, route)}`;
        const alternates = [
          ...locales.map((code) => alternate(code, `${site.url}${localePath(code, route)}`)),
          alternate('x-default', `${site.url}${localePath(defaultLocale, route)}`),
        ].join('\n');

        return `  <url>
    <loc>${escapeXml(href)}</loc>
${alternates}
  </url>`;
      }),
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
