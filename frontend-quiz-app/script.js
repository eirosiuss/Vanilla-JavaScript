async function populate() {
    const requestURL =
        "./data.json"
    const request = new Request(requestURL)

    const response = await fetch(request)
    const data = await response.json()

    populateStartMenu(data)

    // populateHtml(data)
    htmlBtn.addEventListener('click', () => {
        header.remove()

        populateHtml(data)
    })
}

const header = document.querySelector('.header')
const main = document.querySelector('main')

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

    const subjectName = document.querySelector('.subject-name');
    subjectName.textContent = htmlTest.title;

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
    main.appendChild(questionContainer);

    const questionTextProgress = document.createElement('p');
    questionTextProgress.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    questionContainer.appendChild(questionTextProgress);

    const questionH2 = document.createElement('h2');
    questionH2.textContent = questions[currentIndex].question;
    questionContainer.appendChild(questionH2);

    const questionBarProgress = document.createElement('div');
    questionBarProgress.classList.add('question-bar-progress');
    questionContainer.appendChild(questionBarProgress);
    const questionBarFill = document.createElement('div');
    questionBarFill.classList.add('question-bar-fill');
    questionBarProgress.appendChild(questionBarFill);
    let progressPercentage = 0;

    if (progressPercentage < 100) {
        progressPercentage = (currentIndex + 1) / questions.length * 100;
        questionBarFill.style.width = `${progressPercentage}%`;
    }

    const answersContainer = document.createElement('div');
    answersContainer.classList.add('answers-container');
    main.appendChild(answersContainer);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit Answer';

    questions[currentIndex].options.forEach((option, index) => {

        const answerLabel = document.createElement('label');

        const letter = String.fromCharCode(65 + index); // 65 = 'A'

        const letterSpan = document.createElement('span');
        letterSpan.textContent = letter;

        const answerInput = document.createElement('input');
        answerInput.type = 'radio';
        answerInput.name = 'answer';
        answerInput.value = option;

        const textSpan = document.createElement('span');
        textSpan.textContent = option;

        answerLabel.appendChild(answerInput);
        answerLabel.appendChild(letterSpan);
        answerLabel.appendChild(textSpan);
        answersContainer.appendChild(answerLabel);

        submitBtn.addEventListener('click', () => {
            // console.log(answerInput.checked);


            

            // if (answerInput.checked) {
            //     console.log(answerInput.value, questions[currentIndex].answer);
                
            // }


        });
    })

    answersContainer.appendChild(submitBtn);

    const answerLabels = document.querySelectorAll('.answers-container label');

    answerLabels.forEach(label => {
        label.addEventListener('click', () => {
            // console.log(label);
            document.querySelectorAll('.active').forEach(activeLabel => {
                activeLabel.classList.remove('active')
            });
            label.classList.add('active');
        });
    })


}



populate()