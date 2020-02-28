let submenuLink = document.querySelector (".header-catalog-link");
let submenu = document.querySelector(".header-catalog-list");

submenu.classList.remove("submenu-show");

submenuLink.addEventListener("click", function (evt) {
  evt.preventDefault();
});

submenuLink.addEventListener("kewdown", function (evt) {
  if (evt.keyCode === 13) {
  evt.preventDefault();
  }
});

submenuLink.addEventListener("focus", function () {
    submenu.classList.toggle("submenu-show");
});
