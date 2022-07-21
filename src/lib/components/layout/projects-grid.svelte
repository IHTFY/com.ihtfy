<div class="grid-container">
	<slot />
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';

	.grid-container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;

		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
		}

		> :global(:nth-child(6n + 2)),
		:global(:nth-child(6n + 4)) {
			grid-row: span 2;
		}
		> :global(:nth-child(6n + 0)),
		:global(:nth-child(6n + 1)),
		:global(:nth-child(6n + 3)),
		:global(:nth-child(6n + 5)) {
			grid-column: span 2;
		}
	}
</style>
