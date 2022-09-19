let map;
let tileLayer;
let userMarker;
let totalScore = 0;
let roundCounter = 0;

let settings = {
	easyMode: true,
	zoom: true,
	pan: true,
	timeLimit: -1
};
let sfCorrectCoords = [];
let userCoords = [];
let usedPanoramas = [];

const markerPath = "./../img/marker.png"
const flagPath = "./../img/flag.png"

function randomImage(excluded){
	// This function contains data for every panorama and will give you a random one.
	let images = [
	  {
	    "id": "0",
	    "imgUrl": "./panoramas/0.png",
	    "previewUrl": "",
	    "coords": [
	      532.0,
	      -2301.0
	    ]
	  },
	  {
	    "id": "1",
	    "imgUrl": "./panoramas/1.png",
	    "previewUrl": "",
	    "coords": [
	      -82.0,
	      -1771.0
	    ]
	  },
	  {
	    "id": "2",
	    "imgUrl": "./panoramas/2.png",
	    "previewUrl": "",
	    "coords": [
	      -900.0,
	      -1525.0
	    ]
	  },
	  {
	    "id": "3",
	    "imgUrl": "./panoramas/3.png",
	    "previewUrl": "",
	    "coords": [
	      -610.0,
	      -440.0
	    ]
	  },
	  {
	    "id": "4",
	    "imgUrl": "./panoramas/4.png",
	    "previewUrl": "",
	    "coords": [
	      -1133.0,
	      400.0
	    ]
	  },
	  {
	    "id": "5",
	    "imgUrl": "./panoramas/5.png",
	    "previewUrl": "",
	    "coords": [
	      -2404.0,
	      310.0
	    ]
	  },
	  {
	    "id": "6",
	    "imgUrl": "./panoramas/6.png",
	    "previewUrl": "",
	    "coords": [
	      -1775.0,
	      1945.0
	    ]
	  },
	  {
	    "id": "7",
	    "imgUrl": "./panoramas/7.png",
	    "previewUrl": "",
	    "coords": [
	      -1520.0,
	      2321.0
	    ]
	  },
	  {
	    "id": "8",
	    "imgUrl": "./panoramas/8.png",
	    "previewUrl": "",
	    "coords": [
	      -123.0,
	      2853.0
	    ]
	  },
	  {
	    "id": "9",
	    "imgUrl": "./panoramas/9.png",
	    "previewUrl": "",
	    "coords": [
	      882.0,
	      1203.0
	    ]
	  },
	  {
	    "id": "10",
	    "imgUrl": "./panoramas/10.png",
	    "previewUrl": "",
	    "coords": [
	      363.0,
	      2340.0
	    ]
	  },
	  {
	    "id": "11",
	    "imgUrl": "./panoramas/11.png",
	    "previewUrl": "",
	    "coords": [
	      831.0,
	      2267.0
	    ]
	  },
	  {
	    "id": "12",
	    "imgUrl": "./panoramas/12.png",
	    "previewUrl": "",
	    "coords": [
	      1566.0,
	      2389.0
	    ]
	  },
	  {
	    "id": "13",
	    "imgUrl": "./panoramas/13.png",
	    "previewUrl": "",
	    "coords": [
	      1369.0,
	      1985.0
	    ]
	  },
	  {
	    "id": "14",
	    "imgUrl": "./panoramas/14.png",
	    "previewUrl": "",
	    "coords": [
	      2158.0,
	      1379.0
	    ]
	  },
	  {
	    "id": "15",
	    "imgUrl": "./panoramas/15.png",
	    "previewUrl": "",
	    "coords": [
	      2683.0,
	      1037.0
	    ]
	  },
	  {
	    "id": "16",
	    "imgUrl": "./panoramas/16.png",
	    "previewUrl": "",
	    "coords": [
	      2237.0,
	      434.0
	    ]
	  },
	  {
	    "id": "17",
	    "imgUrl": "./panoramas/17.png",
	    "previewUrl": "",
	    "coords": [
	      2541.0,
	      -222.0
	    ]
	  },
	  {
	    "id": "18",
	    "imgUrl": "./panoramas/18.png",
	    "previewUrl": "",
	    "coords": [
	      2407.0,
	      -680.0
	    ]
	  },
	  {
	    "id": "19",
	    "imgUrl": "./panoramas/19.png",
	    "previewUrl": "",
	    "coords": [
	      3264.0,
	      -951.0
	    ]
	  },
	  {
	    "id": "20",
	    "imgUrl": "./panoramas/20.png",
	    "previewUrl": "",
	    "coords": [
	      2819.0,
	      -753.0
	    ]
	  },
	  {
	    "id": "21",
	    "imgUrl": "./panoramas/21.png",
	    "previewUrl": "",
	    "coords": [
	      3559.0,
	      -2184.0
	    ]
	  },
	  {
	    "id": "22",
	    "imgUrl": "./panoramas/22.png",
	    "previewUrl": "",
	    "coords": [
	      2868.0,
	      -2981.0
	    ]
	  },
	  {
	    "id": "23",
	    "imgUrl": "./panoramas/23.png",
	    "previewUrl": "",
	    "coords": [
	      1864.0,
	      -1892.0
	    ]
	  },
	  {
	    "id": "24",
	    "imgUrl": "./panoramas/24.png",
	    "previewUrl": "",
	    "coords": [
	      1647.0,
	      -2213.0
	    ]
	  },
	  {
	    "id": "25",
	    "imgUrl": "./panoramas/25.png",
	    "previewUrl": "",
	    "coords": [
	      1429.0,
	      -2408.0
	    ]
	  },
	  {
	    "id": "26",
	    "imgUrl": "./panoramas/26.png",
	    "previewUrl": "",
	    "coords": [
	      2395.0,
	      -2424.0
	    ]
	  },
	  {
	    "id": "27",
	    "imgUrl": "./panoramas/27.png",
	    "previewUrl": "",
	    "coords": [
	      1299.0,
	      -1217.0
	    ]
	  },
	  {
	    "id": "28",
	    "imgUrl": "./panoramas/28.png",
	    "previewUrl": "",
	    "coords": [
	      285.0,
	      -1919.0
	    ]
	  },
	  {
	    "id": "29",
	    "imgUrl": "./panoramas/29.png",
	    "previewUrl": "",
	    "coords": [
	      -197.0,
	      -2408.0
	    ]
	  },
	  {
	    "id": "30",
	    "imgUrl": "./panoramas/30.png",
	    "previewUrl": "",
	    "coords": [
	      -861.0,
	      -1853.0
	    ]
	  },
	  {
	    "id": "31",
	    "imgUrl": "./panoramas/31.png",
	    "previewUrl": "",
	    "coords": [
	      -1768.0,
	      -875.0
	    ]
	  },
	  {
	    "id": "32",
	    "imgUrl": "./panoramas/32.png",
	    "previewUrl": "",
	    "coords": [
	      -2709.0,
	      -722.0
	    ]
	  },
	  {
	    "id": "33",
	    "imgUrl": "./panoramas/33.png",
	    "previewUrl": "",
	    "coords": [
	      -2801.0,
	      -265.0
	    ]
	  },
	  {
	    "id": "34",
	    "imgUrl": "./panoramas/34.png",
	    "previewUrl": "",
	    "coords": [
	      318.0,
	      -227.0
	    ]
	  },
	  {
	    "id": "35",
	    "imgUrl": "./panoramas/35.png",
	    "previewUrl": "",
	    "coords": [
	      684.0,
	      -10.0
	    ]
	  },
	  {
	    "id": "36",
	    "imgUrl": "./panoramas/36.png",
	    "previewUrl": "",
	    "coords": [
	      1350.0,
	      -905.0
	    ]
	  },
	  {
	    "id": "37",
	    "imgUrl": "./panoramas/37.png",
	    "previewUrl": "",
	    "coords": [
	      133.0,
	      138.0
	    ]
	  },
	  {
	    "id": "38",
	    "imgUrl": "./panoramas/38.png",
	    "previewUrl": "",
	    "coords": [
	      451.0,
	      488.0
	    ]
	  },
	  {
	    "id": "39",
	    "imgUrl": "./panoramas/39.png",
	    "previewUrl": "",
	    "coords": [
	      225.0,
	      1465.0
	    ]
	  },
	  {
	    "id": "40",
	    "imgUrl": "./panoramas/40.png",
	    "previewUrl": "",
	    "coords": [
	      426.0,
	      816.0
	    ]
	  },
	  {
	    "id": "41",
	    "imgUrl": "./panoramas/41.png",
	    "previewUrl": "",
	    "coords": [
	      547.0,
	      -1126.0
	    ]
	  }
	];

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
	// Random yaw when pan is false
	let yaw = settings.pan ? 0 : Math.floor(Math.random()*360)-180
	console.log(yaw);

	return pannellum.viewer("panorama", {
		"type": "equirectangular", // this is a really shitty word to spell out
		"hfov": 120,
		"autoLoad": true,
		"friction": 0.2,
		"draggable": settings.pan,
		"mouseZoom": settings.zoom,
		"doubleClickZoom": settings.zoom,
		"scenes": {},
		"yaw": yaw
	});
}

