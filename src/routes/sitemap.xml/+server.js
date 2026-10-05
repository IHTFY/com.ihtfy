import { siteBaseUrl } from '#lib/meta.js';
import posts from '#lib/server/posts.js';
import { escapeXml } from '#lib/server/xml.js';

export const prerender = true;

export function GET() {
	const paths = ['/', '/blog/', '/resume/', '/support/', ...posts.map(({ slug }) => `/${slug}/`)];
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 ${paths.map((path) => `<url><loc>${escapeXml(siteBaseUrl + path)}</loc></url>`).join('\n')}
</urlset>`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
