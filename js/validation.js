// Forms validation

let forms = document.querySelectorAll(".form_container form");
forms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let erroreArrayElemnts = [];
    let errorTxt = "";
    let requiredElements = form.querySelectorAll("input[aria-required]");
    for (let i = 0; i < requiredElements.length; i++) {
      let elType = requiredElements[i].getAttribute("type");
      if (elType == "text") {
        errorTxt = "Будь ласка, заповніть поле";
        console.log("text error");
        if (requiredElements[i].value == "") {
          showValidationError(requiredElements[i], errorTxt);
          erroreArrayElemnts.push(requiredElements[i]);
        }

        requiredElements[i].addEventListener("focus", () => {
          removeValidationError(requiredElements[i]);
        });
      }
      if (elType == "tel") {

        if (requiredElements[i].value == "") {
          errorTxt = "Будь ласка, заповніть поле";
          showValidationError(requiredElements[i], errorTxt);
          erroreArrayElemnts.push(requiredElements[i]);
        }

        requiredElements[i].addEventListener("focus", () => {
          removeValidationError(requiredElements[i]);
        });
      }
      if (elType == "email") {

        if (!validateEmail(requiredElements[i].value)) {
          if (requiredElements[i].value == "") {
            errorTxt = "Будь ласка, заповніть поле";
            showValidationError(requiredElements[i], errorTxt);
          } else {
            errorTxt = "Невірний формат";
            showValidationError(requiredElements[i], errorTxt);
          }

          erroreArrayElemnts.push(requiredElements[i]);
        }

        requiredElements[i].addEventListener("focus", () => {
          removeValidationError(requiredElements[i]);
        });
      }
      if (elType == "file") {

        if (requiredElements[i].files.length == 0) {
          errorTxt = "Будь ласка, прикріпіть файл";
          showValidationError(requiredElements[i], errorTxt);
          erroreArrayElemnts.push(requiredElements[i]);
        }

        requiredElements[i].addEventListener("change", () => {
          removeValidationError(requiredElements[i]);
        });
      }
    }

    if (erroreArrayElemnts.length == 0) {
      form.submit();
    }
  });
});

function validateEmail(email) {
  let expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return expr.test(email);
}

function removeValidationError(errorElement) {
  errorElement.closest(".form_item").classList.remove("error");
}

function showValidationError(errorElement, errorTxt) {
  errorElement.closest(".form_item").querySelector(".error_txt").innerText = errorTxt;
  errorElement.closest(".form_item").classList.add("error");
}
