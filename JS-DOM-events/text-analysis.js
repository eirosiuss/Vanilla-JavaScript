let analyzeButton = document.querySelector('#analyze-button')

let text = document.querySelector('#analyze-text')

let words = document.querySelector('#words')

let characters = document.querySelector('#characters')

analyzeButton.addEventListener('click', () => {
    words.style.display = 'block'
    characters.style.display = 'block'

    words.firstElementChild.textContent = text.value.trim().split(/\s+/).filter(w => w).length

    characters.firstElementChild.textContent = text.value.length

})