var openWindow = document.querySelector(".booking-search-btn");
var formPopup = document.querySelector(".main-form-wrapper");
var formClose = formPopup.querySelector(".form-hidden");
let formInputs = [];

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.length;
} catch (err) {
  isStorageSupport = false;
}

formPopup.classList.add("form-hidden");

openWindow.addEventListener("click", function (evt) {
  evt.preventDefault();
  formInputs = Array.from(formPopup.querySelectorAll(".booking-search-date-field"));

  formPopup.classList.toggle("form-hidden");
  formPopup.classList.toggle("main-form-show");

  if (storage) {
    formInputs.forEach(input => {
      input.value = localStorage.getItem(input.name);
    })
  }

  formInputs[0].focus();
});

formPopup.addEventListener("submit", function (evt) {
  const filteredInputs = formInputs.filter(input => input.value);

  if (!filteredInputs.length) {
    evt.preventDefault();
    return;
  }

  filteredInputs.forEach(input => {
    localStorage.setItem(input.name, input.value);
  })
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 'Escape') {
    if (formPopup.classList.contains("main-form-show")) {
      evt.preventDefault();
      formPopup.classList.remove("main-form-show");
      formPopup.classList.add("form-hidden");
    }
  }
});
