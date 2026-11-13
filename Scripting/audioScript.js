// Meant to play a little jingle whenever an images is clicked

// Variable Declarations

const audio = new Audio("../Sounds/legogamebuildingsfx.mp3");
const trigger = document.querySelector("img");


// Functions

trigger.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.play();
});