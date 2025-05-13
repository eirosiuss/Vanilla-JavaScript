let fontSize = document.querySelector('#font-size')
console.log(fontSize);
fontSize.valueAsNumber = 16

let btnNormal = document.querySelector('#btn-normal')
// console.log(btnNormal);

let btnBold = document.querySelector('#btn-bold')
// console.log(btnBold);

let btnItalic = document.querySelector('#btn-italic')
// console.log(btnItalic);

let paragraph = document.querySelector('#paragraph')
console.log(paragraph);

fontSize.addEventListener('input', () => {
    console.log(fontSize.valueAsNumber);
    console.log(paragraph.style.fontSize);


    if (fontSize.valueAsNumber < 0 ) {
        alert('Only positive numbers')
        fontSize.valueAsNumber = 16

    } else if (fontSize.valueAsNumber > 0) {
        paragraph.style.fontSize = fontSize.valueAsNumber + 'px'
    }
})

let button = document.querySelectorAll('button')
// console.log(button);

button.forEach(btn => {
// console.log(btn);
btn.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active')
    
    if (btnBold) {
        console.log(btnNormal);
        
        paragraph.style.fontStyle = 'normal'
        paragraph.style.fontWeight = ''
        btn.classList.add('active')

    } else if (btnNormal) {
        paragraph.style.fontStyle = ''
        paragraph.style.fontWeight = '700'
        btn.classList.add('active')
    }
})
})
