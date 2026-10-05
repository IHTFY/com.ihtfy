<script>
	import '../app.scss';
	import { description, image, keywords, siteBaseUrl, title } from '#lib/meta.js';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { theme } from '#lib/components/style/theme.js';

	let { children } = $props();
	const post = $derived(page.data.post);
	const pageTitle = $derived(
		post
			? `${post.title} | ${title}`
			: page.url.pathname === '/blog/'
				? `Blog | ${title}`
				: page.url.pathname === '/resume/'
					? `Resume | ${title}`
					: page.url.pathname === '/support/'
						? `Support | ${title}`
						: title
	);
	const pageDescription = $derived(post?.excerpt ?? description);
	const pageImage = $derived(
		post ? `${siteBaseUrl}/optimized-images/posts/${post.slug}/cover.png` : image
	);
	const pageKeywords = $derived(post ? [...post.tags, ...keywords] : keywords);

	onMount(() => {
		const { matches: isDarkTheme } = window.matchMedia('(prefers-color-scheme: dark)');
		let savedTheme;
		try {
			savedTheme = localStorage.getItem('theme');
		} catch {
			/* Storage can be unavailable. */
		}
		theme.set(
			savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : isDarkTheme ? 'dark' : 'light'
		);
		return theme.subscribe((current) => {
			document.documentElement.setAttribute('data-theme', current);
			try {
				localStorage.setItem('theme', current);
			} catch {
				/* Keep the in-memory preference. */
			}
		});
	});
</script>

<svelte:head>
	<meta name="keywords" content={pageKeywords.join(', ')} />
	<meta name="description" content={pageDescription} />
	<meta property="og:description" content={pageDescription} />
	<meta name="twitter:description" content={pageDescription} />
	<title>{pageTitle}</title>
	<meta property="og:title" content={pageTitle} />
	<meta name="twitter:title" content={pageTitle} />
	<meta property="og:image" content={pageImage} />
	<meta name="twitter:image" content={pageImage} />
	<script>
		const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		let savedTheme;
		try {
			savedTheme = localStorage.getItem('theme');
		} catch {
			/* Storage can be unavailable. */
		}
		document.documentElement.setAttribute(
			'data-theme',
			savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : isDarkMode ? 'dark' : 'light'
		);
	</script>
</svelte:head>

{@render children()}
