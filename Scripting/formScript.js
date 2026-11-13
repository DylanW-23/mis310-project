// Meant to create a little response message whenever a form is submitted

// Variable Declarations

const submitButton = document.getElementById("#submitButton");
const submitResponse = document.querySelector("#submitResponse");

// Functions

submitButton.addEventListener("click", function () {
    submitResponse.textContent = "Thank you for the Feedback!";
});