function getData(){
	let params = new Proxy(new URLSearchParams(window.location.search), { get: (searchParams, prop) => searchParams.get(prop) });

	let score = 0;
	if (params.score) score = params.score;

	let newURL = `./../game/?easyMode=${params.easyMode}&zoom=${params.zoom}&pan=${params.pan}&timeLimit=${params.timeLimit}`;

	return {
		score: score,
		newURL: newURL
	}
}

function animateScoreFadeInOut(element, score, duration){

	let startTimestamp = null;

	let step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;

		let x = ((timestamp - startTimestamp) / duration)
		// Fade in and fade out slowly with fast pace between
		// If you want to look this function up its called a "sigmoid function"
		let progress = Math.min( 1/(1+Math.E**(5-10*x)) , 1);
		element.innerHTML = Math.ceil(progress * score);
		if (progress < 1) window.requestAnimationFrame(step);
	};
	window.requestAnimationFrame(step);

}

function main(){
	let span = document.getElementById("points");
	let s = getData();

	document.getElementById("nextround").onclick = () => { window.location = s.newURL }

	animateScoreFadeInOut(
		span,
		s.score,
		2500
	);
}

main();
