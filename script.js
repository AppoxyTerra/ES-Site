addEventListener('contextmenu', event => event.preventDefault());

const intro = document.getElementById("intro");
const experience = document.getElementById("experience");
const resultats = document.getElementById("resultats");

const refs = [intro, experience, resultats];

var frame_id = 1;

addEventListener('click', (ev) => {
	var vh = intro.getBoundingClientRect().height;
	if (ev.button == 2) {
		vh = -vh;
	}
	refs.forEach((el) => {
		const last_y = el.getBoundingClientRect().y;
		el.animate(
			[
				{
					top: last_y+"px"
				},
				{
					top: (last_y - vh) +"px"
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
	frame_id++;
})



