<script>
	import BlogPostCard from '#lib/components/base/blog-post-card.svelte';
	import BlogGrid from '#lib/components/layout/3-2-1-grid.svelte';
	import Section from '#lib/components/layout/section.svelte';

	export let data;
	$: posts = data.posts;
</script>

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
