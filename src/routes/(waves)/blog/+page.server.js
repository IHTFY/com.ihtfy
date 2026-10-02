import posts from '#lib/server/posts.js';
export function load() {
	return {
		posts: posts.map(({ slug, title, date, excerpt, tags, readingTime }) => ({
			slug,
			title,
			date,
			excerpt,
			tags,
			readingTime
		}))
	};
}
