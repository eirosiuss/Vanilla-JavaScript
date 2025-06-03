// https://www.frontendmentor.io/learning-paths/javascript-fundamentals-oR7g6-mTZ-/steps/681630fa5526abd744bd907e/article/read

// https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event

const resultTipPerson = document.getElementById('tip-amount')
const resultTipTotal = document.getElementById('total')

const tipAmount = document.querySelectorAll('.btn')

const customTipAmount = document.getElementById('custom-percent')

const billAmount = document.getElementById('bill')
const peopleAmount = document.getElementById('amount-of-people')

const handleBillChange = () => billAmount.valueAsNumber

const handleTipChange = () => customTipAmount.valueAsNumber

customTipAmount.addEventListener('input', (e) => {
    startCalcBtn.style.display = 'block'
    handleTipChange(e)
})

const startCalcBtn = document.querySelector('.btn-enter')

let totalTip

startCalcBtn.addEventListener('click', () => {

    const customPercent = handleTipChange() / 100
    totalTip = customPercent * handleBillChange()

    let isValid = true

    if (!dataIsValid()) {
        isValid = false
    }

    if (isValid) {
        document.querySelector('.selected').classList.remove('selected')
        customTipAmount.classList.add('selected')

        renderSuccess()
    } else {
        renderError()
    }
})



const handleCalculations = () => {
    tipAmount.forEach(element => {
        element.addEventListener('click', () => {
            const percent = parseInt(element.textContent.slice(0, -1)) / 100
            totalTip = percent * handleBillChange()

            let isValid = true

            if (!dataIsValid()) {
                isValid = false
            }

            if (isValid) {
                document.querySelector('.selected').classList.remove('selected')
                element.classList.add('selected')

                renderSuccess()
            } else {
                renderError()
            }
        })
    })
}

const renderSuccess = () => {
    resetBtn.classList.add('filled')
    startCalcBtn.style.display = 'none'

    resultTipTotal.textContent = '$' + (totalTip).toFixed(2)
    resultTipPerson.textContent = '$' + (totalTip / peopleAmount.valueAsNumber).toFixed(2)
}

const inputs = document.querySelectorAll('#bill, #amount-of-people, #customTipAmount')
const errorMessage = document.querySelectorAll('.display-none')

const clearError = () => {
    inputs.forEach((element, index) => {
        element.addEventListener('input', () => {
            errorMessage[index].style.display = 'none'
        })
    })
}

const renderError = () => {
    inputs.forEach((element, index) => {

        if (element.value.trim() === '' || parseInt(element.value.trim()) === 0 || element.value.trim() === NaN) {
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

        customTipAmount.value = ''

        resetBtn.classList.remove('filled')
        billAmount.focus()
    })
}

const dataIsValid = () => {
    let valid = true
    inputs.forEach(element => {
        if (element.value.trim() === '' || parseInt(element.value.trim()) === 0 || isNaN(element.value.trim())) {
            if (valid) {
                element.focus()
            }
            valid = false
        }
    })
    return valid
}

clearError()
handleCalculations()
resetCalculations()