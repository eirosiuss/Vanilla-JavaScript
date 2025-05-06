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
let nameThree = parseInt(prompt('Enter your name: '))
console.log(nameThree);
