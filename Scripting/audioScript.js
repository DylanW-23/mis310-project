// Meant to play a little jingle whenever a link is clicked to load a page

// Variable Declarations

const audio = new Audio("../Sounds/legogamebuildingsfx.mp3");
const links = document.querySelector(".navLinks a");


// Functions

links.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.play();
});