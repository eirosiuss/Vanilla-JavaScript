async function populate() {
    const requestURL =
        "./data.json"
    const request = new Request(requestURL)
    const response = await fetch(request)
    const data = await response.json()
    globalData = data

    populateStartMenu(data)

    htmlBtn.addEventListener('click', () => {
        header.remove()
        populateHtml(data)
    })

    cssBtn.addEventListener('click', () => {
        header.remove()
        populateCss(data)
    })

    javaScriptBtn.addEventListener('click', () => {
        header.remove()
        populateJavaScript(data)
    })

    accessibilityBtn.addEventListener('click', () => {
        header.remove()
        populateAccessibility(data)
    })
}

function populateStartMenu(obj) {
    obj.quizzes.forEach((element, index) => {
        const title = element.title
        cardH2[index].textContent = title
    })
}
const header = document.querySelector('.header')
const main = document.querySelector('main')
const cardH2 = document.querySelectorAll('.subject-header h2')
const htmlBtn = document.getElementById('html')
const cssBtn = document.getElementById('css')
const javaScriptBtn = document.getElementById('java-script')
const accessibilityBtn = document.getElementById('accessibility')
let submitBtn = document.createElement('button');
let currentIndex = 0;
let correctAnswers = 0
const quizContainer = document.createElement('div');
quizContainer.classList.add('quiz-container');
const subjectName = document.querySelector('.subject-name');
const subjectNameContainer = document.querySelector('.subject-name-container')
const iconCorrect = document.createElement('img');
iconCorrect.src = './images/icon-correct.svg';
const iconIncorrect = document.createElement('img');
iconIncorrect.src = './images/icon-incorrect.svg';
let globalData
let questions
let answersContainer
let answerLabels
let htmlTest
let cssTest
let javaScriptTest
let accessibilityTest
let iconNav = document.createElement('img');

function populateHtml(obj) {
    htmlTest = obj.quizzes.find(test => test.title === 'HTML');
    questions = htmlTest.questions;
    iconNav.src = './images/icon-html.svg';
    subjectNameContainer.prepend(iconNav)
    subjectName.textContent = htmlTest.title;
    renderQuestion()
}

function populateCss(obj) {
    cssTest = obj.quizzes.find(test => test.title === 'CSS');
    questions = cssTest.questions;
    iconNav.src = './images/icon-css.svg';
    subjectNameContainer.prepend(iconNav)
    subjectName.textContent = cssTest.title;
    renderQuestion()
}

function populateJavaScript(obj) {
    javaScriptTest = obj.quizzes.find(test => test.title === 'JavaScript');
    questions = javaScriptTest.questions;
    iconNav.src = './images/icon-js.svg';
    subjectNameContainer.prepend(iconNav)
    subjectName.textContent = javaScriptTest.title;
    renderQuestion()
}

function populateAccessibility(obj) {
    accessibilityTest = obj.quizzes.find(test => test.title === 'Accessibility');
    questions = accessibilityTest.questions;
    iconNav.src = './images/icon-accessibility.svg';
    subjectNameContainer.prepend(iconNav)
    subjectName.textContent = accessibilityTest.title;
    renderQuestion()
}

