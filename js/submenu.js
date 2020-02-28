let submenuLink = document.querySelector (".header-catalog-link");
let submenu = document.querySelector(".header-catalog-list");

submenu.classList.remove("submenu-show");

submenuLink.addEventListener("focus", function () {
    submenu.classList.toggle("submenu-show");
});
