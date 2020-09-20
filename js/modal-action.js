var openWindow = document.querySelector(".booking-search-btn");
var formPopup = document.querySelector(".main-form-wrapper");
var formClose = formPopup.querySelector(".form-hidden");
var formInput = formPopup.querySelector(".booking-search-date-field");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("date");
} catch (err) {
  isStorageSupport = false;
}

formPopup.classList.add("form-hidden");

openWindow.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.remove("form-hidden");
  formPopup.classList.add("main-form-show");

  if (storage) {
    formInput.value = storage;
  }

  formInput.focus();
});

formPopup.addEventListener("post", function (evt) {
  if (!formInput.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("date", formInput.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 27) {
    if (formPopup.classList.contains("main-form-show")) {
      evt.preventDefault();
      formPopup.classList.remove("main-form-show");
      formPopup.classList.add("form-hidden");
    }
  }
});
