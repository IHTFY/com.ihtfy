<script>
	export let filename;
	export let lang;
</script>

<div class="code-block">
	{#if filename}
		<div class="filename">{filename}</div>
	{/if}
	{#if lang}
		<div class="lang">{lang}</div>
	{/if}
	<slot />
</div>

<style lang="scss">
	.code-block {
		display: block;
		position: relative;
		background-color: var(--code-background-color);
		color: var(--code-text-color);
		font-family: var(--mono-font);
		font-size: 1rem;
		line-height: 1.33em;
		border-radius: 8px;
		box-shadow: var(--neumorphic-shading-concave), var(--neumorphic-shadow);

		padding: 30px 15px;
		margin: 30px 0;

		:global(pre) {
			overflow-x: auto;
			scrollbar-color: var(--primary-color) var(--scrollbar-track-color);
			scrollbar-width: thin;
			padding-bottom: 5px;

			&::-webkit-scrollbar {
				height: 8px;
			}
			&::-webkit-scrollbar-thumb {
				background: var(--primary-color);
				&:hover {
					background: var(--primary-light-color);
				}
			}
		}

		.filename {
			background: inherit;
			border-radius: 8px;
			margin-bottom: -2px;
			padding: 5px 10px;
			position: absolute;
			left: 0px;
			top: -16px;
			z-index: 1;
			box-shadow: var(--neumorphic-shading-convex), var(--neumorphic-shadow);
		}

		.lang {
			position: absolute;
			right: 0;
			top: -16px;
			background: inherit;
			border-radius: 8px;
			padding: 5px 10px;
			z-index: 2;
			font-size: 0.85em;
			box-shadow: var(--neumorphic-shading-convex), var(--neumorphic-shadow);
		}
	}
</style>
