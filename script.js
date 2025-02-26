document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let card = document.getElementById("card");
  let isValid = formValidation(name, email, card);
  if (isValid) {
    let targetEmail = "rohadtsajt@gmail.com";
    let subject = "Form Submission - Software Dev Challenge";
    let body = `Name: ${name.value}%0D%0AEmail: ${email.value}%0D%0ACard: ${card.value}`;
    let mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
});

// Form validation
function formValidation(name, email, card) {
  let isValid = true;
  // Name validation
  if (name.value.trim() === "") {
    name.classList.add("error");
    name.classList.remove("success");
    name.classList.add("placeholder-white");
    isValid = false;
  } else {
    name.classList.add("success");
    name.classList.remove("error");
    name.classList.remove("placeholder-white");
  }
  // Email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("error");
    email.classList.remove("success");
    email.classList.add("placeholder-white");
    isValid = false;
  } else {
    email.classList.add("success");
    email.classList.remove("error");
    email.classList.remove("placeholder-white");
  }
  // Card validation (must be exactly 16 digits)
  if (card.value.length < 5) {
    card.classList.add("error");
    card.classList.remove("success");
    card.classList.add("placeholder-white");
    isValid = false;
  } else {
    card.classList.add("success");
    card.classList.remove("error");
    card.classList.remove("placeholder-white");
  }
  console.log("Form Validation Result: ", isValid);
  return isValid;
}

// Remove error class when user starts typing
["name", "email", "card"].forEach((id) => {
  document.getElementById(id).addEventListener("input", () => {
    let element = document.getElementById(id);
    element.classList.remove("error");
    element.classList.remove("placeholder-white");
  });
});

// Hide/Show card input value on users position
function hideCardValue() {
  let card = document.getElementById("card");
  card.type = "password";
}

function showCardValue() {
  let card = document.getElementById("card");
  card.type = "number";
}
