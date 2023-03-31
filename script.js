


// addEventListener('contextmenu', event => event.preventDefault());
window.onbeforeunload = function () {
	window.style["scroll-behavior"] = '0';
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
	console.log(counter)
	if (counter >= 4) {
		removeEventListener('click', this);
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

function generatePDF() {
	var doc = new jsPDF();  //create jsPDF object
	 doc.fromHTML(document.body, // page element which you want to print as PDF
	 0,
	 0, 
	 {
	   'width': 1600  //set width
	 },
	 function(a) 
	  {
	   doc.save("HTML2PDF.pdf"); // save file name as HTML2PDF.pdf
	 });
   }
generatePDF();


function goBackToTop() {
	var vh = intro.getBoundingClientRect().height + 50;
	refs.forEach((el) => {
		el.style.top = refs.indexOf(el) * vh + "px";
	});
}
