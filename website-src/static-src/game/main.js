function readSettings(){
	let search = window.location.search.substring(1).split("&");
	return {
		easyMode: search[0].split("=")[1] === "true",
		zoom: search[1].split("=")[1] === "true",
		pan: search[2].split("=")[1] === "true",
		timeLimit: parseFloat(search[3].split("=")[1])
	}
}

function initPannellum(){
	pannellum.viewer("panorama", {
		"type": "equirectangular", // this is a really shitty word to spell out
		"panorama": "./panoramas/Final.png",
		"hfov": 120,
		"autoLoad": true,
		"friction": 0.2,
		"preview": "./Preview.png"
	});
}

function initLeaflet(){
	let map = L.map("map", {
		center: [80, -151],
		zoom: 3,
		zoomSnap: 0,
		zoomDelta: 0.1,
		wheelDebounceTime: 0,
		wheelPxPerZoomLevel: 55,
		attributionControl: false,
	});
	L.tileLayer("./map/{z}/{x}/{y}.png", {
		tileSize: 70,
		minZoom: 2,
		minNativeZoom: 3,
		maxZoom: 11,
		maxNativeZoom: 8
	}).addTo(map);
	return map;
}

function init(){
	const settings = readSettings();
	initPannellum();
	const map = initLeaflet();
	console.log(settings)
}

init();