<script>
	import { theme } from '$lib/components/style/theme.js';

	const toggleDarkMode = () => theme.update((current) => (current === 'light' ? 'dark' : 'light'));
</script>

<input
	id="toggle"
	class="toggle"
	type="checkbox"
	checked={$theme === 'light'}
	on:change={toggleDarkMode}
/>

<style>
	/* adapted from https://codepen.io/mrozilla/pen/OJJNjRb */
	/* @import '../../scss/breakpoints.scss'; */
	@media only screen and (min-width: 480px) {
		.toggle:hover:not(:checked) {
			color: hsl(40, 100%, 50%);
		}
		.toggle:hover:checked {
			color: #1c1e26;
		}
	}
	.toggle {
		--size: 1.5rem;

		min-width: var(--size);
		z-index: 1;

		appearance: none;
		outline: none;
		cursor: pointer;

		width: var(--size);
		height: var(--size);
		box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
		border-radius: 999px;
		color: hsl(240, 100%, 95%);

		transition: all 500ms;
	}
	.toggle:checked {
		--ray-size: calc(var(--size) * -0.4);
		--right: calc(var(--size) * 0.65);
		--left: calc(var(--size) * -0.65);
		--long-right: calc(var(--size) * 0.46);
		--long-left: calc(var(--size) * -0.46);

		transform: scale(0.75);
		color: hsl(40, 100%, 50%);
		box-shadow: inset 0 0 0 var(--size), var(--left) 0 0 var(--ray-size),
			var(--right) 0 0 var(--ray-size), 0 var(--left) 0 var(--ray-size),
			0 var(--right) 0 var(--ray-size), var(--long-left) var(--long-left) 0 var(--ray-size),
			var(--long-right) var(--long-right) 0 var(--ray-size),
			var(--long-left) var(--long-right) 0 var(--ray-size),
			var(--long-right) var(--long-left) 0 var(--ray-size);
	}
</style>
