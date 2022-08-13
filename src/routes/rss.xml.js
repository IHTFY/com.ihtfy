import { description, siteBaseUrl, title } from '$lib/meta';
import posts from '$lib/posts';

function escapeXml(unsafe) {
	return unsafe.replace(/[<>&'"]/g, function (c) {
		switch (c) {
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '&':
				return '&amp;';
			case "'":
				return '&apos;';
			case '"':
				return '&quot;';
		}
	});
}

export async function GET() {
	const body = xml(posts);
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};
	return {
		headers,
		body
	};
}

const xml = (posts) => `
<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${title}</title>
    <link>${siteBaseUrl}</link>
    <description>${description}</description>
    ${posts
			.map(
				(post) => `
        <item>
          <title>${escapeXml(post.title)}</title>
          <description>${escapeXml(post.excerpt)}</description>
          <link>${siteBaseUrl}/${post.slug}/</link>
          <pubDate>${new Date(post.date).toISOString()}</pubDate>
          ${post.tags ? post.tags.map((tag) => `<category term="${tag}" />`).join('') : ''}
          <media:thumbnail xmlns:media="http://search.yahoo.com/mrss/" url="${siteBaseUrl}/images/posts/${
					post.slug
				}/cover.jpg"/>
          <media:content xmlns:media="http://search.yahoo.com/mrss/" medium="image" url="${siteBaseUrl}/images/posts/${
					post.slug
				}/cover.jpg"/>
        </item>
      `
			)
			.join('')}
  </channel>
</rss>`;
