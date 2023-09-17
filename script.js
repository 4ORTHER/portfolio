function toggleMenu() {
          const menu = document.querySelector(".menu-links");
          const icon = document.querySelector(".hamburger-icon");

          menu.classList.toggle("open");
          icon.classList.toggle("open");
}

let popup = document.getElementById("popup");

function openPopup() {
          popup.classList.add("open-popup");
}

function closePopup () {
          popup.classList.remove("open-popup");
}