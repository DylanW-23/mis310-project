// Meant to play a little jingle whenever an images is clicked

// Variable Declarations

const audio = new Audio("../Sounds/legogamebuildingsfx.mp3");
const trigger = document.querySelectorAll(".setImg");


// Functions



trigger.forEach((image) => {

  image.addEventListener("click", function () {audio.currentTime = 0; audio.play();});

});

// this thing has been so fickle so far