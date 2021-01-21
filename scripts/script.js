var hamburgerMenu = document.getElementById('menu');

function onClickMenu() {
  hamburgerMenu.classList.toggle("change");
  document.getElementById('nav').classList.toggle("change");
}

hamburgerMenu.addEventListener("click", onClickMenu);
