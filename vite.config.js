import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter(),
			extensions: ['.svelte', '.md'],
			preprocess: [
				vitePreprocess(),
				mdsvex({
					extensions: ['.md'],
					rehypePlugins: [
						[
							rehypeExternalLinks,
							{ target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] }
						],
						rehypeSlug,
						[
							rehypeAutolinkHeadings,
							{
								behavior: 'append',
								content: {
									type: 'element',
									tagName: 'span',
									properties: { className: ['heading-link'] },
									children: [{ type: 'text', value: '#' }]
								}
							}
						]
					]
				})
			]
		})
	]
});