submitBtn.addEventListener('click', () => {
    if (submitBtn.textContent === 'Submit Answer') {
        const selectedAnswer = document.querySelector('.answers-container input[name="answer"]:checked');
        if (!selectedAnswer) {
            if (!answersContainer.querySelector('.error-message')) {
                const errorMessageContainer = document.createElement('div');
                const errorMessage = document.createElement('p')
                errorMessageContainer.classList.add('error-message');
                errorMessage.textContent = 'Please select an answer';
                errorMessageContainer.appendChild(iconIncorrect)
                errorMessageContainer.appendChild(errorMessage)
                answersContainer.appendChild(errorMessageContainer);
            }
            return;
        }

        if (selectedAnswer.value == questions[currentIndex].answer) {
            selectedAnswer.parentElement.classList.add('correct');
            selectedAnswer.parentElement.appendChild(iconCorrect);
            correctAnswers++;
        } else {
            selectedAnswer.parentElement.classList.add('incorrect');
            selectedAnswer.parentElement.appendChild(iconIncorrect);

            questions[currentIndex].options.forEach(option => {
                if (option === questions[currentIndex].answer) {
                    const correctLabel = document.querySelector(`.answers-container label:has(input[value="${option}"])`);
                    if (correctLabel) {
                        correctLabel.appendChild(iconCorrect);
                    }
                }
            });

            answerLabels.forEach(label => label.style.pointerEvents = 'none');
        }

        submitBtn.textContent = 'Next Question';
        currentIndex++;
    } else if (submitBtn.textContent === 'Next Question') {
        if (currentIndex < questions.length) {
            renderNextQuestion();
        }

        if (currentIndex === 1) {
            quizContainer.innerHTML = ''
            quizContainer.remove()
            const resultParagraph = document.createElement('h2');
            resultParagraph.classList.add('result-header')
            resultParagraph.textContent = 'Quiz completed '
            const resultSpan = document.createElement('span');
            resultSpan.textContent = 'You scored...'

            const scoreResultContainer = document.createElement('div');
            scoreResultContainer.classList.add('score-result-container')
            const scoreOutput = document.createElement('div')
            scoreOutput.classList.add('score-output')
            const subject = document.createElement('h3')
            subject.textContent = subjectName.textContent

            const points = document.createElement('p')
            points.classList.add('points')
            points.textContent = correctAnswers

            const questionsCount = document.createElement('p')
            questionsCount.classList.add('questions-count')
            questionsCount.textContent = 'out of ' + questions.length

            resultParagraph.appendChild(resultSpan);
            scoreOutput.appendChild(subject)
            scoreOutput.appendChild(points)
            scoreOutput.appendChild(questionsCount)
            scoreOutput.appendChild(questionsCount)
            scoreResultContainer.appendChild(scoreOutput)
            scoreResultContainer.appendChild(againBtn)
            scoreContainer.appendChild(resultParagraph)
            scoreContainer.appendChild(scoreResultContainer)
            main.appendChild(scoreContainer)
        }
    }
})

const againBtn = document.createElement('button')
againBtn.textContent = 'Play Again'
const scoreContainer = document.createElement('div')
scoreContainer.classList.add('score-container')

againBtn.addEventListener('click', () => {
    currentIndex = 0
    correctAnswers = 0
    scoreContainer.remove()
    scoreContainer.innerHTML = ''
    main.append(header)
    populateStartMenu(globalData)
    subjectName.textContent = ''
})

const renderQuestion = () => {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');

    const questionContainerHeader = document.createElement('div')
    questionContainerHeader.classList.add('question-container-header')

    const questionTextProgress = document.createElement('p');
    questionTextProgress.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

    const questionH2 = document.createElement('h2');
    questionH2.textContent = questions[currentIndex].question;

    const questionBarProgress = document.createElement('div');
    questionBarProgress.classList.add('question-bar-progress');

    const questionBarFill = document.createElement('div');
    questionBarFill.classList.add('question-bar-fill');

    answersContainer = document.createElement('div');
    answersContainer.classList.add('answers-container');

    questionContainerHeader.appendChild(questionTextProgress)
    questionContainerHeader.appendChild(questionH2)
    questionContainer.appendChild(questionContainerHeader);
    questionContainer.appendChild(questionBarProgress);
    questionBarProgress.appendChild(questionBarFill);
    quizContainer.appendChild(questionContainer);
    quizContainer.appendChild(answersContainer);

    let progressPercentage = ((currentIndex + 1) / questions.length) * 100;
    questionBarFill.style.width = `${progressPercentage}%`;

    questions[currentIndex].options.forEach((option, index) => {
        const answerLabel = document.createElement('label');
        const letter = String.fromCharCode(65 + index);
        const letterSpan = document.createElement('span');
        letterSpan.textContent = letter;

        const answerInput = document.createElement('input');
        answerInput.type = 'radio';
        answerInput.name = 'answer';
        answerInput.value = option;

        const textParagraph = document.createElement('p');
        textParagraph.textContent = option;

        answerLabel.appendChild(answerInput);
        answerLabel.appendChild(letterSpan);
        answerLabel.appendChild(textParagraph);
        answersContainer.appendChild(answerLabel);
    })

    answersContainer.appendChild(submitBtn);
    submitBtn.textContent = 'Submit Answer';
    main.appendChild(quizContainer);
    setupAnswerSelection()
}

const renderNextQuestion = () => {
    quizContainer.innerHTML = '';
    renderQuestion();
}

const removeerrorMessageContainer = (answersContainer) => {
    if (answersContainer.querySelector('.error-message')) {
        answersContainer.querySelector('.error-message').remove()
    }
}

const setupAnswerSelection = () => {
    answerLabels = document.querySelectorAll('.answers-container label');
    answerLabels.forEach(label => {
        label.addEventListener('click', () => {
            removeerrorMessageContainer(answersContainer);
            document.querySelectorAll('.active').forEach(activeLabel => {
                activeLabel.classList.remove('active');
            });
            label.classList.add('active');
        });
    })
}

populate()