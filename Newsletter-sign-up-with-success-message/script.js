let form = document.querySelector('form')
let email = document.querySelector('input')
let error = document.querySelector('#error')
let main = document.querySelector('main')
let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

let successSub = document.querySelector('.success-sub')
successSub.style.display = 'none'

let confirmationEmail = document.querySelector('#confirmation-email')

let handleSubmit = (event) => {
    event.preventDefault()



    email.addEventListener('input', () => {
        error.textContent = ''
        email.removeAttribute('class')
    })

    if (email.value.length == 0 || !emailRegExp.test(email.value)) {
        error.textContent = 'Valid email required'
        email.setAttribute('class', 'invalid')

    } else {
        error.textContent = ''
        email.removeAttribute('class')
        main.style.display = 'none'
        successSub.style.display = 'block'
        confirmationEmail.textContent = email.value

        const data = Object.fromEntries(new FormData(event.target));
        // console.log(data);
        email.value = ''
    }
}

let dismissBtn = document.querySelector('#dismiss-btn')

dismissBtn.addEventListener('click', () => {
    main.style.display = 'block'
    successSub.style.display = 'none'
})

form.addEventListener("submit", handleSubmit);