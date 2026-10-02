<script>
	import About from '#lib/components/home/about.svelte';
	// import Experience from '#lib/components/home/experience.svelte';
	import Hero from '#lib/components/home/hero.svelte';
	import Projects from '#lib/components/home/projects.svelte';
	import RecentPosts from '#lib/components/home/recent-posts.svelte';

	export let data;
	$: posts = data.posts;
</script>

<div class="container">
	<Hero />
	<About />
	<RecentPosts {posts} />
	<Projects />
	<!-- <Experience /> -->
</div>
