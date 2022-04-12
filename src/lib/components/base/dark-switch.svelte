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
	title="Toggle dark mode"
/>

<style lang="scss">
	/* adapted from https://codepen.io/mrozilla/pen/OJJNjRb */
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
		// normal color in dark mode
		color: var(--text-light-color);

		transition: all 500ms;

		// hovering in dark mode
		&:hover {
			color: var(--text-color);
		}

		&:checked {
			--ray-size: calc(var(--size) * -0.4);
			--right: calc(var(--size) * 0.65);
			--left: calc(var(--size) * -0.65);
			--long-right: calc(var(--size) * 0.46);
			--long-left: calc(var(--size) * -0.46);

			transform: scale(0.75);
			// normal color in light mode
			color: var(--primary-color);
			box-shadow: inset 0 0 0 var(--size), var(--left) 0 0 var(--ray-size),
				var(--right) 0 0 var(--ray-size), 0 var(--left) 0 var(--ray-size),
				0 var(--right) 0 var(--ray-size), var(--long-left) var(--long-left) 0 var(--ray-size),
				var(--long-right) var(--long-right) 0 var(--ray-size),
				var(--long-left) var(--long-right) 0 var(--ray-size),
				var(--long-right) var(--long-left) 0 var(--ray-size);

			// hovering in light mode
			&:hover {
				color: var(--text-color);
			}
		}
	}
</style>
