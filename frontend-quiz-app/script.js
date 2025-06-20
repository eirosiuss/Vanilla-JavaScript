async function populate() {
    const requestURL =
        "./data.json"
    const request = new Request(requestURL)
    const response = await fetch(request)
    const data = await response.json()

    populateStartMenu(data)

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
let submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit Answer';
let currentIndex = 0;
let correctAnswers = 0


// function populateHtml(obj) {
//     const htmlTest = obj.quizzes.find(test => test.title === 'HTML');
//     const questions = htmlTest.questions;
//     const subjectName = document.querySelector('.subject-name');
//     subjectName.textContent = htmlTest.title;

//     const questionContainer = document.createElement('div');
//     questionContainer.classList.add('question-container');

//     const questionTextProgress = document.createElement('p');
//     questionTextProgress.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

//     const questionH2 = document.createElement('h2');
//     questionH2.textContent = questions[currentIndex].question;

//     const questionBarProgress = document.createElement('div');
//     questionBarProgress.classList.add('question-bar-progress');

//     const questionBarFill = document.createElement('div');
//     questionBarFill.classList.add('question-bar-fill');

//     const answersContainer = document.createElement('div');
//     answersContainer.classList.add('answers-container');

//     questionContainer.appendChild(questionTextProgress);
//     questionContainer.appendChild(questionH2);
//     questionContainer.appendChild(questionBarProgress);
//     questionBarProgress.appendChild(questionBarFill);
//     main.appendChild(questionContainer);
//     main.appendChild(answersContainer);

//     let progressPercentage = 0;

//     if (progressPercentage < 100) {
//         progressPercentage = (currentIndex + 1) / questions.length * 100;
//         questionBarFill.style.width = `${progressPercentage}%`;
//     }


//     questions[currentIndex].options.forEach((option, index) => {
//         const answerLabel = document.createElement('label');
//         const letter = String.fromCharCode(65 + index); // 65 = 'A'
//         const letterSpan = document.createElement('span');
//         letterSpan.textContent = letter;

//         const answerInput = document.createElement('input');
//         answerInput.type = 'radio';
//         answerInput.name = 'answer';
//         answerInput.value = option;

//         const textParagraph = document.createElement('p');
//         textParagraph.textContent = option;

//         answerLabel.appendChild(answerInput);
//         answerLabel.appendChild(letterSpan);
//         answerLabel.appendChild(textParagraph);
//         answersContainer.appendChild(answerLabel);
//     })
//     answersContainer.appendChild(submitBtn);
//     submitBtnHandler(questions, currentIndex, answersContainer, questionContainer)


//     const answerLabels = document.querySelectorAll('.answers-container label');
//     answerLabels.forEach(label => {
//         label.addEventListener('click', () => {

//             clearError(answersContainer);

//             document.querySelectorAll('.active').forEach(activeLabel => {
//                 activeLabel.classList.remove('active')
//             });
//             label.classList.add('active');
//         });
//     })
// }

const quizContainer = document.createElement('div');
const subjectName = document.querySelector('.subject-name');


function populateHtml(obj) {
    const htmlTest = obj.quizzes.find(test => test.title === 'HTML');
    const questions = htmlTest.questions;
    // const subjectName = document.querySelector('.subject-name');
    subjectName.textContent = htmlTest.title;


    // const quizContainer = document.createElement('div');
    quizContainer.classList.add('quiz-container');

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');

    const questionTextProgress = document.createElement('p');
    questionTextProgress.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

    const questionH2 = document.createElement('h2');
    questionH2.textContent = questions[currentIndex].question;

    const questionBarProgress = document.createElement('div');
    questionBarProgress.classList.add('question-bar-progress');

    const questionBarFill = document.createElement('div');
    questionBarFill.classList.add('question-bar-fill');

    const answersContainer = document.createElement('div');
    answersContainer.classList.add('answers-container');

    questionContainer.appendChild(questionTextProgress);
    questionContainer.appendChild(questionH2);
    questionContainer.appendChild(questionBarProgress);
    questionBarProgress.appendChild(questionBarFill);
    quizContainer.appendChild(questionContainer);
    quizContainer.appendChild(answersContainer);
    // main.appendChild(quizContainer);

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
    });

    answersContainer.appendChild(submitBtn);

    submitBtn.textContent = 'Submit Answer';

    const answerLabels = document.querySelectorAll('.answers-container label');
    answerLabels.forEach(label => {
        label.addEventListener('click', () => {
            clearError(answersContainer);
            document.querySelectorAll('.active').forEach(activeLabel => {
                activeLabel.classList.remove('active');
            });
            label.classList.add('active');
        });
    });

    submitBtn.onclick = () => {
        const selectedAnswer = document.querySelector('.answers-container input[name="answer"]:checked');
        if (!selectedAnswer) {
            if (!answersContainer.querySelector('.error-message')) {
                const errorMessage = document.createElement('p');
                errorMessage.classList.add('error-message');
                errorMessage.textContent = 'Please select an answer';
                answersContainer.appendChild(errorMessage);
            }
            return;
        }

        const iconCorrect = document.createElement('img');
        iconCorrect.src = './images/icon-correct.svg';
        const iconIncorrect = document.createElement('img');
        iconIncorrect.src = './images/icon-incorrect.svg';

        if (selectedAnswer.value === questions[currentIndex].answer) {
            selectedAnswer.parentElement.classList.add('correct');
            selectedAnswer.parentElement.appendChild(iconCorrect);
            correctAnswers++;
        } else {
            iconIncorrect.src = './images/icon-incorrect.svg';
            selectedAnswer.parentElement.classList.add('incorrect');
            selectedAnswer.parentElement.appendChild(iconIncorrect);

            questions[currentIndex].options.forEach(option => {
                if (option === questions[currentIndex].answer) {
                    const correctLabel = document.querySelector(`.answers-container label:has(input[value="${option}"])`);
                    if (correctLabel) {
                        correctLabel.classList.add('correct');
                        correctLabel.appendChild(iconCorrect);
                    }
                }
            });
        }

        const labels = document.querySelectorAll('.answers-container label');
        labels.forEach(label => label.style.pointerEvents = 'none');

        submitBtn.textContent = 'Next Question';

        submitBtn.onclick = () => {
            currentIndex++;
            if (currentIndex < questions.length) {
                quizContainer.innerHTML = ''
                populateHtml(obj);
            }

            if (currentIndex === questions.length) {
                quizContainer.remove()
                const scoreHeader = document.createElement('div');
                const resultParagraph = document.createElement('h2');
                resultParagraph.textContent = 'Quiz completed '
                const resultSpan = document.createElement('span');
                resultSpan.textContent = 'You scored...'

                const scoreContainer = document.createElement('div');
                const subject = document.createElement('p')
                subject.textContent = subjectName.textContent

                const points = document.createElement('p')
                points.textContent = correctAnswers

                const questionsCount = document.createElement('p')
                questionsCount.textContent = 'out of ' + questions.length

                resultParagraph.appendChild(resultSpan);
                scoreHeader.appendChild(resultParagraph);
                scoreContainer.appendChild(subject)
                scoreContainer.appendChild(points)
                scoreContainer.appendChild(questionsCount)
                main.appendChild(scoreHeader);
                main.appendChild(scoreContainer)
            };
        };
    }
}

main.appendChild(quizContainer);


const clearError = (answersContainer) => {
    if (answersContainer.querySelector('.error-message')) {
        answersContainer.querySelector('.error-message').remove()
    }
}

populate()