console.log('For loop================================');
for (let index = 1; index <= 5; index++) {
    console.log('For loop');
    console.log(index);
}

console.log('Multiplication Table---------------');
let number = 5;

for (let index = 1; index <= 10; index++) {
    let result = number * index;
    console.log(number+ 'x'+ index+ '='+ result);
}

console.log('For in loop================================');
let student = {
    name: 'Monica',
    grade: 7,
    age: 12
}

for (let data in student) {
    console.log(`${data} => ${student[data]}`);
}

console.log('For of loop================================');
let students = ['John', 'Sara', 'Jack']
for (let data of students) {
    console.log(data);
}

let language = 'JavaScript';

for (let character of language) {
    console.log(character);
}

console.log('---------------------');
for (let index = 1; index <= 100; index++) {
    if (index % 2 == 0) {
        console.log(index);
        
    }
}
