<script>
	export let text;
	export let imageSrc;
	export let altText;

	import SpanBlock from "./SpanBlock.svelte";
</script>

<style>
	img {
		width: 40% !important;
	}
</style>

<SpanBlock text={text}>
	<img src={imageSrc} alt={altText} />
</SpanBlock>