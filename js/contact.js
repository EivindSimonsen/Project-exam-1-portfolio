const form = document.querySelector(".form");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const validateMessage = document.querySelector("#contact-message");

function validateForm(event) {
    event.preventDefault();

    if (fullName.value.trim().length > 5) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (subject.value.trim().length >= 15) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (message.value.trim().length >= 25) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (fullName.value.trim().length > 5 && validateEmail(email.value) === true && subject.value.trim().length >= 15 && message.value.trim().length >= 25) {
        validateMessage.style.display = "block";
        form.reset();
    } else {
        validateMessage.style.display = "none";
    }
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}