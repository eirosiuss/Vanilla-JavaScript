console.log('Boolean Expression================================');
let value1 = true;
let value2 = false;
let value3 = 'true';
let value4 = 'false';

console.log(value1);
console.log(value2);

console.log(typeof (value1));
console.log(typeof (value2));

console.log(typeof (value3));
console.log(typeof (value4));

console.log('Comparison Operators================================');
console.log('8>5');
console.log(8 > 5);

console.log('3>5');
console.log(3 > 5);

console.log('3<5');
console.log(3 < 5);

console.log('5<5');
console.log(5 < 5);

console.log('5>=5');
console.log(5 >= 5);

console.log('5<=5');
console.log(5 <= 5);

console.log('5==5');
console.log(5 == 5);

console.log('"5"==5');
console.log('5' == 5);

console.log('5!=5');
console.log(5 != 5);

console.log('6!=5');
console.log(6 != 5);

console.log('"5"===5');
console.log('5' === 5);

console.log('"5"!==5');
console.log('5' !== 5);

console.log('Comparison Between Variables================================');

let number1 = 5;
let number2 = 9;
let result = number1 < number2;
console.log(result);

result = number1 < 9;
console.log(result);

console.log('AND Operators================================');
console.log('&&');
let age = 18;
let height = 5.5;
let result1 = age >= 18 && height > 5;
console.log(result1);

result1 = age >= 18 && height < 5;
console.log(result1);

console.log('OR Operators================================');
console.log('||');
let result2 = age >= 18 || height < 5;
console.log(result2);

console.log('NOT Operators================================');
let height1 = 5.5;
let result3 = height < 6;
console.log(!result3);

result3 = height > 6;
console.log(!result3);

console.log('Type conversions================================');
let x1 = '8';
let y1 = 4;
let result4 = x1 + y1
console.log(result4);
console.log(typeof (result4));

x1 = 'hello';
result4 = x1 + y1
console.log(result4);

let result5 = '5' - '2';
let result6 = '5' - 2;
let result7 = '5' * 2;
let result8 = '5' / 2;
console.log(result5);
console.log(typeof (result5));

console.log(result6);
console.log(typeof (result6));

console.log(result7);
console.log(typeof (result7));

console.log(result8);
console.log(typeof (result8));

console.log('---------------------------');
let result9 = '4' - 'hello';
console.log(result9);

console.log('---------------------------');
let result10 = '4' - true;
console.log('true is 1');
console.log('"4" - true');
console.log(result10);

console.log('---------------------------');
let result11 = '4' + true;
console.log(result11);

console.log('---------------------------');
let result12 = 4 + false;
console.log('false is 0');
console.log('4 + false');
console.log(result12);

console.log('Explicit numeric conversions================================');
let result13 = Number('324');
console.log(result13);
console.log(typeof (result13));

console.log('---------------------------');
let result14 = Number(true);
console.log(result14);
console.log(typeof (result14));
console.log('---------------------------');
let result15 = Number(false);
console.log(result15);
console.log(typeof (result15));

console.log('Convert to String Explicitly================================');
let result16 = String(257);
console.log(result16);
console.log(typeof (result16));

console.log('---------------------------');
let result17 = (257).toString();
console.log(result17);
console.log(typeof (result17));

// Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra didžiausias.

let number9 = 5;
let number10 = 5;
let number11 = 5;

if (number9 > number10 && number9 > number11) {
    console.log('pirmas didziausias');
} else if (number10 > number9 && number10 > number11) {
    console.log('antras didziausias');
} else if (number11 > number9 && number11 > number10) {
    console.log('trecias didziausias');
} else {
    console.log('kita');
}

// Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra mažiausias.

if (number9 < number10 && number9 < number11) {
    console.log('pirmas maziausias');
} else if (number10 < number9 && number10 < number11) {
    console.log('antras maziausias');
} else if (number11 < number9 && number11 < number10) {
    console.log('trecias maziausias');
} else {
    console.log('kita');
}

// Susikurkite trijų egzaminų rezultatų kintamuosius. Suraskite pažymių vidurkį. Atlikite šiuos patikrinimus:
// ar gautas vidurkis yra [8-10];
// ar gautas vidurkis yra [5-8);
// ar gautas vidurkis yra < 5.

let average = (number9 + number10 + number11) / 3
if (average >= 8 && average <= 10) {
    console.log('[8-10]');
} else if (average >= 5 && average < 8) {
    console.log('[5-8]');
} else if (average > 0 & average < 5) {
    console.log('< 5');
} else {
    console.log('kita');
}


// Susikurkite du skaičius. Patikrinkite (naudojant 4 atskirus if’us):
// ar pirmas skaičius yra didesnis už antrąjį arba yra lygus 0;
// ar antras skaičius yra didesnis už pirmąjį arba yra lygus 5;
// ar pirmas skaičius yra didesnis už antrąjį ir yra lygus 20;
// ar antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100;


number10 = 20;
number11 = 21;
if (number10 > number11 || number10 === 0) {
 console.log('pirmas skaičius yra didesnis už antrąjį arba yra lygus 0');
}

if (number11 > number10 || number11 === 5) {
    console.log('antras skaičius yra didesnis už pirmąjį arba yra lygus 5');
}

if (number10 > number11 && number10 === 20) {
    console.log('pirmas skaičius yra didesnis už antrąjį ir yra lygus 20');   
}

if (number11 > number10 && number11 < 100) {
    console.log('antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100');
}