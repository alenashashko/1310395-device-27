let link = document.querySelector(".write-us-link");
let popup = document.querySelector(".modal-feedback");
let close = document.querySelector(".modal-feedback .modal-close");
let name_input = document.querySelector("[name=name]");
let email_input = document.querySelector("[name=e-mail]");
let message_input = document.querySelector(".message");
let form = document.querySelector(".modal-feedback-form");

let isStorageSupport = true;
let storage_name = "";
let storage_email = "";

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
