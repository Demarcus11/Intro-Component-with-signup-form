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
