<script>
	import YouTubeIcon from '#lib/svg/socials/youtube.svelte';
	import GitHubIcon from '#lib/svg/socials/github.svelte';
	import TwitterIcon from '#lib/svg/socials/twitter.svelte';
	import HeartIcon from '#lib/svg/socials/heart.svelte';
	import TikTokIcon from '#lib/svg/socials/tiktok.svelte';
	import EmailIcon from '#lib/svg/socials/email.svelte';
	// import RSSIcon from '#lib/svg/rss.svelte';
</script>

<div class="socials">
	<a
		href="https://www.youtube.com/user/ihopethisfindsyou"
		target="_blank"
		rel="noopener noreferrer"
		title="Watch my videos on YouTube"
	>
		<YouTubeIcon />
	</a>
	<a href="https://github.com/IHTFY/" target="_blank" rel="noopener" title="See my code on GitHub">
		<GitHubIcon />
	</a>
	<a
		href="https://twitter.com/ihtfy"
		target="_blank"
		rel="noopener noreferrer"
		title="Follow me on Twitter"
	>
		<TwitterIcon />
	</a>
	<a href="/support/" title="Support my work">
		<HeartIcon />
	</a>
	<a
		href="https://tiktok.com/@ihtfy"
		target="_blank"
		rel="noopener noreferrer"
		title="Follow me on TikTok"
	>
		<TikTokIcon />
	</a>
	<a href="mailto:site@FrankieMercado.com" target="_blank" rel="noopener" title="Send an email">
		<EmailIcon />
	</a>
	<!-- <a href="/rss.xml" target="_blank" rel="noopener" title="Subscribe to my RSS Feed">
		<RSSIcon />
	</a> -->
</div>

<style lang="scss">
	@use '../../scss/breakpoints.scss' as *;
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			width: 32px;
			color: var(--text-color);
			fill: var(--text-color);

			&:hover {
				color: var(--link-highlight-color);
				fill: var(--link-highlight-color);
			}
		}
	}
</style>
