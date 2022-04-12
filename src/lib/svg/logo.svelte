<script>
	export let animated = true;
</script>

<svg
	id="logo"
	class:animated
	width="600"
	height="169"
	viewBox="0 0 44 14"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g id="icon" transform="translate(0)">
		<path
			d="M4 2l8 5l0 6l-10-12l10 0l-10 12l0-6l8-5"
			stroke="#21326D"
			stroke-width="0.7"
			stroke-linecap="round"
			stroke-linejoin="round"
			fill="none"
		/>
	</g>

	<g id="name" transform="translate(14 3)" fill="transparent">
		<path stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round" d="M1.05,0V8.09H0V0Z" />
		<path
			stroke-width="0.2"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M3.91,0V3.38H7.82V0H8.88V8.09H7.82V4.3H3.91V8.09h-1V0Z"
		/>
		<path
			stroke-width="0.2"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12.23.89H9.77V0h6V.89H13.29v7.2H12.23Z"
		/>
		<path
			stroke-width="0.2"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M16.66,0H21V.88H17.7V3.56h3.06v.87H17.7V8.09h-1Z"
		/>
		<path
			stroke-width="0.2"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M24.3,8.09V4.66L21.75,0h1.18l1.14,2.23c.32.62.56,1.11.81,1.67h0c.23-.53.51-1,.82-1.67L26.88,0h1.19L25.36,4.64V8.09Z"
		/>
	</g></svg
>

<style lang="scss">
	#logo {
		width: auto;
		height: 100%;

		#icon {
			transition: all 0.2s ease-in-out;
			fill: var(--text-color);
			stroke: var(--text-color);

			path {
				fill: none;
				stroke: inherit;
			}
		}

		#name {
			transition: all 0.2s ease-in-out;
			fill: var(--text-color);

			path {
				fill: inherit;
			}
		}

		&:hover {
			#icon {
				stroke: var(--button-secondary-light-text-color);
			}

			#name {
				fill: var(--button-secondary-light-text-color);
				stroke: none;
			}
		}
	}

	// LOGO SVG ANIMATION

	@keyframes animate-svg-fill {
		0% {
			fill: transparent;
		}

		100% {
			fill: inherit;
		}
	}

	@keyframes animate-svg-stroke {
		0% {
			stroke-dasharray: 74.1216117214;
			stroke-dashoffset: 74.1216117214;
		}

		100% {
			stroke-dasharray: 74.1216117214;
			stroke-dashoffset: 0;
		}
	}

	@media screen and (prefers-reduced-motion: no-preference) {
		#logo.animated {
			#icon > path {
				animation: animate-svg-stroke 3s ease-in-out 0s both;
			}
			#name {
				> path:nth-child(1) {
					animation: animate-svg-fill 2s ease-in-out 0.4s both,
						animate-svg-stroke 3s ease-in-out both;
				}
				> path:nth-child(2) {
					animation: animate-svg-fill 2s ease-in-out 0.8s both,
						animate-svg-stroke 3s ease-in-out both;
				}
				> path:nth-child(3) {
					animation: animate-svg-fill 2s ease-in-out 1.2s both,
						animate-svg-stroke 3s ease-in-out both;
				}
				> path:nth-child(4) {
					animation: animate-svg-fill 2s ease-in-out 1.6s both,
						animate-svg-stroke 3s ease-in-out both;
				}
				> path:nth-child(5) {
					animation: animate-svg-fill 2s ease-in-out 2s both, animate-svg-stroke 2s ease-in-out both;
				}
			}
		}
	}
</style>
