let map;
let tileLayer;
let userMarker;
let roundCounter = 0;
let totalScore = 0;

let settings = {
	easyMode: true,
	zoom: true,
	pan: true,
	timeLimit: -1
};
let coords = [];
let userCoords = [];
let usedPanoramas = [];

const markerPath = "./../img/marker.png"
const flagPath = "./../img/flag.png"

function randomImage(excluded){
	// This function contains data for every panorama and will give you a random one.
	let images = "$$JSON$$";

	images.filter(function (e){ return (!excluded.includes(e.id)) });

	let randomImg = images[Math.floor(Math.random() * images.length)];
	return randomImg;
}

function getSettings(){
	if (window.location.search){
		let search = window.location.search.substring(1).split("&");
		settings = {
			easyMode: search[0].split("=")[1] === "true",
			zoom: search[1].split("=")[1] === "true",
			pan: search[2].split("=")[1] === "true",
			timeLimit: parseFloat(search[3].split("=")[1])
		}
	}
}

function initPannellum(){
	return pannellum.viewer("panorama", {
		"type": "equirectangular", // this is a really shitty word to spell out
		"hfov": 120,
		"autoLoad": true,
		"friction": 0.2,
		"draggable": settings.pan,
		"mouseZoom": settings.zoom,
		"scenes": {}
	});
}

function initLeaflet(){
	map = L.map("map", {
		center: [81.5, -150],
		zoom: 3,
		zoomSnap: 0,
		zoomDelta: 0.3,
		wheelDebounceTime: 0,
		wheelPxPerZoomLevel: 55,
		attributionControl: false,
	});
	
	map.doubleClickZoom.disable(); 

	tileLayer = L.tileLayer("./../map/{z}/{x}/{y}.png", {
		tileSize: 70,
		minZoom: 2,
		minNativeZoom: 3,
		maxZoom: 11,
		maxNativeZoom: 8
	}).addTo(map);

	// map.fitBounds(tileLayer.getBounds());
}

function completeRound(){
	// This function runs when pressing "Guess!"

	// TODO: IMPLEMENT DIFFERENT BEHAVIOUR WHEN ROUND COUNTER IS 5

	// If button isn't active, ignore
	let submitButton = document.getElementById("sendbutton")
	if (!submitButton.classList.contains("active")){ return; }

	// Set everything to different menu size
	submitButton.innerHTML = "Next Round";
	submitButton.onclick = startRound;
	let mapContainer = document.getElementById("mapcontainer");
	mapContainer.classList.add("full");
	let viewerWrapper = document.getElementById("panorama");
	viewerWrapper.classList.add("disabled");

	// Get what user clicked
	userCoords = userMarker.getLatLng();
	coords = L.latLng(coords)
	console.log(userCoords, coords);

	// === LEAFLET ===
	// Delete previous Leaflet map
	map.remove();

	// Create new Leaflet map
	initLeaflet();

	// Make user marker and place it nowhere
	let flagMarkerIcon = L.icon({
		iconUrl: flagPath,
		iconSize: [25, 25],
		iconAnchor: [12.5, 25]
	})
	let flagMarker = L.marker(coords, { icon: flagMarkerIcon });
	flagMarker.addTo(map);

	let userMarkerIcon = L.icon({
		iconUrl: markerPath,
		iconSize: [25, 25],
		iconAnchor: [12.5, 25]
	})
	let userInputMarker = L.marker(userCoords, { icon: userMarkerIcon });
	userInputMarker.addTo(map);

	// Add line between two points
	let line = new L.Polyline([coords, userCoords], {
		color: "black",
		weight: "2",
		dashArray: "20, 20"
	});
	line.addTo(map);

	// Calculate what lat/lng correspond to in Satisfactory meters
	let cornerToCorner = map.getBounds().getNorthEast().lat - map.getBounds()._southWest.lat * 0.8;
	console.log(cornerToCorner)
	let metersPerLatUnit = 7500 / cornerToCorner * 2;
	console.log(metersPerLatUnit);
	// Map is 7.5km, but only (8/10)^2 of the leaflet map are real map data (rest is gray)
	
	// Calculate distance and score
	let distance = Math.sqrt(
		(Math.abs(coords.lat - userCoords.lat) * metersPerLatUnit) ** 2 +
		(Math.abs(coords.lng - userCoords.lng) * metersPerLatUnit) ** 2
	)
	distance = distance;
	let score = Math.round(5000 * 0.998 ** ((distance - 80) * 0.3));
	if (distance <= 80) score = 5000;
	totalScore += score;
	let scoreSpan = document.getElementById("score");
	scoreSpan.innerHTML = totalScore;

	// Score display thingy
	let scoreDisplay = document.getElementById("scoredisplay");
	scoreDisplay.innerHTML = `<span>Congratulations!</span><br/><span>Your guess was ${Math.round(distance)}m away and you got ${score} points!</span>`;
	scoreDisplay.classList.add("show");

	// === PANNELLUM ===
	// Delete previous panellum viewer
	document.getElementById("panorama").innerHTML = "";
}

function startRound(){
	// This function runs when pressing "Continue" after seeing the results of the round

	roundCounter++;

	if (roundCounter > 5){
		return;
	}
	
	// Hide score display
	document.getElementById("scoredisplay").classList.remove("show");

	// Set mapContainer and viewerWrapper to normal size
	let mapContainer = document.getElementById("mapcontainer");
	mapContainer.classList.remove("full");
	let viewerWrapper = document.getElementById("panorama");
	viewerWrapper.classList.remove("disabled");

	// === LEAFLET ===
	// Delete previous Leaflet map
	if (map) map.remove();

	// Create new Leaflet map
	initLeaflet();

	// Update counter in the top right
	let roundSpan = document.getElementById("round");
	roundSpan.innerHTML = `${roundCounter}/5`;

	// Make user marker and place it nowhere
	let markerIcon = L.icon({
		iconUrl: markerPath,
		iconSize: [25, 25],
		iconAnchor: [12.5, 25]
	})
	userMarker = new L.marker([-Math.max(), -Math.max()], {icon: markerIcon});
	userMarker.setLatLng(L.latLng(-Math.max(), -Math.max()))
	userMarker.addTo(map);

	// === PANNELLUM ===
	// Delete previous panellum viewer
	document.getElementById("panorama").innerHTML = "";

	// Create new viewer
	let viewer = initPannellum();

	// Get random panorama image to display next
	let image = randomImage(usedPanoramas);
	usedPanoramas.push(image.id);

	viewer.addScene("scene", {
		"panorama": image.imgUrl,
		"preview": image.previewUrl
	});
	viewer.loadScene("scene");

	coords = image.coords;

	// Change text and behaviour of button back to normal
	let submitButton = document.getElementById("sendbutton")
	submitButton.innerHTML = "Place Pin on Your Map";
	submitButton.classList.remove("active");
	submitButton.onclick = completeRound;

	map.on("click", function(e) {
		let location = e.latlng;
		userMarker.setLatLng(location);
		
		let button = document.getElementById("sendbutton");
		if (!button.classList.contains("active")){
			button.classList.add("active")
			button.innerHTML = "Guess!";
		}
	});

}

// ## //

// User can also use space key to submit form
document.body.onkeydown = function(e) { if (e.key == " " || e.code == "Space"){ completeRound(); } }

getSettings();
startRound();