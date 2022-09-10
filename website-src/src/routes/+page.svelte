<head>
	<title>FactoryGuessr</title>
	<meta
		name="description"
		content="FactoryGuessr is a geographical guessing game made for the game Satisfactory."
	>
</head>

<script>
	import LinedHeading from "../components/LinedHeading.svelte";
	import Centered from "../components/Centered.svelte";
	import GameSetting from "../components/GameSetting.svelte";
	import ImageBlock from "../components/ImageBlock.svelte";
	import Credit from "../components/Credit.svelte";
	import ShortHR from "../components/ShortHR.svelte";
</script>

<Centered width="80vw">
	<h1><i><u>FactoryGuessr</u></i></h1>
	<p>
		Like GeoGuessr, but for Satisfactory! <br/>
		Explore the beautiful landscape from Update 6 and test your knowledge!
	</p>
	 
	<Centered width="60vw">
		<LinedHeading type="h3" text="Game Settings"/>

		<div>
			<span tabindex="0"><GameSetting type="switch" id="difficulty"/></span>
			<span tabindex="0"><GameSetting type="switch" id="zoom"/></span>
			<span tabindex="0"><GameSetting type="switch" id="pan"/></span>
			<span tabindex="0"><GameSetting type="slider" id="timelimit"/></span>
		</div>

		<LinedHeading type="h3" text="Contact"/>

		<div>
			<a href = "https://github.com/Brxnni" tabindex="0"><ImageBlock text="GitHub Repo" altText="GitHub Logo" imageSrc="./github.svg"></ImageBlock></a>
			<span tabindex="0"><ImageBlock text="Discord: Brxnni#0553" altText="Discord Logo" imageSrc="./discord.svg"></ImageBlock></span>
		</div>

		<LinedHeading type="h3" text="Credits"/>
		<p style = "margin-bottom: 50px;">
			A massive thanks to all the people who helped make this game possible!
			Here is a list of all things I used to make this game:
		</p>

		<div>
			<Credit
				text1="Amazing Game"
				text2="Satisfactory"			href2="https://www.satisfactorygame.com"
				text3="Coffee Stain Studios"	href3="https://www.coffeestainstudios.com"
			/>
			<ShortHR/>
			<Credit
				text1="360° In-game Camera Mod"
				text2="Pano360Cam"				href2="https://ficsit.app/mod/Pano360Cam"
				text3="PepiHax"					href3="https://github.com/PepiHax"
			/>
			<ShortHR/>
			<Credit
				text1="3D Panorama Viewer"
				text2="Pannellum"				href2="https://pannellum.org"
				text3="Matthew Petroff"			href3="https://mpetroff.net"
			/>
			<ShortHR/>
			<Credit
				text1="Minimap"
				text2="LeafletJS"				href2="https://leafletjs.com"
				text3="The Leaflet Team"		href3="https://github.com/Leaflet/Leaflet/graphs/contributors"
			/>
			<ShortHR/>
			<Credit
				text1="Amazing JavaScript Framework"
				text2="Svelte"										href2="https://svelte.dev"
				text3="Rich Harris &amp; The Svelte Contributors"	href3="https://github.com/sveltejs/svelte/graphs/contributors"
			/>
		</div>

	</Centered>
</Centered>