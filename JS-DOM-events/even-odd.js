let button = document.querySelector('button')
console.log(button);

let input = document.querySelector('input')
console.log(input);


let text = document.querySelector('p');
console.log(text);

button.addEventListener('click', () => {
    if (input.value === '') {
        text.textContent = "Enter a number"
        text.style.background = 'red'
    } else if (input.valueAsNumber % 1 !== 0) {
        text.textContent = "Enter integer number"
        text.style.background = 'red'
    } else if (input.valueAsNumber % 2 === 0) {
        text.textContent = input.valueAsNumber + ' is even'
        text.style.background = 'green'
    } else if (input.valueAsNumber % 2 !== 0) {
        text.textContent = input.valueAsNumber + ' is odd'
        text.style.background = 'blue'
    }
    input.value = ''
    input.focus()
})