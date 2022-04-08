<script>
	import Image from '$lib/components/base/image.svelte';

	$: isHovered = 0;

	const hovering = () => (isHovered = 1);
	const leaving = () => (isHovered = 0);
</script>

<div id="wrap" on:mouseover={hovering} on:focus={hovering} on:mouseout={leaving} on:blur={leaving}>
	<div id="regular" style="transform: translate(0px, {20 + isHovered * 250}px)">
		<Image path="avatar" alt="Frankie" filename="avatar" />
	</div>
	<div id="alternate" style="transform: translate(0px, {20 + (1 - isHovered) * 250}px)">
		<Image path="avatar" alt="Frankie" filename="avatar-alt" />
	</div>
</div>

<style>
	#wrap {
		width: 100%;
		height: 100%;
		transform: scale(1.1);
		overflow: hidden;
		user-select: none;
	}

	#regular,
	#alternate {
		width: 100%;
		transition: all 0.5s ease;
		position: absolute;
		transform: translate(0px, 20px);
	}
</style>
