// Form submission on submit button click
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let card = document.getElementById("card");

  //If form is valid, send email
  if (formValidation(name, email, card)) {
    let targetEmail = "challenge@dn-uk.com";
    let subject = "Form Submission - Software Dev Challenge";
    let body = `Name: ${name.value}%0D%0AEmail: ${email.value}%0D%0ACard: ${card.value}`;
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  }
});

// Utility functions for adding/removing classes highlighting valid/invalid fields
function setValidField(field) {
  field.classList.add("success");
  field.classList.remove("error", "placeholder-white");
}

function setInvalidField(field) {
  field.classList.add("error", "placeholder-white");
  field.classList.remove("success");
}

// Hide input value on blur
function hideValue(inputId) {
  document.getElementById(inputId).type = "password";
}

// Show input value on focus
function showValue(inputId) {
  document.getElementById(inputId).type = "text";
}

// Form validation function
function formValidation(name, email, card) {
  let isValid = true;

  // Name validation (Allows letters, special characters, and hyphens)
  let namePattern =
    /^[A-Za-z!#$%&'*+\-/=?^_`{|}~]{2,}(?: [A-Za-z!#$%&'*+\-/=?^_`{|}~]{2,}(?:-[A-Za-z!#$%&'*+\-/=?^_`{|}~]{2,})?)+$/;
  if (!namePattern.test(name.value.trim())) {
    setInvalidField(name);
    isValid = false;
  } else {
    setValidField(name);
  }

  // Email validation (Basic email pattern)
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    setInvalidField(email);
    isValid = false;
  } else {
    setValidField(email);
  }

  // Card validation (Length check, numeric check, not all zeros, and Luhn algorithm)
  let numStr = card.value.replace(/\s+/g, ""); // Remove spaces
  if (
    numStr.length < 13 ||
    numStr.length > 19 ||
    !/^\d+$/.test(numStr) ||
    numStr === "0000000000000000" ||
    !luhnCheck(numStr)
  ) {
    setInvalidField(card);
    isValid = false;
  } else {
    setValidField(card);
  }

  return isValid;
}

// Luhn Algorithm for card validation
function luhnCheck(val) {
  let sum = 0;
  let shouldDouble = false;
  for (let i = val.length - 1; i >= 0; i--) {
    let digit = parseInt(val.charAt(i));
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

// Loop to remove error class when user starts typing
["name", "email", "card"].forEach((id) => {
  document.getElementById(id).addEventListener("input", function () {
    this.classList.remove("error", "placeholder-white");
  });
});

// Toggle navbar
function toggleNavDropdown() {
  let navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");

  let openIcon = document.querySelector(".open-icon");
  let closeIcon = document.querySelector(".close-icon");

  if (navbar.classList.contains("responsive")) {
    openIcon.style.display = "none";
    closeIcon.style.display = "inline";
  } else {
    openIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }
}
