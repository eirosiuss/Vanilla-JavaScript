let div = document.querySelectorAll('div')
// console.log(div);

div.forEach(div => {
    // console.log(div);
    div.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active')
        div.classList.add('active')
    })
})