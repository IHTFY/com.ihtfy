<script>
	import { title } from '$lib/meta';
</script>

<svelte:head>
	<title>Resume | {title}</title>
	<meta property="og:title" content="Resume | {title}" />
	<meta name="twitter:title" content="Resume | {title}" />
</svelte:head>

<div>
	<embed
		src="/francisco-mercado-resume-public-2019-07-30.pdf"
		width="100%"
		height="100%"
		type="application/pdf"
	/>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
