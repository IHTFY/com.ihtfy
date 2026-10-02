<div class="grid-container">
	<slot />
</div>

<style lang="scss">
	@use '../../scss/breakpoints.scss' as *;

	.grid-container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}
</style>
