// Variable Declarations

const submitButton = document.querySelector("#submitButton")
const submitresponse = document.querySelector("#submitresponse")

// Functions

submitButton.addEventListener("click", function () {
    submitresponse.textContent = "Join us Friday at 2 PM!";
});