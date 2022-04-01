<script>
	import YouTubeIcon from '$lib/svg/socials/youtube.svelte';
	import GitHubIcon from '$lib/svg/socials/github.svelte';
	import InstagramIcon from '$lib/svg/socials/instagram.svelte';
	import TwitterIcon from '$lib/svg/socials/twitter.svelte';
	import PatreonIcon from '$lib/svg/socials/patreon.svelte';
	import TikTokIcon from '$lib/svg/socials/tiktok.svelte';
	import EmailIcon from '$lib/svg/socials/email.svelte';
	import RSSIcon from '$lib/svg/rss.svelte';
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
	<a href="https://github.com/IHTFY/" target="_blank" rel="noopener" title="See my GitHub profile">
		<GitHubIcon />
	</a>
	<a
		href="https://www.instagram.com/ihtfy/"
		target="_blank"
		rel="noopener noreferrer"
		title="See my pictures on Instagram"
	>
		<InstagramIcon />
	</a>
	<a
		href="https://twitter.com/ihtfy"
		target="_blank"
		rel="noopener noreferrer"
		title="Follow me on Twitter"
	>
		<TwitterIcon />
	</a>
	<a
		href="https://patreon.com/ihtfy"
		target="_blank"
		rel="noopener noreferrer"
		title="Send me a tip on Patreon"
	>
		<PatreonIcon />
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
	<a href="/rss.xml" target="_blank" rel="noopener" title="Subscribe to my RSS Feed">
		<RSSIcon />
	</a>
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			width: 24px;
			color: var(--text-color);
			fill: var(--text-color);

			&:hover {
				color: var(--link-highlight-color);
				fill: var(--link-highlight-color);
			}
		}
	}
</style>
