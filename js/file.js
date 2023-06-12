let fileInputs = document.querySelectorAll(".file-item");
let removeFile = document.querySelectorAll(".remove-file");

fileInputs.forEach(function (file) {
  file.addEventListener("change", function () {
    if (this.value != "") {
      const activeFile = this.closest("label");
      activeFile.classList.add("active");
      let fileName = file.files.item(0).name;
      console.log(fileName)
      activeFile.querySelector('.file-name').innerText = fileName;
    }
  });
});

// removeFile.forEach(function (removeBtn) {
//   removeBtn.addEventListener("click", function () {
//     console.log(this)
//   })
// });
