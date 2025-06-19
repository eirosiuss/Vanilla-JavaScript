let divs = document.querySelectorAll('div')
// console.log(div);

divs.forEach(div => {
    // console.log(div);
    div.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active')
        div.classList.add('active')
    })
})

// const blocks = document.querySelectorAll('div');

// blocks.forEach(block => {
//     block.addEventListener('click', () => {
//         document.querySelectorAll('.active').forEach(activeBlock => {
//             activeBlock.classList.remove('active');
//         });
//         block.classList.add('active');
//     });
// });