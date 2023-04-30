'use strict';

// Get the light/dark mode button element
const modeButton = document.getElementById('toggle-mode');

// Get the body element
const body = document.body;

// Check if user has a preferred color scheme and set the mode accordingly
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (userPrefersDark) {
  body.classList.add('dark-mode');
}

// Toggle between light and dark mode when button is clicked
modeButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});

// hide all but the first product on page load
document.querySelectorAll('#switcher1 .hiddenItem').forEach(item => {
  item.style.display = 'none';
});

// add click event listener to each button
document.querySelectorAll('#switcherButtons button').forEach(btn => {
  btn.addEventListener('click', function() {
    // hide all products
    document.querySelectorAll('#switcher1 section').forEach(item => {
      item.style.display = 'none';
    });
    // show the selected product
    const productId = btn.id.replace('btn', 'product');
    document.getElementById(productId).style.display = 'block';
  });
});


// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const numGuessInput = document.getElementById('numGuess2');
  const message = document.querySelector('.message');
  const gameDisplay = document.getElementById('gameDisplay2');
  const gameMsg = document.getElementById('game2Msg');
  
  // Function to validate user input
  function validateInput() {
    const numGuess = parseInt(numGuessInput.value);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 10) {
      message.classList.add('error');
      return false;
    } else {
      message.classList.remove('error');
      return true;
    }
  }
  
  // Function to play the game
  function playGame() {
    const numGuess = parseInt(numGuessInput.value);
    const randomNum = Math.floor(Math.random() * 10) + 1;
    if (numGuess === randomNum) {
      gameMsg.textContent = `Congratulations, ${numGuess} is the correct number! You won!`;
    } else {
      gameMsg.textContent = `Sorry, ${numGuess} is not the correct number. The correct number was ${randomNum}. Please try again.`;
    }
    // Reset the form
    form.reset();
  }
  
  const form2 = document.getElementById("contact-form");
const fullNameInput = document.getElementById("full-name");
const phoneInput = document.getElementById("phone-number");
const emailInput = document.getElementById("email-address");
const phoneRadio = document.getElementById("contact-phone");
const emailRadio = document.getElementById("contact-email");
const commentInput = document.getElementById("contact-comment");
const resultText = document.getElementById("result");

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if full name or first name + last name are provided
  const fullName = fullNameInput.value.trim();
  if (!fullName && (!firstName || !lastName)) {
    fullNameInput.classList.add("invalid");
    resultText.textContent = "Please provide either full name or first name and last name.";
    return;
  }

  // Check if preferred method of contact is selected
  if (!phoneRadio.checked && !emailRadio.checked) {
    phoneRadio.classList.add("invalid");
    emailRadio.classList.add("invalid");
    resultText.textContent = "Please choose your preferred method of contact.";
    return;
  }

  // Check if email is required and provided
  if (emailRadio.checked && !emailInput.value.trim()) {
    emailInput.classList.add("invalid");
    resultText.textContent = "Please provide your email address.";
    return;
  }

  // Check if phone is required and provided
  if (phoneRadio.checked && !phoneInput.value.trim()) {
    phoneInput.classList.add("invalid");
    resultText.textContent = "Please provide your phone number.";
    return;
  }

  // Check if comment is provided
  if (!commentInput.value.trim()) {
    commentInput.classList.add("invalid");
    resultText.textContent = "Please provide a comment.";
    return;
  }

  // Create object with form data
  const formData = {
    fullName: fullName,
    phone: phoneInput.value.trim(),
    email: emailInput.value.trim(),
    contactMethod: phoneRadio.checked ? "Phone" : "Email",
    comment: commentInput.value.trim()
  };

  // Display success message and form data
  resultText.classList.add("success");
  resultText.textContent = "Form submitted successfully! Thank you, " + fullNameInput.value + "!";
  alert(JSON.stringify(formData));
});

// Remove invalid class on input when user types
form2.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    input.classList.remove("invalid");
    resultText.classList.remove("success");
    resultText.textContent = "";
  });
});
  
  // Event listener for form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateInput()) {
      playGame();
    }
  });
});