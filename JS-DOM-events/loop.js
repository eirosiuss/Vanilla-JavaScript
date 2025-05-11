let span = document.querySelector('h1 span');
let number = parseInt(span.textContent)
// console.log(number);

let back = document.querySelector('#back');
// console.log(back);

let forward = document.querySelector('#forward');
// console.log(forward);

back.addEventListener('click', () => {
    number === 1 ? number = 5 : number--
    span.textContent = number
})

forward.addEventListener('click', () => {
    number === 5 ? number = 1 : number++
    span.textContent = number
})