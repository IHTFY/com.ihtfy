export const prerender = true;
import posts from '#lib/server/posts.js';

export async function GET() {
	const body = Object.keys(posts)
		.slice(0, 4)
		.map((index) => {
			const { slug, title, date, excerpt, tags, readingTime } = posts[index];
			return {
				slug,
				title,
				date,
				excerpt,
				tags,
				readingTime
			};
		});

	return Response.json(body);
}
