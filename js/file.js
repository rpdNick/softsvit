let addFileBtn = document.querySelectorAll(".add-file");
let removeFileBtn = document.querySelectorAll(".remove-file");

addFileBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    addFile(this);
  });
});

removeFileBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    removeFile(this);
  });
});

function addFile(button) {
  let fileInput = button.closest(".attachment").querySelector("input");
  fileInput.click();
  const activeFile = button.closest(".file_items");

  fileInput.addEventListener("change", function () {
    activeFile.classList.add("active");
    let fileName = fileInput.files.item(0).name;
    activeFile.querySelector(".file-name").innerText = fileName;
  });
}

function removeFile(button) {
  let fileInput = button.closest(".attachment").querySelector("input");
  const activeFile = button.closest(".file_items");
  fileInput.value = "";
  const fileItems = button.closest(".file_items");
  fileItems.classList.remove("active");
  activeFile.querySelector(".file-name").innerText = "";
}

// phone only numbers
const phoneInputs = document.querySelectorAll(".phone");

function onlyNumbers(items) {
  items.forEach(function (item) {
    item.addEventListener("keydown", function (e) {
      var keyCode = e.keyCode || e.which;
      if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
        e.preventDefault();
      }
    });
  });
}

onlyNumbers(phoneInputs);
