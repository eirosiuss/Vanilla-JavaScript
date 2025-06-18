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
    // console.log(questions[currentIndex].options);
    questions[currentIndex].options.forEach((option, index) => {
        // console.log(index);

        const answerLabel = document.createElement('label');

        const letter = String.fromCharCode(65 + index); // 65 = 'A'

        const letterSpan = document.createElement('span');
        letterSpan.textContent = letter;

        const answerInput = document.createElement('input');
        answerInput.type = 'radio';
        answerInput.value = option;

        const textSpan = document.createElement('span');
        textSpan.textContent = option;

        answerLabel.appendChild(answerInput);
        answerLabel.appendChild(letterSpan);
        answerLabel.appendChild(textSpan);
        answersContainer.appendChild(answerLabel);

        const answerLabels = document.querySelectorAll('.answers-container label');

        answerLabels.forEach(label => {
            label.addEventListener('click', () => {
                label.classList.add('active');
            });
        })
    })

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit Answer';
    answersContainer.appendChild(submitBtn);


    // submitBtn.addEventListener('click', () => {
    //     const selectedOption = document.querySelector('.answers-container input:checked');
    //     if (selectedOption) {
    //         const answer = selectedOption.value;

    //         if (answer === questions[currentIndex].answer) {
    //             answerLabel.classList.add('correct');
    //         } else {
    //             answerLabel.classList.add('incorrect');
    //         }

    //         currentIndex++;
    //         if (currentIndex < questions.length) {
    //             questionTextProgress.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    //             questionH2.textContent = questions[currentIndex].question;
    //             answersContainer.innerHTML = '';
    //             questions[currentIndex].options.forEach((option, index) => {
    //                 const answerLabel = document.createElement('label');
    //                 const letter = String.fromCharCode(65 + index);
    //                 const letterSpan = document.createElement('span');
    //                 letterSpan.textContent = letter;

    //                 const answerInput = document.createElement('input');
    //                 answerInput.type = 'radio';
    //                 answerInput.value = option;

    //                 const textSpan = document.createElement('span');
    //                 textSpan.textContent = option;

    //                 answerLabel.appendChild(answerInput);
    //                 answerLabel.appendChild(letterSpan);
    //                 answerLabel.appendChild(textSpan);
    //                 answersContainer.appendChild(answerLabel);
    //             });
    //             progressPercentage = (currentIndex + 1) / questions.length * 100;
    //             questionBarFill.style.width = `${progressPercentage}%`;
    //         }
    //     }
    // });
}



populate()