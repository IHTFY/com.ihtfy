<script>
	import '../../app.scss';
	import Header from '#lib/components/layout/header.svelte';
	import Footer from '#lib/components/layout/footer.svelte';

	import Image from '#lib/components/base/image.svelte';
	import Tag from '#lib/components/base/tag.svelte';
	import dateformat from 'dateformat';
	import BlogPostCard from '#lib/components/base/blog-post-card.svelte';
	import ThreeByThreeGrid from '#lib/components/layout/3x3-grid.svelte';
	import Section from '#lib/components/layout/section.svelte';

	export let data;
	$: post = data.post;
</script>

<div class="markdown-layout">
	<Header animated={false} />

	<main>
		<article id="markdown-content">
			<div class="header">
				<h1>{post.title}</h1>
				<div class="note">{dateformat(post.date, 'UTC:mmmm dS, yyyy')} — {post.readingTime}</div>
				<div class="tags">
					{#each post.tags as tag (tag)}
						<Tag>{tag}</Tag>
					{/each}
				</div>
			</div>
			<div class="cover-image">
				<Image path="posts/{post.slug}" filename="cover" alt="Cover Image" />
			</div>
			<div class="content">
				<slot />
			</div>
		</article>

		{#if post.relatedPosts && post.relatedPosts.length > 0}
			<div class="related-posts container">
				<Section
					title="Related posts"
					description="Have some time? Feel free to read other posts about the same subject."
					align="top"
				>
					<ThreeByThreeGrid>
						{#each post.relatedPosts as rel (rel.slug)}
							<BlogPostCard post={rel} />
						{/each}
					</ThreeByThreeGrid>
				</Section>
			</div>
		{/if}
	</main>

	<Footer />
</div>
