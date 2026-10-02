import { error } from '@sveltejs/kit';
const modules = import.meta.glob('../../lib/posts/*.md');

export async function load({ parent }) {
	const { post } = await parent();
	const loadPost = modules[`../../lib/posts/${post.slug}.md`];
	if (!loadPost) error(404, 'Post not found');
	const module = await loadPost();
	return { post, component: module.default };
}
