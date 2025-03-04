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
