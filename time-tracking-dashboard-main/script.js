async function populate() {
    const requestURL =
        "./data.json"
    const request = new Request(requestURL)

    const response = await fetch(request)
    const data = await response.json()

    populateHeader(data)
    populateDaily(data)

    dailyBtn.addEventListener('click', () => {
        populateDaily(data)
    })

    weeklyBtn.addEventListener('click', () => {
        populateWeekly(data)
    })

    monthlyBtn.addEventListener('click', () => {
        populateMonthly(data)
    })
}

const dailyBtn = document.querySelector('#daily')
const weeklyBtn = document.querySelector('#weekly')
const monthlyBtn = document.querySelector('#monthly')

function populateHeader(obj) {
    const cardHeader = document.querySelectorAll('.header')

    obj.forEach((element, index) => {
        // console.log(element.title, cardHeader[index])
        const cardH2 = document.createElement('h2')
        cardH2.textContent = element.title
        cardHeader[index].appendChild(cardH2)
    })
}

const currentHours = document.querySelectorAll('#current')
const previousHours = document.querySelectorAll('#previous')

function populateDaily(obj) {
    obj.forEach((element, index) => {
        const currentNumber = element.timeframes.daily.current
        currentHours[index].textContent = currentNumber

        const previousNumber = element.timeframes.daily.previous
        previousHours[index].textContent = previousNumber
    })
}

function populateWeekly(obj) {
    obj.forEach((element, index) => {
        const currentNumber = element.timeframes.weekly.current
        currentHours[index].textContent = currentNumber

        const previousNumber = element.timeframes.weekly.previous
        previousHours[index].textContent = previousNumber
    })
}

function populateMonthly(obj) {
    obj.forEach((element, index) => {
        const currentNumber = element.timeframes.monthly.current
        currentHours[index].textContent = currentNumber

        const previousNumber = element.timeframes.monthly.previous
        previousHours[index].textContent = previousNumber
    })
}

populate()
