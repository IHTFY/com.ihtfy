<script>
	import About from '#lib/components/home/about.svelte';
	// import Experience from '#lib/components/home/experience.svelte';
	import Hero from '#lib/components/home/hero.svelte';
	import Projects from '#lib/components/home/projects.svelte';
	import RecentPosts from '#lib/components/home/recent-posts.svelte';
	import { title } from '#lib/meta.js';

	export let data;
	$: posts = data.posts;
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
