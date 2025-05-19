console.log('break================================');
for (let index = 1; index <= 5; index++) {
    console.log(index);
    break
}

console.log('----------------------');
for (let index = 1; index <= 5; index++) {
    if (index == 3) {
        break
    }
    console.log(index);
}

console.log('----------------------');
// while (true) {
//     let number = parseFloat(prompt('Enter a number: '))
//     if(number < 0) {
//         break
//     }
//     console.log(number);
// }

console.log('continue================================');
for (let index = 1; index <= 5; index++) {
    if (index == 3) {
        continue
    }
    console.log(index);
}

console.log('----------------------');
// while (true) {
//     let number = parseFloat(prompt('Enter a number: '))
//     if (number < 0) {
//         break
//     }
//     if (number % 2 != 0) {
//         continue
//     }
//     console.log(number);
// }