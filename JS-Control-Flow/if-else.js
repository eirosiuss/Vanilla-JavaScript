console.log('if...else Statement================================');
let score = 60;
if (score >= 50) {
    console.log('You have passed');
}

console.log('------------------');
score = -20;
if (score < 50) {
    console.log('Sorry, you failed');
}

console.log('------------------');
if (score >= 50) {
    console.log('You have passed');
} else {
    console.log('Sorry, you failed');
}

console.log('else if Statement================================');
if (score > 100 || score < 0) {
    console.log('Score is invalid');
} else if (score >= 50) {
    console.log('You have passed');
} else {
    console.log('Sorry, you failed');
}

console.log('------------------');
let number = 12
if (number > 0) {
    console.log('positive');
} else if (number < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

console.log('Ternary operator================================');
let age = 15;
(age >= 18) ? console.log('Can vote') : console.log('Cannot vote');

result = (age >= 18) ? 'Can vote' : 'Cannot vote';
console.log(result);

console.log('------------------');
(number > 0) ? console.log('Positive') : console.log('negative');

console.log('Switch Statement================================');
let numberOne = 3

switch (numberOne) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid');
        break;
}

console.log('------------------');
switch (numberOne) {
    case 1:
        console.log('Monday');
    case 2:
        console.log('Tuesday');
    case 3:
        console.log('Wednesday');
    case 4:
        console.log('Thursday');
    case 5:
        console.log('Friday');
    case 6:
        console.log('Saturday');
    case 7:
        console.log('Sunday');
    default:
        console.log('Invalid');
}

console.log('------------------');
let day = 'Monday'
switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('Weekday');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Weekend');
    default:
        console.log('Invadid');
        break;
}

console.log('Simple Calculatort================================');
// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let resultOne;
// switch (operator) {
//     case '+':
//         resultOne = number1 + number2;
//         break;
//     case '-':
//         resultOne = number1 - number2;
//         break;
//     case '*':
//         resultOne = number1 * number2;
//         break;
//     case '/':
//         resultOne = number1 / number2;
//         break;

//     default:
//         console.log('Invalid operator');
// }
// console.log(`${number1} ${operator} ${number2} = ${resultOne}`);

let month = 3

switch (month) {
    case 1:
        console.log('Jan');
        break;
    case 2:
        console.log('Feb');
        break;
    case 3:
        console.log('Mar');
        break;
    case 4:
        console.log('Apr');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('Jun');
        break;
    case 7:
        console.log('Jul');
        break;
    case 8:
        console.log('Aug');
        break;
    case 9:
        console.log('Sep');
        break;
    case 10:
        console.log('Oct');
        break;
    case 11:
        console.log('Nov');
        break;
    case 12:
        console.log('Dec');
        break;
    default:
        console.log('Invalid');
        break;
}