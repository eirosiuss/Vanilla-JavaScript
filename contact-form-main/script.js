const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector(".submit-btn");
const inputs = [nameInput, surnameInput, emailInput];
const errorMessage = document.querySelectorAll(".error-message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
    if (!dataIsValid()) {
        renderError();
    }

//   if (name === "" || /\d/.test(name)) {
//     nameInput.classList.add("error");
//     nameInput.setAttribute("aria-invalid", "true");
//     nameInput.nextElementSibling.style.display = "block";
//     nameInput.focus();
//   } else {
//     nameInput.classList.remove("error");
//     nameInput.setAttribute("aria-invalid", "false");
//     nameInput.nextElementSibling.style.display = "none";
//   }

//   if (surname === "" || /\d/.test(surname)) {
//     surnameInput.classList.add("error");
//     surnameInput.setAttribute("aria-invalid", "true");
//     surnameInput.nextElementSibling.style.display = "block";
//     surnameInput.focus();
//   } else {
//     surnameInput.classList.remove("error");
//     surnameInput.setAttribute("aria-invalid", "false");
//     surnameInput.nextElementSibling.style.display = "none";
//   }

//   if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     emailInput.classList.add("error");
//     emailInput.setAttribute("aria-invalid", "true");
//     emailInput.nextElementSibling.style.display = "block";
//     emailInput.focus();
//   } else {
//     emailInput.classList.remove("error");
//     emailInput.setAttribute("aria-invalid", "false");
//     emailInput.nextElementSibling.style.display = "none";
//   }
}

const dataIsValid = () => {
    let valid = true
    inputs.forEach(element => {
        if (element.value.trim() === '') {
            if (valid) {
                element.focus()
            }
            valid = false
        }
    })
    return valid
}

const renderError = () => {
    inputs.forEach((element, index) => {
        if (element.value.trim() === '') {
            errorMessage[index].style.display = 'block'
        }
    })
}

const clearError = () => {
    inputs.forEach((element, index) => {
        element.addEventListener('input', () => {
            errorMessage[index].style.display = 'none'
        })
    })
}

clearError();