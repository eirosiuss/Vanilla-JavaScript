let button = document.querySelector('button')
// console.log(button);

let span = button.nextElementSibling.querySelector('span')
// console.log(span);
let number = parseInt(span.textContent)
// console.log(number);

let p = button.nextElementSibling.nextElementSibling
// console.log(p);
// console.log(p.textContent);


let color = document.querySelector('.style')
// console.log(backgroundColor);

button.addEventListener('click', () => {
number++
span.textContent = number
// console.log(number);

if (number >= 10 && number < 20) {
    p.textContent = "It is 10!";
    color.style.backgroundColor = 'yellow';
} else if (number >= 20 && number < 30) {
    p.textContent = "It is 20!";
    color.style.backgroundColor = 'red';
    color.style.color = 'white'
} else if (number >= 30 && number < 40) {
    p.textContent = "It is 30!";
    color.style.backgroundColor = 'green';
} else if (number >= 40) {
    p.textContent = "There are no more levels";
    color.style.color = 'black'
    color.style.backgroundColor = 'blue';
}
})