function initLeaflet(){
	map = L.map("map", {
		center: [81.5, -150],
		zoom: 3,
		maxZoom: 9,
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
		maxNativeZoom: 7,
		reuseTiles: true,
	}).addTo(map);
}

function pointToSFXY(userPoint){

	let center = L.point(
		-16613000,
		 16613000
	);

	let topLeft = L.point(
		-19352400,
		 19352400
	);

	// 3250m ^= topLeft.x - center.x
	let d = topLeft.x - center.x
	let metersPerUnit = d / 3750;

	return [
		(center.x - userPoint.x) / metersPerUnit + 500,
		(userPoint.y - center.y) / metersPerUnit
	];

}

function SFXYtoPoint(sf){

	let center = L.point(
		-16613000,
		 16613000
	);

	let topLeft = L.point(
		-19352400,
		 19352400
	);

	// 3250m ^= topLeft.x - center.x
	let d = topLeft.x - center.x
	let metersPerUnit = d / 3750;

	return L.point(
		center.x + 500 * metersPerUnit - sf[0] * metersPerUnit,
		-(-center.y - sf[1] * metersPerUnit)
	)

}

function finishGame(){

	document.getElementById("mapcontainer").remove();

	document.body.style.background = `
	radial-gradient(95% 125% at -30% -30%,rgba(58, 186, 203, 0.7) 0%,rgba(40,41,43,0) 110%),
	radial-gradient(95% 125% at 130% 130%,rgba(202, 58, 58, 0.7) 0%,rgba(40,41,43,0) 110%),
	rgb(40,41,43);`

	let scoreDisplay = document.getElementById("scoredisplay");
	scoreDisplay.classList.remove("show");

	let resultDisplay = document.getElementById("resultdisplay");
	resultDisplay.classList.add("show");

	resultDisplay.querySelector("span").innerHTML = `The game is over! You achieved a total of ${totalScore} Points.`;

}

