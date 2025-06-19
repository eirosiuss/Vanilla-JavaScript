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

        const textParagraph = document.createElement('p');
        textParagraph.textContent = option;

        answerLabel.appendChild(answerInput);
        answerLabel.appendChild(letterSpan);
        answerLabel.appendChild(textParagraph);
        answersContainer.appendChild(answerLabel);
    })

    submitBtn.addEventListener('click', () => {
        const selectedAnswer = document.querySelector('.answers-container input[name="answer"]:checked')
        const errorMessage = document.createElement('p');

        if (selectedAnswer === null) {
            if (!answersContainer.querySelector('.error-message')) {
                errorMessage.textContent = 'Please select an answer';
                errorMessage.classList.add('error-message');
                answersContainer.appendChild(errorMessage);
            }
            return
        }


        if (selectedAnswer.value === questions[currentIndex].answer) {
            selectedAnswer.parentElement.classList.add('correct');
            const iconCorrect = document.createElement('div')
            iconCorrect.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z"/></svg>'
            selectedAnswer.parentElement.appendChild(iconCorrect);

        }
        if (selectedAnswer.value !== questions[currentIndex].answer) {
            selectedAnswer.parentElement.classList.add('incorrect');
            const iconIncorrect = document.createElement('div')
            iconIncorrect.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"/></svg>'
            selectedAnswer.parentElement.appendChild(iconIncorrect);

            questions[currentIndex].options.forEach(option => {
                if (option === questions[currentIndex].answer) {
                    const correctLabel = document.querySelector(`.answers-container label:has(input[value="${option}"])`);
                    correctLabel.classList.add('correct');
                    correctLabel.style.border = 'none'
                    const iconCorrect = document.createElement('div')
                    iconCorrect.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z"/></svg>'
                    correctLabel.appendChild(iconCorrect);
                }


            });

        }

        answersContainer.querySelector('.error-message').remove()
        


        const labels = document.querySelectorAll('.answers-container label');
        labels.forEach(label => label.style.pointerEvents = 'none');

        submitBtn.textContent = 'Next Question';

    });

    answersContainer.appendChild(submitBtn);

    const answerLabels = document.querySelectorAll('.answers-container label');

    answerLabels.forEach(label => {
        label.addEventListener('click', () => {
            document.querySelectorAll('.active').forEach(activeLabel => {
                activeLabel.classList.remove('active')
            });
            label.classList.add('active');
        });
    })
}





populate()