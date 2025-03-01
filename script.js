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

// Utility functions for adding/removing classes
function setValidField(field) {
  field.classList.add("success");
  field.classList.remove("error", "placeholder-white");
}

function setInvalidField(field) {
  field.classList.add("error", "placeholder-white");
  field.classList.remove("success");
}

// Form validation
function formValidation(name, email, card) {
  let isValid = true;

  // Name validation (Supports first & last name, allows hyphens)
  let namePattern = /^[A-Za-z]{2,}(?: [A-Za-z]{2,}(?:-[A-Za-z]{2,})?)+$/;
  if (!namePattern.test(name.value.trim())) {
    setInvalidField(name);
    isValid = false;
  } else {
    setValidField(name);
  }

  // Email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    setInvalidField(email);
    isValid = false;
  } else {
    setValidField(email);
  }

  // Card validation (Luhn Algorithm)
  let numStr = card.value.replace(/\s+/g, ""); // Remove spaces
  if (numStr.length < 13 || numStr.length > 19 || !/^\d+$/.test(numStr)) {
    setInvalidField(card);
    isValid = false;
  } else {
    let sum = 0,
      shouldDouble = false;
    for (let i = numStr.length - 1; i >= 0; i--) {
      let digit = parseInt(numStr[i]);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    if (sum % 10 !== 0) {
      setInvalidField(card);
      isValid = false;
    } else {
      setValidField(card);
    }
  }

  return isValid;
}

// Remove error class when user starts typing
["name", "email", "card"].forEach((id) => {
  document.getElementById(id).addEventListener("input", function () {
    this.classList.remove("error", "placeholder-white");
  });
});

// Hide/Show card input value on user action
function hideCardValue() {
  document.getElementById("card").type = "password";
}

function showCardValue() {
  document.getElementById("card").type = "number";
}

// Toggle navbar
function toggleDropdown() {
  let navbar = document.getElementById("dropdown");
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
