<script>
	import '../app.scss';
	import { description, image, keywords, title } from '$lib/meta';
	import { onMount } from 'svelte';
	import { theme } from '$lib/components/style/theme.js';

	onMount(() => {
		const { matches: isDarkTheme } = window.matchMedia('(prefers-color-scheme: dark)');

		let preference;

		preference = localStorage.getItem('theme')
			? localStorage.getItem('theme')
			: isDarkTheme
			? 'dark'
			: 'light';

		theme.set(preference);

		theme.subscribe((current) => {
			localStorage.setItem('theme', current);
			document.documentElement.setAttribute('data-theme', current);
		});
	});
</script>

<svelte:head>
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />

	<meta property="og:image" content={image} />
	<meta name="twitter:image" content={image} />
	<script>
		try {
			// prettier-ignore
			const { matches: isDarkMode } = window.matchMedia( "(prefers-color-scheme: dark)")

			const theme = localStorage.getItem('theme');
			let preference = theme || (isDarkMode ? 'dark' : 'light');

			// prettier-ignore
			if (preference) document.documentElement.setAttribute("data-theme", preference)
		} catch (err) {
			console.error(err);
		}
	</script>
</svelte:head>

<slot />