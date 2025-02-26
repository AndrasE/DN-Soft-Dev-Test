document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let card = document.getElementById("card").value;
  let targetEmail = "rohadtsajt@gmail.com";
  let subject = "Form Submission - Software Dev Challenge";
  let body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ACard: ${card}`;

  let mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
});
