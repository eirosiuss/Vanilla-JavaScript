let btn = document.querySelector('button')
// console.log(btn);

let body = document.querySelector('body')
btn.addEventListener('click', () => {
if (btn.textContent === 'Bigger') {
    btn.textContent = 'Smaller'
    body.style.fontSize = '1.5rem'
} else if (btn.textContent === 'Smaller') {
    btn.textContent = 'Bigger'
    body.style.fontSize = '1rem'
}
})