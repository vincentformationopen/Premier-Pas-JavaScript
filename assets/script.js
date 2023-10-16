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

//Déclaration des variables
const flecheDroite=document.querySelector(".arrow_right");
const flecheGauche=document.querySelector(".arrow_left");
const bulletsContainer=document.querySelector(".dots")
//Nombre de slides au total
const nombreSlide = slides.length;
//currentslide
let currentSlide = 0;


// Pour chaque slide, création d'un bullet de navigation associé
slides.forEach((slide, index) => {
    const bullet = document.createElement("div");
    bullet.classList.add("dot");
    if (index === 0) {
      bullet.classList.add("dot_selected");
    }
    bullet.addEventListener("click", () => {
      currentSlide=index;  
      updateSlide();
    });
    bulletsContainer.appendChild(bullet);
  });

function updateSlide() {
    // 1. On sélectionne l'élément image du slider en utilisant son ID 'sliderImage'.
    // On stocke cette référence dans la variable sliderImage pour pouvoir modifier ses propriétés plus tard.
    const sliderImage = document.getElementById('sliderImage');
    // 2. On fait de même pour l'élément paragraphe qui contient le slogan (tagLine), en utilisant son ID 'tagLine'.
    const tagLine = document.getElementById('tagLine');
    // 3. On modifie l'attribut 'src' de l'élément image pour qu'il pointe vers la nouvelle image.
    // On construit le chemin vers l'image en concaténant la partie statique du chemin
    // avec le nom du fichier image stocké dans l'objet slide correspondant (déterminé par currentSlide).
    sliderImage.src = "./assets/images/slideshow/" + slides[currentSlide].image;
    // 4. On met à jour l'attribut 'alt' de l'image pour aider à l'accessibilité et au référencement SEO.
    // Cet attribut sert à décrire le contenu de l'image pour les technologies d'assistance et les moteurs de recherche.
    sliderImage.alt = "Slide " + (currentSlide + 1);
    // 5. On change le contenu HTML de l'élément paragraphe (qui affiche le slogan) pour le mettre à jour
    // avec le tagLine du slide courant. Le contenu HTML est utilisé ici car le tagLine peut contenir du code HTML (comme <span>),
    // donc innerHTML permet de l'interpréter correctement.
    tagLine.innerHTML = slides[currentSlide].tagLine;
    document.querySelector(".dot_selected").classList.remove("dot_selected");
    bulletsContainer.children[currentSlide].classList.add("dot_selected");
}
//Function si on clique sur la flèche droite
flecheDroite.addEventListener("click", rightArrow);
function rightArrow(){
    currentSlide++;
    if(currentSlide == nombreSlide) {
        currentSlide = 0;
    }
    console.log(currentSlide);
    updateSlide();  // Mise à jour de l'image et du texte
};

//Function si on clique sur la flèche gauche
flecheGauche.addEventListener("click", leftArrow);
function leftArrow(){
    currentSlide--;
    if(currentSlide == -1) {
        currentSlide = nombreSlide - 1;
    }
    console.log(currentSlide);
    updateSlide();  // Mise à jour de l'image et du texte
}
//Function qui de change le slide a afficher avec un timer
// setInterval(rightArrow, 2500);
