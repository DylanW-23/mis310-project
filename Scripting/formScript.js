// Meant to create a little response message whenever a form is submitted

// Variable Declarations

const submitButton = document.querySelector("#submitButton")
const submitResponse = document.querySelector("#submitResponse")

// Functions

submitButton.addEventListener("click", function () {
    submitResponse.textContent = "Join us Friday at 2 PM!";
});