<script>
	export let text1;
	export let text2;
	export let text3;

	export let href1 = "";
	export let href2 = "";
	export let href3 = "";
</script>

<style>

	div.credit {
		text-align: center;
		margin-bottom: 15px;
	}

	div.credit span {
		display: block;
	}

	a:not(:hover) {
		text-decoration: none;
	}

	span.n1 { font-size: 0.8em !important; }
	span.n2 { font-size: 1.3em !important; font-weight: bold; margin: 5px 0 5px 0 }
	span.n3 { font-size: 1.1em !important; }

</style>

<div class="credit">
	{#if href1}<a href = "{href1}"> <span class="n1">{text1}:</span> </a>
	{:else} <span class="n1">{text1}:</span> {/if}

	{#if href2}<a href = "{href2}"> <span class="n2">{text2}</span> </a>
	{:else} <span class="n2">{text2}</span> {/if}

	{#if href3}<a href = "{href3}"> <span class="n3">by {text3}.</span> </a>
	{:else} <span class="n3">by {text3}.</span> {/if}
</div>