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

console.log('1================================');
// Susikurkite tris kintamuosius skaičiams saugoti. Parašykite šias atskiras if sąlygas:
// Ar pirmas ir antras skaičiai yra lygūs?
// Ar antras ir trečias skaičiai yra lygūs?
// Ar pirmas skaičius yra didesnis už antrąjį?
// Ar antras skaičius yra didesnis už dvigubą trečiojo skaičiaus reikšmę (trečias skaičius padaugintas iš 2)?
// Ar pirmas skaičius yra lyginis (ar dalinasi iš 2)?
// Ar antras skaičius yra nelyginis (ar nesidalina iš 2)?
// Ar trečias skaičius yra teigiamas (didesnis už 0)?
// Ar pirmas skaičius yra neigiamas (mažesnis už 0)?
// Ar antras skaičius dalinasi iš 4 be liekanos?
// Ar trečias skaičius dalinasi iš 8 be liekanos?

let noOne = 2;
let noTwo = 3;
let noThree = 4;

console.log(noOne == noTwo ? 'lygus' : 'nelygus');
console.log(noTwo == noThree ? 'lygus' : 'nelygus');
console.log(noOne > noTwo ? 'didesnis' : 'mažesnis');
console.log(noTwo > noThree * 2 ? 'didesnis' : 'mažesnis');
console.log(noOne % 2 === 0 ? 'lyginis' : 'nelyginis');
console.log(noTwo % 2 !== 0 ? 'nelyginis' : 'lyginis');
console.log(noThree > 0 ? 'teigiamas' : 'neigiamas');
console.log(noOne < 0 ? 'teigiamas' : 'neigiamas');
console.log(noTwo % 4 === 0 ? 'dalinasi' : 'nesidalina');
console.log(noThree % 8 === 0 ? 'dalinasi' : 'nesidalina');

console.log('2================================');
// Susikurkite kintamąjį vartotojo amžiui saugoti. Patikrinkite ar amžius yra didesnis arba lygus 18-ai, jei taip - išveskite “jūs galite balsuoti”.
let adult = 17;
console.log(adult >= 18 ? 'balsuojate' : 'nebalsuojate');


console.log('3================================');
// Susikurkite kelis kintamuosius saugoti pažymiams. Raskite šių pažymių vidurkį. Patikrinkite ar vidurkis teigiamas (daugiau arba lygu 4-iems), jei taip - išveskite “vidurkis teigiamas”.
let mark1 = 3;
let mark2 = 4;
let mark3 = 4;

console.log(((mark1 + mark2 + mark3) / 3) >= 4 ? 'teigiamas' : 'neigiamas');

console.log('4================================');
// Susikurkite skaičiaus kintamąjį. Atlikite šiuos patikrinimus ir veiksmus:
// Jei skaičius dalinasi iš 5, tuomet išveskite šio skaičiaus daugybos lentelę nuo 1 iki 5.
// Jei skaičius lyginis, tuomet išveskite šį skaičių, jo kvadratą ir jį padalintą iš 2.
// Jei skaičius nesidalina iš 7, tuomet susikurkite antrąjį kintamąjį, išveskite šių dviejų skaičių sumą, skirtumą, sandaugą, dalmenį.

let noFour = 5;

if (noFour % 5 === 0) {
    console.log(
    '1 x ' + noFour + ' =', 1 * noFour, '\n' +
    '2 x ' + noFour + ' =', 2 * noFour, '\n' +
    '4 x ' + noFour + ' =', 3 * noFour, '\n' +
    '5 x ' + noFour + ' =', 5 * noFour, '\n'
)
}

if (noFour % 2 === 0) {
    console.log(noFour, noFour * noFour, noFour / 2)
}

if (noFour % 7 !== 0) {
    let noFive = 2;
    console.log(noFour + noFive, noFour - noFive, noFour * noFive, noFour / noFive); 
}