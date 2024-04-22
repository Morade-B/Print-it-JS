const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Ajout des event listener sur les flèches 

let flècheGauche = document.getElementById("flècheGauche")

 flècheGauche.addEventListener("click", () => {
	slideIndex--;
	console.log("Vous avez cliqué sur la flèche de Gauche")
})

let flècheDroite = document.getElementById("flècheDroite")

 flècheDroite.addEventListener("click", () => {
	slideIndex++;
	console.log("Vous avez cliqué sur la flèche de Droite")
})


