console.log('Hello world================================')
console.log("Hello world");

console.log('Strings================================')
console.log('One');
console.log("Two");
console.log(`Three`);

console.log('Numbers================================')
console.log(8);
console.log(80.5);

console.log('Variables================================')
let language = 'JavaScript';
console.log(language);

let number = 5;
console.log(number);

let name = 'Kestutis';
console.log(name);

name = 'Jonas';
console.log(name);;

let surname = 'Eirosius';
console.log(surname);

name = surname;
console.log(name);

const passportNumber = 45896;
console.log(passportNumber);

// passportNumber = 45325
// console.log(passportNumber);
// value cannot be changed

console.log('Undefined================================')
let animal ;
console.log(animal);

// const house;
// console.log(house);
// error

let fruit = 'apple';
console.log(fruit);

fruit = undefined;
console.log(fruit);

console.log('Variables and string in single line================================')

let city = 'Vilnius'
console.log('City:' + city);
console.log(`City:${city}`);

let kfcLocations = 10;
console.log('City: ' + city + ',' + ' KFC locations: ' + kfcLocations);
console.log(`City: ${city}, KFC locations: ${kfcLocations}`);

console.log('Input================================')
// const nameSecond = prompt('Enter your name: ');
// console.log('Hello', nameSecond);

console.log('Number input================================')
// const age = prompt('Enter your age: ');
// console.log('Hello, your age is:', age);
// console.log(typeof(age));

// const ageTwo = parseInt(prompt('Enter your age: '));
// console.log('Hello, your age is:', ageTwo);
// console.log(typeof(ageTwo));

const intValue = 5;
console.log(typeof(intValue));

const floatValue = 5.5;
console.log(typeof(floatValue));

console.log('Float input================================')
// const height = parseFloat(prompt('Enter your height: '));
// console.log('Hello, your age is:', height);
// console.log(typeof(height));

console.log('Error When Using paresInt() and parseFloat()================================')
// let nameThree = parseInt(prompt('Enter your name: '))
// console.log(nameThree);

console.log('Comments================================')
// program to print the comment
let comment = 'comment'
console.log('Comment: ' + comment);

console.log('Prevent Executing Code Using Comments================================')
// let comment = 'comment'
// console.log('Comment: ' + comment);

console.log('+ Addition Operator================================')
const x = 8.5;
const y = 4;
const result = x + y;
console.log(result);
console.log(x+y);

const text1 = 'JavaScript'
const text2 = 'Programming'
console.log(text1, text2);
console.log('JavaScript', 'Programming');

console.log('- Subtraction Operator================================')
const xS = 8;
const yS = 4;
const resultS = xS - yS;
console.log(resultS);

console.log('* Multiplication Operator================================')
const xM = 8;
const yM = 4;
const resultM = xM * yM;
console.log(resultM);

console.log('/ Division Operator================================')
const xD = 8;
const yD = 4;
const resultD = xD / yD;
console.log(resultD);

console.log('% Remainder Operator================================')
const xR = 8;
const yR = 7;
const resultR = xR % yR;
console.log(resultR);

console.log('++ Increment Operator================================')
let xI = 8;
console.log(++xI);
console.log(xI);
console.log(xI++);
console.log(xI);

console.log('-- Decrement Operator================================')
let xDe = 8;
console.log(--xDe);
console.log(xDe);
console.log(xDe--);
console.log(xDe);

console.log('** Exponentiation Operator================================')
let xE = 8;
const resultE = xE ** 2;
console.log(resultE);

console.log('Multiple Operator================================')
const resultMu = (4/2) + (3*5) - 1;
console.log(resultMu);

console.log('Practical Examples================================')
let tuition = 4535;
let discount = 10;
let payment = tuition - ((tuition * discount) / 100) ;
console.log(payment);

let kilometers = 5;
console.log((kilometers * 0.621371192).toFixed(2));

let celcius = 0 
let fahrenheit = celcius * 1.8 + 32
console.log(fahrenheit);
