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

console.log('---------------------');
// Raskite visų skaičių nuo 1 iki 100 sumą.
sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(sum);

console.log('---------------------');
// Raskite visų lyginių skaičių nuo 20 iki 50 sumą.
sum = 0
for (let i = 20; i <= 50; i++) {
    if (i % 2 == 0) {
        sum += i
    }
}
console.log(sum);

console.log('---------------------');
// Raskite visų nelyginių skaičių nuo 30 iki 60 sumą.
sum = 0
for (let i = 30; i <= 60; i++) {
    if (i % 2 != 0) {
        sum += i
    }
}
console.log(sum)

console.log('---------------------');
// Rasti visų skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5, sumą. Pavyzdys:
// 	Visi skaičiai mažesni už 10 ir kurie dalinasi iš 3 arba 5 yra: 3, 5, 6, 9.
// 	Šių skaičių suma yra 23.
// Turite gauti 233168 atsakymą.
sum = 0
for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum += i
    }
}
console.log(sum);


console.log('---------------------');
// The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:

// "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

console.log('---------------------');
// (sunkesnė) Parašyti for ciklą, kuris išvestų norimą kiekį fibonačiaus skaičių į ekraną. Fibonačiaus sekoje kiekvienas skaičius yra lygus prieš jį ėjusių dviejų skaičių sumai: 1, 1, 2, 3, 5, 8, 13, 21…
// Susikurkite tris sveikųjų skaičių kintamuosius, kurie jums padės tai pasiekti.
// Pirmi du kintamieji saugos paskutinius du skaičius.
// Trečiasis bus šių pirmų dviejų skaičių suma.
// Pirmus du skaičius išveskite ne cikle, o prieš jį ir ciklą pradėkite vykdyti nuo 2, o ne nuo 0.
// Kiekvieno ciklo metu turite perskaičiuot trečiąjį skaičių (pirmų dviejų skaičių sudėtis), tuomet pirmasis skaičius yra lygus antram, o antrasis lygus trečiam, išvesti į ekraną trečią skaičių.

one = 1
two = 1
sum = 0
console.log(one);
console.log(two);

for (let i = 2; i < 10; i++) {
sum = one + two
one = two
two = sum
console.log(sum);
}