export const prerender = true;
import { error } from '@sveltejs/kit';
import posts from '#lib/server/posts.js';

export function GET({ params }) {
	const post = posts.find((x) => x.slug === params.slug);
	if (post) {
		return Response.json(post);
	}

	error(404, 'Post not found');
}

export function entries() {
	return posts.map(({ slug }) => ({ slug }));
}
