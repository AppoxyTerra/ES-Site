


// addEventListener('contextmenu', event => event.preventDefault());
window.onbeforeunload = function () {
	// window.style["scroll-behavior"] = '0';
	window.scrollTo(0, 0);
}

const intro = document.getElementById("intro");
const experience = document.getElementById("experience");
const resultats = document.getElementById("resultats");
const conclu = document.getElementById("conclusion");

const refs = [intro, experience, resultats, conclu];

var counter = 0;

addEventListener('click', (ev) => {
	counter+=1;
	if (counter <= 0 || counter >= 4) {
		return;
	}
	var vh = intro.getBoundingClientRect().height + 50;
	refs.forEach((el) => {
		const last_y = el.getBoundingClientRect().y;
		el.animate(
			[
				{
					top: last_y+"px"
				},
				{
					top: last_y - vh +"px"
				},
			],
			{
				duration: 1000,
				iterations: 1,
				easing: 'ease-in-out'
			}
		).onfinish = () => {
			el.style.top = last_y - vh + "px";
		}
	});
})

function goBackToTop() {
	counter = -1;
	var vh = intro.getBoundingClientRect().height + 50;
	refs.forEach((el) => {
		el.style.top = refs.indexOf(el) * vh + "px";
	});
}