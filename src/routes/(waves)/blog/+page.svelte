<script>
	import BlogPostCard from '#lib/components/base/blog-post-card.svelte';
	import BlogGrid from '#lib/components/layout/3-2-1-grid.svelte';
	import Section from '#lib/components/layout/section.svelte';
	import { title } from '#lib/meta.js';

	export let data;
	$: posts = data.posts;
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
				{#each posts as post (post.slug)}
					<BlogPostCard {post} />
				{/each}
			</BlogGrid>
		</div>
	</Section>
</section>
