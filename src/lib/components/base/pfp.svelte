<script>
	import Image from '$lib/components/base/image.svelte';

	$: isHovered = 0;

	const hovering = () => (isHovered = 1);
	const leaving = () => (isHovered = 0);
</script>

<div on:mouseover={hovering} on:focus={hovering} on:mouseout={leaving} on:blur={leaving}>
	<div id="regular" style="opacity: {1 - isHovered};">
		<Image path="avatar" alt="Frankie" filename="avatar" />
	</div>
	<div id="alternate" style="opacity: {isHovered};">
		<Image path="avatar" alt="Frankie" filename="avatar-alt" />
	</div>
</div>

<style>
	#regular,
	#alternate {
		transition: all 0.5s ease;
		position: absolute;
		transform: scale(1.1) translate(0px, 20px);
	}
</style>
