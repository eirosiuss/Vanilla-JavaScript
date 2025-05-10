console.log('While loop================================');
let count = 1;
while (count < 5) {
    console.log('Learning while loop');
    console.log(count);
    count += 1;
}

console.log('Creating Multiplication Table================================');
let number = 9;
let countOne = 1;

while (countOne <= 10) {
    let product = number * countOne;
    console.log(`${number} * ${countOne} = ${product}`);
    countOne += 1;
}

console.log('do While loop================================');
let countTwo = 6;
do {
    console.log(countTwo);
    countTwo += 1
} while (countTwo <= 5) {
}

console.log('--------------------------');
let countThree = 1;
let numberOne = 3;
do {
    let result = countThree * numberOne
    console.log(countThree + ' * ' + numberOne + ' = ' + result);
    countThree += 1
} while (countThree <= 10) {
}

console.log('--------------------------');
let numberTwo = 9;
let countFour = 10;

while (countFour >= 1) {
    let product = numberTwo * countFour;
    console.log(`${numberTwo} * ${countFour} = ${product}`);
    countFour -= 1;
}

console.log('sum--------------------------');
let n = 10;
let counter = 1;
let sum = 0;
while (counter <= n) {
    sum+=counter
    // console.log(sum);
    counter += 1
}
console.log(sum);

console.log('factorial--------------------------');
let numberF = 5;
let counterF = numberF;
let factorial = 1;
while (counterF >= 1) {
    factorial*=counterF
    console.log(factorial);
    counterF--    
} 
console.log(factorial);

console.log('fibonacci sequence--------------------------');
let counterFS = 1;
let numberFS = 7;
let zero = 0;
let one = 1;
while (counterFS <= numberFS) {
    console.log(zero);
    let next = zero + one
    zero = one
    one = next
counterFS++
}

console.log('even--------------------------');

let countE = 2;
while (countE <= 10) {
    console.log(countE);
    countE += 2;
}

console.log('reverse--------------------------');
let countR = 10;
while (countR >= 1) {
    console.log(countR);
    countR -=1
}

console.log('multiply--------------------------');
let countM = 1;
let multiply = 1
while (multiply < 1000) {
    multiply = multiply * 2
    console.log(multiply);
    countM +=1
}