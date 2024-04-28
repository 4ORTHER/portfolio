function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let extra = document.getElementById("extra");

function openExtra() {
  extra.classList.add("open-extra");
}

function closeExtra() {
  extra.classList.remove("open-extra");
}
