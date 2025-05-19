console.log('For loop================================');
for (let index = 1; index <= 5; index++) {
    console.log('For loop');
    console.log(index);
}

console.log('Multiplication Table---------------');
let number = 5;

for (let index = 1; index <= 10; index++) {
    let result = number * index;
    console.log(number + 'x' + index + '=' + result);
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

console.log('---------------------');
// Parašyti for, kuris išvestų kiekvieną skaičių pradedant nuo 0 ir baigiant 10. 
for (let index = 0; index <= 10; index++) {
    console.log(index);
}

console.log('---------------------');
// Parašyti for, kuris išvestų kas antrą skaičių pradedant 0 ir baigiant 15.
for (let index = 0; index <= 15; index += 2) {
    console.log(index)
}

console.log('---------------------');
// Parašyti for, kuris išvestų kas trečią skaičių, pradedant 1 ir baigiant 20. Kiekvieną skaičių apskliausti laužtiniais skliaustais. Pvz.: [1][4][7]...
for (let i = 1; i <= 20; i += 3) {
    console.log(`[${i}]`);
}

console.log('---------------------');
// Parašyti for, kuris eitų pro kiekvieną skaičių nuo 1 iki 20. Jame apsirašyti if sąlygą, kuri patikrintų ar dabartinis skaičius dalinasi iš 4, jei taip tai šį skaičių išvesti.
for (let i = 1; i <= 20; i++) {
    if (i % 4 == 0) {
        console.log(i);
    }
}

console.log('---------------------');
// Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet vykdyti for, kuris atskirose eilutėse išvestų kiekvieną skaičių iš tų rėžių, bei atskiriant tarpu - tų skaičių kvadratus.

let numberOne = 2
let numberTwo = 10

if (numberOne < numberTwo) {
    for (let i = numberOne; i < numberTwo; i++) {
        console.log(i, i * i);
    }
}

console.log('---------------------');
// Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet vykdyti for, kuris iš duotų skaičių išvestų visus nelyginius skaičius arba tuos, kurie dalinasi iš 8.
let numberThree = 1
let numberFour = 18

if (numberThree < numberFour) {
    for (let i = numberThree; i < numberFour; i++) {
        if (i % 2 != 0 || i % 8 == 0) {
            console.log(i);
        }
    }
}

console.log('---------------------');
// (papildomai, sunkiau) Be daugybos veiksmo programoje, sudauginti du skaičius.
let one = 3
let two = 10
let sum = 0

for (let i = 0; i < two; i++) {
    sum += one
    // console.log(sum);
}
console.log(sum);