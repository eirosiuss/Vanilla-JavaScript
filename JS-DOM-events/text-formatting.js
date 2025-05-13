let fontSize = document.querySelector('#font-size')
fontSize.valueAsNumber = 16

let paragraph = document.querySelector('#paragraph')

fontSize.addEventListener('input', () => {
    // panaikina raides ir simbolius
    fontSize.value = fontSize.value.replace(/[^0-9]/g, '');

    if (fontSize.valueAsNumber >= 1) {
        paragraph.style.fontSize = fontSize.valueAsNumber + 'px'
    } else if (fontSize.valueAsNumber === 0) {
        fontSize.valueAsNumber = 1
    }
})

let buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'))

        button.classList.add('active')
        if (button.id === 'btn-normal') {
            paragraph.style.fontWeight = '400'
            paragraph.style.fontStyle = 'normal'
        } else if (button.id === 'btn-bold') {
            paragraph.style.fontWeight = '700'
            paragraph.style.fontStyle = 'normal'
        } else {
            paragraph.style.fontWeight = '400'
            paragraph.style.fontStyle = 'italic'
        }
    })
})
