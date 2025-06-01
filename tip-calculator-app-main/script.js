// https://www.frontendmentor.io/learning-paths/javascript-fundamentals-oR7g6-mTZ-/steps/681630fa5526abd744bd907e/article/read

// https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event

const resultTipPerson = document.getElementById('tip-amount')
const resultTipTotal = document.getElementById('total')

const tipAmount = document.querySelectorAll('.btn')
const billAmount = document.getElementById('bill')
const peopleAmount = document.getElementById('amount-of-people')

const handleCalculations = () => {
    tipAmount.forEach(element => {
        element.addEventListener('click', () => {
            const percent = parseInt(element.textContent.slice(0, -1)) / 100
            const totalValue = percent * handleChange()

            let isValid = true

            if (!dataIsValid()) {
                isValid = false
            }

            if (isValid) {
                document.querySelector('.selected').classList.remove('selected')
                element.classList.add('selected')

                resultTipTotal.textContent = '$' + totalValue
                resultTipPerson.textContent = '$' + totalValue / peopleAmount.valueAsNumber
            } else {
                renderError()
            }
        })
    })
}

const inputs = document.querySelectorAll('#bill, #amount-of-people')
const errorMessage = document.querySelectorAll('.display-none')

const handleChange = () => billAmount.valueAsNumber

inputs.forEach((element, index) => {
    element.addEventListener('input', () => {
        errorMessage[index].style.display = 'none'
    })
})

const renderError = () => {
    inputs.forEach((element, index) => {

        if (element.value.trim() === '') {
            errorMessage[index].style.display = 'block'
        }
    })
}

const resetBtn = document.getElementById('reset')

const resetCalculations = () => {
    resetBtn.addEventListener(('click'), () => {
        inputs.forEach(element => {
            element.value = ''
        })

        resultTipTotal.textContent = '$0.00'
        resultTipPerson.textContent = '$0.00'
        errorMessage.forEach(element => {
            element.style.display = 'none'
        })
    })
}

const dataIsValid = () => {
    let valid = true
    inputs.forEach(element => {
        if (element.value.trim() === '') {
            valid = false;
        }
    })
    return valid
}

handleCalculations()
resetCalculations()