// THEME
const theme = document.querySelector("#theme");

function handleTheme() {
  document.body.classList.toggle("dark-theme");
}

theme.addEventListener("click", handleTheme);

// MENU
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const nav = document.querySelector(".navbar");

function openNavbar() {
  nav.classList.add("visible");
}

function closeNavbar() {
  nav.classList.remove("visible");
}

menu.addEventListener("click", openNavbar);
closeBtn.addEventListener("click", closeNavbar);
