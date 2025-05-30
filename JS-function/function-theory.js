console.log('-------------------------------');

function greet() {
    console.log('Hello there');
}

greet()

console.log('Function arguments-------------------------------');
function greetName(name) {
    console.log('Hello there ' + name);
}

greetName('Bob')

console.log('Passing Multiple Arguments-------------------------------');

function addNumbers(n1, n2) {
    let result = n1 + n2
    console.log('The sum is ' + result);
}

let numberOne = 6
let numberTwo = 2

addNumbers(numberOne, numberTwo)
addNumbers(1, 2)

console.log('Return Value from a Function-------------------------------');

function addNumbersResult(n1, n2) {
    let result = n1 + n2
    return result
}

let outputOne = addNumbersResult(numberOne, numberTwo)
let outputTwo = addNumbersResult(10, 20)
console.log('OutpuOne: ', outputOne);
console.log('OutpuTwo: ', outputTwo);

console.log('JavaScript Built-in Functions-------------------------------');

let num = 9
let squareRoot = Math.sqrt(num)
console.log(`Square root of ${num} is: `, squareRoot);

console.log('JavaScript Arrow Function-------------------------------');

const greetMorning = () => console.log('Good morning');
greetMorning()

console.log('------------');

const greetDay = () => {
    console.log('Good afternoon')
    console.log('How are you?')
}
greetDay()

console.log('Arrow function with parameters-------------------------------');

const add = (a, b) => console.log(a + b);
add(5, 9)

console.log('------------');

const square = a => console.log(a ** 2);
square(5)

console.log('Arrow Function with return statement-------------------------------');

const addNo = (a, b) => {
    const result = a + b
    return result
}
const outputThree = addNo(5, 9)
console.log(outputThree);
