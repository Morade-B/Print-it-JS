
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//   Déclaration des variables pour l'ensemble du projet  

const dots = document.querySelector(".dots");
const flècheDroite = document.querySelector(".arrow_right");
const flècheGauche = document.querySelector(".arrow_left");
const img = document.querySelector('.banner-img');
const text = document.querySelector('#banner p');
let index = 0;

// Ajout des bullets points au slider 

function affichedDots() {
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) {
			dot.classList.add("dot_selected");
		}
	}
}
affichedDots();

// Suppresion bullet point actif image précédente 

function removeSelection() {
	const slideDots = document.querySelectorAll(".dots .dot");
	slideDots[index].classList.remove("dot_selected");
}

// Ajout bullet point actif image suivante

function addSelection() {
	const slideDots = document.querySelectorAll(".dots .dot");
    slideDots[index].classList.add("dot_selected");
}

// Changement d'image et texte correspondant à l'image 

function changeImageAndTagLine() {
	img.src = `./assets/images/slideshow/${slides[index].image}`;
	text.innerHTML = slides[index].tagLine;
}


// changement lors du click droit 

function clickRight() {
	flècheDroite.addEventListener("click", () => {
		removeSelection();
		index++;
		if (index > slides.length - 1) {
			index = 0;
		}
		changeImageAndTagLine();
		addSelection();
	});

}
clickRight();

