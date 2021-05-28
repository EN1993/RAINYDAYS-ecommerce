
const form = document.querySelector("#contactForm");

const fName = document.querySelector("#f.name");
const fNameError = document.querySelector(".fNameError");

const lName = document.querySelector("#l.name");
const lNameError = document.querySelector(".lNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");

const message = document.querySelector("#textarea");
const messageError = document.querySelector(".textError");


function validateForm(event) {

  event.preventDefault();

  if (checkLength(fName.value, 2) === true ) {
    fNameError.style.display ="none";
  } else {
    fNameError.style.display ="block";
  }

  if (checkLength(lName.value, 4) === true ) {
    lNameError.style.display ="none";
  } else {
    lNameError.style.display ="block";
  }


  if (validateEmail(email.value) === true) {
    emailError.style.display ="none";
  } else {
    emailError.style.display ="block";
  }


  if (checkLength(message.value, 10) === true ) {
    messageError.style.display ="none";
  } else {
    messageError.style.display ="block";
  }


}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}