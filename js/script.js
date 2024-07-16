/* Sélectionne toutes les images du slider d'en-tête
Select all images in the header slider */
const images = document.querySelectorAll('.header-slider ul img');
/* Sélectionne le bouton "précédent" du slider
Select the “previous” slider button */
const prevBtn = document.querySelector('.control_prev');
/* Sélectionne le bouton "suivant" du slider
Select the "next” slider button */
const nextBtn = document.querySelector('.control_next');

/* Initialisation de l'index de l'image courante
Initialization of the index of the current image */
let n = 0;

/* Fonction pour changer l'image affichée
Function to change the displayed image */
function changeSlide() {

	/* Cache toutes les images
	Hide all images */
	for (let i = 0; i < images.length; i++) {
		images[i].style.display = 'none';
	}
	
	/* Affiche l'image courante
	Display the current image */
	images[n].style.display = 'block';
}

/* Affiche la première image au chargement de la page
Show first image on page load */
changeSlide();

/* Ajoute un écouteur d'événement au bouton "précédent"
Adds an event listener to the "back" button */
prevBtn.addEventListener('click', (e)=>{

	/* Dé-Incrémente l'index si possible, sinon revient à la dernière image
	Decrement the index if possible, otherwise returns to the last image */
	if (n > 0){
		n--;
	}else{
		n = images.length - 1;
	}

	/* Change l'image affichée
	Changes the displayed image*/
	changeSlide();
})

/* Ajoute un écouteur d'événement au bouton "nsuivant"
Adds an event listener to the "next" button */
nextBtn.addEventListener('click', (e)=>{

	/* Incrémente l'index si possible, sinon revient à la première image
	Increment the index if possible, otherwise returns to the first image */
	if (n < images.length - 1){
		n++;
	}else{
		n = 0;
	}

	/* Change l'image affichée
	Changes the displayed image*/
	changeSlide();
})

// Products Slider
const scrollContainer = document.querySelectorAll('.products');

for (const item of scrollContainer) {
	item.addEventListener('wheel', (evt)=>{
		evt.preventDefault();
		item.scrollLeft += evt.deltaY;
	})
}