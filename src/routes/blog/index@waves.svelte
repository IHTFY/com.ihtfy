<script context="module">
	export async function load({ fetch }) {
		const url = '/blog.json';
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import BlogPostCard from '$lib/components/base/blog-post-card.svelte';
	import BlogGrid from '$lib/components/layout/3-2-1-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import { title } from '$lib/meta';

	export let posts;
</script>

<svelte:head>
	<title>Blog | {title}</title>
	<meta property="og:title" content="Blog | {title}" />
	<meta name="twitter:title" content="Blog | {title}" />
</svelte:head>

<section id="blog">
	<Section align="top" title="All posts">
		<div class="container">
			<BlogGrid>
				{#each posts as post}
					<BlogPostCard {post} />
				{/each}
			</BlogGrid>
		</div>
	</Section>
</section>
