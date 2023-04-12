# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![Desktop View](https://drive.google.com/uc?export=view&id=1W3WzePsGOaAi5JDJw9iYNsCVJHLp_Rsz)

![Mobile View](https://drive.google.com/uc?export=view&id=1pYOmjPEi2-jvDmPZR348zKdXz4xr7Ohn)

### Links

- Solution URL: [Solution](https://github.com/Demarcus11/Intro-Component-with-signup-form.git)
- Live Site URL: [Live](https://demarcus11.github.io/Intro-Component-with-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow

### What I learned

```css
.signup-form input {
  padding: 0.75rem;
  border: 1px solid var(--clr-nuetral-400);
  border-radius: var(--br);
  /* Inputs are inline-block elements so by default its size is determined by its content, padding, margin, etc. */
  /* Setting a percentage width makes it not depend on those and more responsive  */
  width: 100%;
}
```

```js
const firstNameInput = document.getElementById("first-name"),
  lastNameInput = document.getElementById("last-name"),
  emailInput = document.getElementById("email"),
  passwordInput = document.getElementById("password"),
  firstNameError = document.querySelector(".first-name-error"),
  lastNameError = document.querySelector(".last-name-error"),
  emailErrorMessage = document.querySelector(".email-error"),
  passwordErrorMessage = document.querySelector(".password-error"),
  errorIcon = document.querySelectorAll(".error-icon"),
  submitButton = document.querySelector(".signup-button");

// Since we cant directly update psuedo selectors with js, this function updates the css variable
function updatePlaceholderColor() {
  emailInput.style.setProperty("--color", "red");
}

function validateEmail() {
  const email = emailInput.value.trim(),
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Show error styles when email is invalid
  if (!emailRegex.test(email)) {
    emailErrorMessage.textContent = "Looks like this is not an email";
    emailInput.placeholder = "email@example/com";
    updatePlaceholderColor();
    emailInput.style.borderColor = "red";
    errorIcon[2].style.display = "block";
    return false;
  } else {
    // Reset to base styles when user enters a valid email
    emailErrorMessage.textContent = "";
    emailInput.style.borderColor = "hsl(246, 25%, 77%)";
    errorIcon[2].style.display = "none";
    return true;
  }
}

function validateFirstName() {
  const firstName = firstNameInput.value.trim();

  if (firstName === "") {
    firstNameError.textContent = "First Name cannot be empty";
    firstNameInput.style.borderColor = "red";
    errorIcon[0].style.display = "block";
    return false;
  } else {
    firstNameError.textContent = "";
    firstNameInput.style.borderColor = "hsl(246, 25%, 77%)";
    errorIcon[0].style.display = "none";
    return true;
  }
}

function validateLastName() {
  const lastName = lastNameInput.value.trim();

  if (lastName === "") {
    lastNameError.textContent = "Last Name cannot be empty";
    lastNameInput.style.borderColor = "red";
    errorIcon[1].style.display = "block";
    return false;
  } else {
    lastNameError.textContent = "";
    lastNameInput.style.borderColor = "hsl(246, 25%, 77%)";
    errorIcon[1].style.display = "none";
    return true;
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();
  if (password === "") {
    passwordErrorMessage.textContent = "Password cannot be empty";
    passwordInput.style.borderColor = "red";
    errorIcon[3].style.display = "block";
    return false;
  } else {
    passwordErrorMessage.textContent = "";
    passwordInput.style.borderColor = "hsl(246, 25%, 77%)";
    errorIcon[3].style.display = "none";
    return true;
  }
}

// Event Listener on input goes here E.F.B (Event, Function, Boolean)
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const isEmailValid = validateEmail();
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isPasswordValid = validatePassword();

  if (isEmailValid && isFirstNameValid && isLastNameValid && isPasswordValid) {
    // Submit form
  }
});
```

## Author

- Frontend Mentor - [@Demarcus](https://www.frontendmentor.io/profile/Demarcus11)
