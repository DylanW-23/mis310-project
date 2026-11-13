// Meant to play a little jingle whenever a link is clicked to load a page

// Variable Declarations

const linkClick = document.getElementsByClassName("#navLinks")
const audio = document.querySelector("#loadAudio")

// Functions

linkClick.addEventListener("click", function () {
    audio.currentTime = 0;
    audio.play();
});