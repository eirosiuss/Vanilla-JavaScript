async function populate() {
    const requestURL =
        "/Vanilla-JavaScript/time-tracking-dashboard-main/data.json"
    const request = new Request(requestURL)

    const response = await fetch(request)
    const data = await response.json()

    populateHeader(data)
}

function populateHeader(obj) {
    const cardHeader = document.querySelectorAll('.header')

    obj.forEach((element, index) => {
        // console.log(element.title, cardHeader[index])
        const cardH2 = document.createElement('h2')
        cardH2.textContent = element.title
        cardHeader[index].appendChild(cardH2)
    })
}

populate()
