import { error } from '@sveltejs/kit';
import posts from '#lib/server/posts.js';

export function load({ params }) {
	const post = posts.find((post) => post.slug.toLowerCase() === params.slug.toLowerCase());
	if (!post) error(404, 'Post not found');
	return { post };
}
