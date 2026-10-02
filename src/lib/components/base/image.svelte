<script>
	export let alt;
	export let path = null;
	export let filename;
	export let figcaption = null;

	let imageSrc;

	$: imageSrc = `/optimized-images/${path ? path + '/' : ''}${filename}`;
</script>

{#snippet renderPicture()}
	<picture>
		<source srcset="{imageSrc}.avif" type="image/avif" />
		<source srcset="{imageSrc}.webp" type="image/webp" />
		<img src="{imageSrc}.png" {alt} loading="lazy" decoding="async" />
	</picture>
{/snippet}

{#if figcaption}
	<figure>
		{@render renderPicture()}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- Captions are authored in repository content. -->
		<figcaption>{@html figcaption}</figcaption>
	</figure>
{:else}
	{@render renderPicture()}
{/if}

<style lang="scss">
	figure {
		margin: 0;
	}

	picture {
		position: relative;
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
		}
	}
</style>
