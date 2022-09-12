<script>
	export let text;
	export let id;
</script>

<style>
	div.spanblock {
		display: inline-block;
		margin: 15px;
		min-width: 20%;
	}
	
	div.spanblock > span {
		font-weight: bold;
		margin: 10px;
		display: block;
	}
</style>

<div id={id !== undefined ? id : ""} class="spanblock">
	<span>{text}</span>
	<slot />
</div>