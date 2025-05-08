console.log('Boolean Expression================================');
let value1 = true;
let value2 = false;
let value3 = 'true';
let value4 = 'false';

console.log(value1);
console.log(value2);

console.log(typeof(value1));
console.log(typeof(value2));

console.log(typeof(value3));
console.log(typeof(value4));

console.log('Comparison Operators================================');
console.log('8>5');
console.log(8>5);

console.log('3>5');
console.log(3>5);

console.log('3<5');
console.log(3<5);

console.log('5<5');
console.log(5<5);

console.log('5>=5');
console.log(5>=5);

console.log('5<=5');
console.log(5<=5);

console.log('5==5');
console.log(5==5);

console.log('"5"==5');
console.log('5'==5);

console.log('5!=5');
console.log(5!=5);

console.log('6!=5');
console.log(6!=5);

console.log('"5"===5');
console.log('5'===5);

console.log('"5"!==5');
console.log('5'!==5);

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