var submenuLink = document.querySelector(".header-catalog-link");
var submenu = document.querySelector(".header-catalog-list");

submenu.classList.remove("submenu-show");
submenuLink.addEventListener("click", function (evt) {
  evt.preventDefault();
});

submenuLink.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
  }
});

submenuLink.addEventListener("focus", function () {
  submenu.classList.toggle("submenu-show");
});

var link = document.querySelector(".write-us-link");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-feedback .modal-close");
var name_input = document.querySelector("[name=name]");
var email_input = document.querySelector("[name=e-mail]");
var message_input = document.querySelector(".message");
var form = document.querySelector(".modal-feedback-form");
var isStorageSupport = true;
var storage_name = "";
var storage_email = "";

try {
  storage_name = localStorage.getItem("name", name_input.value);
  storage_email = localStorage.getItem("email", email_input.value);
} catch (err) {
  isStorageSuport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage_name && storage_email) {
    name_input.value = storage_name;
    email_input.value = storage_email;
    message_input.focus();
  } else {
    name_input.focus();
  }
});

close.addEventListener("click", function () {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name_input.value || !email_input.value || !message_input.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name_input.value);
      localStorage.setItem("email", email_input.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".map-content");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function () {
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

