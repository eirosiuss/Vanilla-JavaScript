async function populate() {
    const requestURL =
        "./data.json"
    const request = new Request(requestURL)

    const response = await fetch(request)
    const data = await response.json()

    populateHeader(data)


    data.quizzes.forEach(element => {
        console.log(element.title);
    });
}

function populateHeader(obj) {
    const cardH2 = document.querySelectorAll('.subject-header h2')    

    obj.quizzes.forEach((element, index) => {        
        const title = element.title
        cardH2[index].textContent = title
    })
}

populate()