async function completeRound(){
	// This function runs when pressing "Guess!"

	// If button isn't active, ignore
	let submitButton = document.getElementById("sendbutton")
	if (!submitButton.classList.contains("active")){ return; }

	await new Promise(r => setTimeout(r, 250));

	// Set everything to different menu size
	if (roundCounter != 5){
		submitButton.innerHTML = "Next Round";
		submitButton.onclick = startRound;
		document.body.onkeydown = function(e) { if (e.key == " " || e.code == "Space"){ startRound(); } }
	} else {
		submitButton.innerHTML = "Finish Game";
		submitButton.onclick = finishGame;
		document.body.onkeydown = function(e) { if (e.key == " " || e.code == "Space"){ finishGame(); } }
	}
	let mapContainer = document.getElementById("mapcontainer");
	mapContainer.classList.add("full");
	let viewerWrapper = document.getElementById("panorama");
	viewerWrapper.classList.add("disabled");

	// === LEAFLET ===
	// Delete previous Leaflet map
	map.remove();

	// Create new Leaflet map
	initLeaflet();

	// TODO:
	// THE CONVERSION FUCKING WORKS!!!!!!!
	// LETS GOOOOOOO!
	// JUST DO THE REST OF THE THING AND IT WORKS!!!!!!!
	// I LOFE YOU L.PROJECT!!!! AND FUCK YOU LEAFLET WIKI FOR NOT TELLING ME THAT
	// LAT-LNG WORKS WITH SPHERICAL PROJECTION EVEN THOUGH I AM USING A SQUARE MAP!
	// THANK YOU STACKOVERFLOW!
	// I AM GOING TO SLEEP NOW.
	// FROM NOW ON, THIS SHOULD BE SIMPLE TO FINISH.
	userCoords = userMarker.getLatLng();
	userCoords = L.Projection.SphericalMercator.project(userCoords);
	let sfUserCoords = pointToSFXY(userCoords);

	let flagMarkerIcon = L.icon({
		iconUrl: flagPath,
		iconSize: [25, 25],
		iconAnchor: [12.5, 25]
		// iconAnchor: [0,20]
	})

	let userMarkerIcon = L.icon({
		iconUrl: markerPath,
		iconSize: [25, 25],
		iconAnchor: [12.5, 25]
	})

	let correctCoords = SFXYtoPoint(sfCorrectCoords)

	userCoords = L.Projection.SphericalMercator.unproject(userCoords);
	correctCoords = L.Projection.SphericalMercator.unproject(correctCoords);

	L.marker(userCoords, {icon: userMarkerIcon}).addTo(map);
	L.marker(correctCoords, {icon: flagMarkerIcon}).addTo(map);

	// Add line between two points
	let line = new L.Polyline([correctCoords, userCoords], {
		color: "black",
		weight: "2",
		dashArray: "20, 20"
	});
	line.addTo(map);

	// Calculate distance and score
	let distance = Math.sqrt(
		Math.abs(sfCorrectCoords[0] - sfUserCoords[0]) ** 2 +
		Math.abs(sfCorrectCoords[1] - sfUserCoords[1]) ** 2
	)
	distance = distance;
	let score = Math.round(5000*Math.e**((x*Math.log(700/2500))/1001));
	if (distance <= 80) score = 5000;
	totalScore += score;
	let scoreSpan = document.getElementById("score");
	scoreSpan.innerHTML = totalScore;

	// Score display thingy
	let scoreDisplay = document.getElementById("scoredisplay");

	let start = "";
	if (totalScore == 5000) start = "WOW!";
	if (4999 >= totalScore && totalScore >= 3500) start = "Nice!";
	if (3499 >= totalScore && totalScore >= 2000) start = "That's ok.";
	if (1999 >= totalScore && totalScore >= 500) start = "Eh...";
	if (499 >= totalScore && totalScore >= 1) start = "Oh god.";
	if (totalScore == 0) start = "Have you even played Satisfactory?"

	scoreDisplay.innerHTML = `<span>${start}</span><br/><span>Your guess was ${Math.round(distance)}m away and you got ${score} points!</span>`;
	scoreDisplay.classList.add("show");

	// === PANNELLUM ===
	// Delete previous panellum viewer
	document.getElementById("panorama").innerHTML = "";
}

function startRound(){
	// This function runs when pressing "Continue" after seeing the results of the round
	document.body.onkeydown = function(e) { if (e.key == " " || e.code == "Space"){ completeRound(); } }

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
	userMarker = new L.marker([-1e4, -1e4], {icon: markerIcon});
	userMarker.setLatLng(L.latLng(-1e4, -1e4))
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

	sfCorrectCoords = image.coords;

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

// User can also use space key to submit form


getSettings();
startRound();
