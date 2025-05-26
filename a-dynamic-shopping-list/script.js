const list = document.querySelector('ul')
// console.log(list);

const item = document.querySelector('#item')
// console.log(item);

const button = document.querySelector('button')
// console.log(button);




button.addEventListener('click', () => {
    const value = item.value
    item.value = ''

    const listItem = document.createElement('li')

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'

    const span = document.createElement('span')
    span.textContent = value

    list.appendChild(listItem)
    listItem.appendChild(span)
    listItem.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', () => {
        listItem.remove()
        document.querySelector('#item').focus({ focusVisible: true });
    })

    document.querySelector('#item').focus({ focusVisible: true });
});





