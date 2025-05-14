let analyzeButton = document.querySelector('#analyze-button')

let clearButton = document.querySelector('#clear-button')
clearButton.style.display = 'none'

let text = document.querySelector('#analyze-text')

let error = document.querySelector('#error')

let words = document.querySelector('#words')

let characters = document.querySelector('#characters')

analyzeButton.addEventListener('click', () => {

    if (text.value === '') {
        error.style.display = 'block'
        error.style.color = 'red'
    } else if (text.value !== '') {
        words.style.display = 'block'
        characters.style.display = 'block'
        error.style.display = 'none'

        words.firstElementChild.textContent = text.value.replace(/[^a-zA-Z\s]/g, '').trim().split(/\s+/).filter(w => w).length

        characters.firstElementChild.textContent = text.value.length

        clearButton.style.display = 'block'
    }
})

clearButton.addEventListener('click', () => {
    text.value = ''
    clearButton.style.display = 'none'
    words.style.display = 'none'
    characters.style.display = 'none'
})