var submenuLink = document.querySelector(".header-catalog-link");
var submenu = document.querySelector(".header-catalog-list");

submenu.classList.remove("submenu-show");

submenuLink.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 32) {
    evt.preventDefault();
    submenu.classList.toggle("submenu-show");
  }
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
var timer;

try {
  storage_name = localStorage.getItem("name", name_input.value);
  storage_email = localStorage.getItem("email", email_input.value);
} catch (err) {
  isStorageSuport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  clearTimeout(timer);
  popup.classList.remove("modal-close-animation");
  popup.classList.add("modal-show");
  popup.classList.add("modal-open-animation");

  if (storage_name && storage_email) {
    name_input.value = storage_name;
    email_input.value = storage_email;
    message_input.focus();
  } else {
    name_input.focus();
  }
});

close.addEventListener("click", function () {
  timer = setTimeout('popup.classList.remove("modal-show")', 5000);
  popup.classList.remove("modal-open-animation");
  popup.classList.add("modal-close-animation");
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
      timer = setTimeout('popup.classList.remove("modal-show")', 5000);
      popup.classList.remove("modal-open-animation");
      popup.classList.add("modal-close-animation");
      popup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".map-content");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .modal-close");
var mapTimer;


mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  clearTimeout(timer);
  mapPopup.classList.remove("modal-close-animation");
  mapPopup.classList.add("modal-show");
  mapPopup.classList.add("modal-open-animation");
});

mapClose.addEventListener("click", function () {
  mapTimer = setTimeout('mapPopup.classList.remove("modal-show")', 5000);
  mapPopup.classList.remove("modal-open-animation");
  mapPopup.classList.add("modal-close-animation");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (mapPopup.classList.contains("modal-show")) {
      mapTimer = setTimeout('mapPopup.classList.remove("modal-show")', 5000);
      mapPopup.classList.remove("modal-open-animation");
      mapPopup.classList.add("modal-close-animation");
    }
  }
});
