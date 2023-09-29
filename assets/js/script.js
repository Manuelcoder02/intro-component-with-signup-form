"use strict";

const firstNameInput = document.querySelector(".first-name-input");
const lastNameInput = document.querySelector(".last-name-input");
const emailInput = document.querySelector(".input-email");
const passwordInput = document.querySelector(".password-input");

const btnClaim = document.querySelector(".btn-claim");

const errorIcon = document.querySelectorAll(".error");
const errorMessage = document.querySelectorAll(".error-message");

// Destructuring the error icon
const [errorA, errorB, errorC, errorD] = errorIcon;

// Destructuring the error message
const [errorMessageA, errorMessageB, errorMessageC, errorMessageD] =
  errorMessage;

console.log(errorA, errorMessageB, errorMessageC);
// console.log(errorIcon, errorMessage);

btnClaim.addEventListener("click", function () {
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  const email = emailInput.value;
  let password = passwordInput.value;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/; // Regular expression for email
  const trimmed = firstName.replace(/\s/g, "");
  const trimmedLastName = lastName.replace(/\s/g, "");
  const trimmedPassword = password.replace(/\s/g, "");
  firstName = trimmed;
  lastName = trimmedLastName;
  password = trimmedPassword;
  if (!firstName) {
    errorA.classList.remove("hidden");
    errorMessageA.classList.remove("hidden");
    firstNameInput.classList.add("border-error");
  } else {
    errorA.classList.add("hidden");
    errorMessageA.classList.add("hidden");
    firstNameInput.classList.remove("border-error");
    firstNameInput.value = " ";
  }
  if (!lastName) {
    errorB.classList.remove("hidden");
    errorMessageB.classList.remove("hidden");
    lastNameInput.classList.add("border-error");
  } else {
    errorB.classList.add("hidden");
    errorMessageB.classList.add("hidden");
    lastNameInput.classList.remove("border-error");
    lastNameInput.value = " ";
  }
  if (!email) {
    errorC.classList.remove("hidden");
    errorMessageC.classList.remove("hidden");
    emailInput.classList.add("border-error");
  } else {
    if (emailRegex.test(email)) {
      errorC.classList.add("hidden");
      errorMessageC.classList.add("hidden");
      emailInput.classList.remove("border-error");
      emailInput.value = " ";
    } else {
      errorMessageC.textContent = "Looks like this is not an email";
      emailInput.style.color = "hsl(0, 100%, 74%)";
      errorC.classList.remove("hidden");
      errorMessageC.classList.remove("hidden");
      emailInput.classList.add("border-error");
    }
  }
  if (!password) {
    errorD.classList.remove("hidden");
    errorMessageD.classList.remove("hidden");
    passwordInput.classList.add("border-error");
  } else {
    errorD.classList.add("hidden");
    errorMessageD.classList.add("hidden");
    passwordInput.classList.remove("border-error");
    passwordInput.value = "";
  }
});
