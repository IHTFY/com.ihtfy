import posts from '#lib/server/posts.js';
export function load() {
	return {
		posts: posts.slice(0, 4).map(({ slug, title, date, excerpt, tags, readingTime }) => ({
			slug,
			title,
			date,
			excerpt,
			tags,
			readingTime
		}))
	};
}
