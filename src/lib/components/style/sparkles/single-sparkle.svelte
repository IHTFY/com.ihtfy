<script>
	export let color;
	export let size;
	export let style;
</script>

<div class="wrapper" style="top: {style.top}; left: {style.left};">
	<svg
		width={size}
		height={size}
		viewBox="0 0 160 160"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M80 0c0 80 0 80 80 80c-80 0-80 0-80 80c0-80 0-80-80-80c80 0 80 0 80-80"
			fill={color}
		/>
	</svg>
</div>

<style lang="scss">
	.wrapper {
		position: absolute;
		pointer-events: none;
		display: flex;
		z-index: 2;
		animation: grow-and-shrink 900ms ease-in-out forwards;

		svg {
			animation: spin 900ms linear forwards;
		}
	}

	@keyframes grow-and-shrink {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(180deg);
		}
	}
</style>
