import { description, siteBaseUrl, title } from '#lib/meta.js';
import posts from '#lib/server/posts.js';
import { escapeXml } from '#lib/server/xml.js';

export const prerender = true;

export function GET() {
	const items = posts
		.map((post) => {
			const url = escapeXml(`${siteBaseUrl}/${post.slug}/`);
			const image = escapeXml(`${siteBaseUrl}/optimized-images/posts/${post.slug}/cover.png`);
			return `<item>
   <title>${escapeXml(post.title)}</title>
   <description>${escapeXml(post.excerpt)}</description>
   <link>${url}</link>
   <guid isPermaLink="true">${url}</guid>
   <pubDate>${new Date(post.date).toUTCString()}</pubDate>
   ${post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('')}
   <media:thumbnail url="${image}" />
   <media:content medium="image" url="${image}" />
  </item>`;
		})
		.join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
 <channel>
  <title>${escapeXml(title)}</title>
  <link>${escapeXml(siteBaseUrl)}</link>
  <description>${escapeXml(description)}</description>
  <atom:link href="${escapeXml(siteBaseUrl)}/rss.xml" rel="self" type="application/rss+xml" />
  ${items}
 </channel>
</rss>`;
	return new Response(body, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
