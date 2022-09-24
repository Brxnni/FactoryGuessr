<script>
	export let text;
	export let type;
</script>

<style>
/* @salman-a :: https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle */
	h1,h2,h3 {
    color: inherit;
		font-style: italic;
		overflow: hidden;
		text-align: center;
		margin: 50px 0 20px 0;
	}

	h1:before,h2:before,h3:before,
	h1:after,h2:after,h3:after {
		background-color: white;
		content: "";
		display: inline-block;
		height: 1px;
		position: relative;
		vertical-align: middle;
    	width: 50%;
	}

	h1:before,h2:before,h3:before {
		right: 0.5em;
		margin-left: -50%;
	}

	h1:after,h2:after,h3:after {
		left: 0.5em;
		margin-right: -50%;
	}
</style>

{#if type === "h1"}
<h1><span>{text}</span></h1>
{:else if type === "h2"}
<h2><span>{text}</span></h2>
{:else if type === "h3"}
<h3><span>{text}</span></h3>
{/if}