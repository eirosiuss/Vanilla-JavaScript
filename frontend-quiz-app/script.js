async function populate() {
    const requestURL =
        "./data.json"
    const request = new Request(requestURL)

    const response = await fetch(request)
    const data = await response.json()

    populateStartMenu(data)

    // populateHtml(data)
    htmlBtn.addEventListener('click', () => {
        populateHtml(data)
    })
}

function populateStartMenu(obj) {
    const cardH2 = document.querySelectorAll('.subject-header h2')

    obj.quizzes.forEach((element, index) => {
        const title = element.title
        cardH2[index].textContent = title
    })
}

const htmlBtn = document.getElementById('html')
const cssBtn = document.getElementById('css')
const javaScriptBtn = document.getElementById('java-script')
const accessibilityBtn = document.getElementById('accessibility')


function populateHtml(obj) {

    const htmlTest = obj.quizzes.find(test => test.title === 'HTML');

    const questions = htmlTest.questions;
    let currentIndex = 0;

    console.log(questions[currentIndex]);

}



populate()