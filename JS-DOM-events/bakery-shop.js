let calculateButton = document.getElementById('calculate')

calculateButton.addEventListener('click', () => {
    let employeesCount = parseInt(document.getElementById('employees-count').value)
    let employeeMakes = parseInt(document.getElementById('employee-makes').value)
    let dayOrders = parseInt(document.getElementById('orders').value)

    let bakeryTotal = employeesCount * employeeMakes

    let bakeryTarget = bakeryTotal >= dayOrders

    let results = document.getElementById('results')

    if ((employeesCount || employeeMakes || dayOrders) < 0) {
    } else {
        results.innerHTML = `<p>The bakery bakes <strong>${bakeryTotal}</strong> loaves of bread per day</p>`
        results.innerHTML += `<p>Today's orders: <strong>${dayOrders}</strong></p>`
        results.innerHTML += `<p>${bakeryTarget ? "We managed to fulfill today's orders." : "We didn't manage to fulfill today's orders."}</p>`
    }
})

document.getElementById('employees-count').addEventListener('input', (evt) => {
    let inputValue = evt.target.valueAsNumber

    if (inputValue < 0) {
        evt.target.classList.add('error')
        evt.target.nextElementSibling.classList.add('show')
    } else {
        evt.target.classList.remove('error')
        evt.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('employee-makes').addEventListener('input', (evt) => {
    let inputValue = evt.target.valueAsNumber

    if (inputValue < 0) {
        evt.target.classList.add('error')
        evt.target.nextElementSibling.classList.add('show')
    } else {
        evt.target.classList.remove('error')
        evt.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('orders').addEventListener('input', (evt) => {
    let inputValue = evt.target.valueAsNumber

    if (inputValue < 0) {
        evt.target.classList.add('error')
        evt.target.nextElementSibling.classList.add('show')
    } else {
        evt.target.classList.remove('error')
        evt.target.nextElementSibling.classList.remove('show')
    }
})



document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('employees-count').value = '0'
    document.getElementById('employee-makes').value = '0'
    document.getElementById('orders').value = '0'
    document.getElementById('results').innerHTML = '<p>Nothing at the moment.</p>'
    document.getElementById('employees-count').nextElementSibling.classList.remove('show')
    document.getElementById('employees-count').classList.remove('error')
    document.getElementById('employee-makes').nextElementSibling.classList.remove('show')
    document.getElementById('employee-makes').classList.remove('error')
    document.getElementById('orders').nextElementSibling.classList.remove('show')
    document.getElementById('orders').classList.remove('error')

})