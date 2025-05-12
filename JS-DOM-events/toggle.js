let button = document.querySelector('button');
// console.log(button);

let paragraph = document.querySelector('p');
// console.log(paragraph);

button.addEventListener('click', () => {
    if (button.textContent === 'Show') {
        button.textContent = 'Hide'
        // console.log(button.textContent);
    } else if (button.textContent === 'Hide') {
        button.textContent = 'Show'
        // console.log(button.textContent);
    }
paragraph.classList.toggle('toggle')
})

