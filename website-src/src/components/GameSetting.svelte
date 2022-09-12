<script>
	import SpanBlock from "./SpanBlock.svelte";

	export let type;
	export let id;
	export let onChange;

	function handleText (){ return "Not implemented"; };

	switch (id){
		case "difficulty":
			handleText = function(val){
				return val ? "Easy Mode" : "Hard Mode"
			}; break;
		case "zoom":
			handleText = function(val){
				return val ? "Zoom" : "No Zoom"
			}; break;
		case "pan":
			handleText = function(val){
				return val ? "Pan" : "No Pan"
			}; break;
		case "timelimit":
			handleText = function(val){
				if (val === 0) return "Time Limit: None";
				else return `Time Limit: ${val * 5} Sec`;
			}; break;
	}

	let inputValue;
	if (type === "switch") inputValue = true;
	else if (type === "slider") inputValue = 0;
</script>

<style>
	label.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	label.switch input {
		opacity: 0;
	}

	span.switchslider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #8cf022;
		background-color: #D3D3D3;
		-webkit-transition: .4s;
		transition: .4s;
		border-radius: 34px;
	}

	span.switchslider:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: .4s;
		transition: .4s;
		border-radius: 50%;
	}

	input:checked + .switchslider {
		background-color: #8cf022;
	}
	
	input:focus + .switchslider {
		box-shadow: 0 0 1px #8cf022;
	}

	input:checked + .switchslider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* https://www.w3schools.com/howto/howto_js_rangeslider.asp */
	label.slider {
		width: 100%;
	}

	/* The slider itself */
	label.slider > input {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 12.5px;
		background: #d3d3d3;
		outline: none;
		opacity: 1;
		-webkit-transition: .2s;
		transition: opacity .2s;
		border-radius: 10px;
	}

	/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
	label.slider > input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		background: #8cf022;
		cursor: pointer;
		border-radius: 50%;
	}

	label.slider > input::-moz-range-thumb {
		width: 25px;
		height: 25px;
		background: #8cf022;
		cursor: pointer;
		border-radius: 50%;
	}
</style>

<SpanBlock id={id} text = {handleText(inputValue)}>
	{#if type === "switch"}
		<label class = "switch">
			<input on:change={onChange(id, inputValue)} bind:checked={inputValue} type="checkbox" />
			<span class="switchslider"></span>
		</label>
	{:else if type === "slider"}
		<label class = "slider">
			<input on:change={onChange(id, inputValue)} bind:value={inputValue} type="range" min="0" max="12" />
		</label>
	{/if}
</SpanBlock>