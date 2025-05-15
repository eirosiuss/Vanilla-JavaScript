let calculateButton = document.getElementById('calculate')

calculateButton.addEventListener('click', () => {
    let employeesCount = parseInt(document.getElementById('employees-count').value)
    let employeeMakes = parseInt(document.getElementById('employee-makes').value)
    let dayOrders = parseInt(document.getElementById('orders').value)

    let bakeryTotal = employeesCount * employeeMakes

    let bakeryTarget = bakeryTotal >= dayOrders
        
    // let logInfo = {
    //     bakeryTotal,
    //     bakeryTarget
    // }
    // console.log(logInfo);

    let results = document.getElementById('results')
    // console.log(results);
    
    results.innerHTML = 'asd'
})