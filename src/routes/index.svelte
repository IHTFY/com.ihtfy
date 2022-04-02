<script context="module">
	export async function load({ fetch }) {
		const url = '/posts.json';
		const res = await fetch(url);

		const test = await res.json();

		if (res.ok) {
			return {
				props: {
					posts: test
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
	import Hero from '$lib/components/home/hero.svelte';
	import About from '$lib/components/home/about.svelte';
	import RecentPosts from '$lib/components/home/recent-posts.svelte';
	import Experience from '$lib/components/home/experience.svelte';
	import Projects from '$lib/components/home/projects.svelte';
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
	<Experience />
</div>
