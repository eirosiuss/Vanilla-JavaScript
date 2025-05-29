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
    const cardH2 = document.querySelectorAll('.header > h2')

    obj.forEach((element, index) => {
        // console.log(element.title, cardH2[index])        
        const title = element.title
        cardH2[index].textContent = title
    })
}

const currentHours = document.querySelectorAll('.current')
const previousHours = document.querySelectorAll('.previous')

function populateDaily(obj) {
    obj.forEach((element, index) => {
        const currentNumber = element.timeframes.daily.current
        currentHours[index].textContent = `${currentNumber}hrs`

        previousHours[index].textContent = `Yesterday - ${element.timeframes.daily.previous}hrs`;
    })
}

function populateWeekly(obj) {
    obj.forEach((element, index) => {
        const currentNumber = element.timeframes.weekly.current
        currentHours[index].textContent = `${currentNumber}hrs`

        previousHours[index].textContent = `Last week - ${element.timeframes.weekly.previous}hrs`;

    })
}

function populateMonthly(obj) {
    obj.forEach((element, index) => {
        const currentNumber = element.timeframes.monthly.current
        currentHours[index].textContent = `${currentNumber}hrs`

        previousHours[index].textContent = `Last month - ${element.timeframes.monthly.previous}hrs`;
    })
}

const activeCards = document.querySelectorAll('.card:not(:first-child)')

activeCards.forEach(card => {
    card.addEventListener('click', () => {
        document.querySelector('.active-card').classList.remove('active-card')
        card.classList.add('active-card')
    })
})

const activeTimeframe = document.querySelectorAll('ul button')

activeTimeframe.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.active-button').classList.remove('active-button')
        button.classList.add('active-button')
    })
})

populate()
