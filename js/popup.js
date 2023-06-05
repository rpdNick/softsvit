const pageBody = document.querySelector("body");
const popupOverlay = document.querySelector(".overlay");

let closeButton = document.querySelectorAll(".close-modal");
let popupButtons = document.querySelectorAll(
  ".vacancy-slider .buttons-wrap .button"
);

closeButton.forEach(function (el) {
  el.addEventListener("click", function () {
    closePopup(this);
  });
});

function closePopup(button) {
  pageBody.classList.remove("modal_open");
  button.closest(".modal").classList.remove("active");
}

popupButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    showModal(button);
  });
});

function showModal(button) {
  if (button.getAttribute("data-popup") == "my-cv") {
    const myCvPopup = document.getElementById("my-cv-popup");
    showOverlay();
    myCvPopup.classList.add("active");
  } else if (button.getAttribute("data-popup") == "friend-cv") {
    const friendCvPopup = document.getElementById("friend-cv-popup");
    showOverlay();
    friendCvPopup.classList.add("active");
  }
}

function showOverlay() {
  pageBody.classList.add("modal_open");
  popupOverlay.classList.add("active");
}
