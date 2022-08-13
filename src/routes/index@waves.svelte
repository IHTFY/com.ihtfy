<script context="module">
	export async function load({ fetch }) {
		const url = '/posts.json';
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import About from '$lib/components/home/about.svelte';
	// import Experience from '$lib/components/home/experience.svelte';
	import Hero from '$lib/components/home/hero.svelte';
	import Projects from '$lib/components/home/projects.svelte';
	import RecentPosts from '$lib/components/home/recent-posts.svelte';
	import { title } from '$lib/meta';

	export let posts;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
</svelte:head>

<div class="container">
	<Hero />
	<About />
	<RecentPosts {posts} />
	<Projects />
	<!-- <Experience /> -->
</div>
