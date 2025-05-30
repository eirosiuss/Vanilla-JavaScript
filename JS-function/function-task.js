// Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote programavimą. Iškvieskite šią funkciją tris kartus.
function programming() {
    console.log('Kestutis');
    console.log('I like it');
}
programming()


console.log('--------------------------');
// Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5 kartus.
function poem() {
    console.log("Lietus tyliai barbena į stogą,");
    console.log("Medžių šakos šnara sapne.");
    console.log("Vėjas neša rudens ilgesį,");
    console.log("Debesys slenka lėtai aukštai,");
    console.log("Ir širdyje sušvinta ramybė.");
}
poem()


console.log('--------------------------');
// Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite visas tris funkcijas po vieną kartą.
function who() {
    console.log('I');
}

function like() {
    console.log('like');
}

function what() {
    console.log('running');
}

who()
like()
what()

console.log('--------------------------');
// Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutėje, kitoje kita. Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią trečiąją funkciją už visų funkcijų ribų.
function firstRow() {
    console.log('Lietus tyliai barbena į stogą,');
}

function secondRow() {
    console.log('Medžių šakos šnara sapne.');
}

function firstAndSecond() {
    firstRow()
    secondRow()
}

firstAndSecond()

console.log('--------------------------');
// Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius. Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą, kartu išvedant ir patį atliekamą veiksmą (pvz 7 + 2 = 9). Iškvieskite šią funkciją keletą kartų.
function calc() {
    let number1 = Math.floor(Math.random() * 10)
    let number2 = Math.floor(Math.random() * 10)

    console.log(`${number1} + ${number2} = ${number1 + number2}`);
}

calc()
console.log('--------------------------');
// Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma informacija apie policininką (vardas, pavardė, amžius, alga, etatas, specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite į sakinį, ar išveskite sąrašu ar pan.).

function officer() {
    let firstName = "Jonas";
    let lastName = "Petraitis";
    let age = 35;
    let salary = 1500.50;
    let workload = 1.0; // full-time
    let specialization = "Detective";

    console.log(firstName, lastName, age, salary, workload, specialization);
}

officer()

console.log('--------------------------');
// Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje, skaičius atskiriant tarpu. Šią funkciją iškvieskite 5 kartus.
function random10() {
    let array = []
    for (let i = 0; i < 10; i++) {
        let number10 = Math.floor(Math.random() * 10)
        array.push(number10);
    }
    console.log(array.join(' '));
}
random10()

console.log('--------------------------');
// Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių.

function random() {
    let number = Math.floor(Math.random() * 10)
    console.log(number);

}

for (let i = 0; i < 10; i++) {
    random()
}
console.log('--------------------------');
// Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 'viso gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms.
function greet(name) {
    console.log('Hello', name);
}

function goodbye(name) {
    console.log('Goodbye', name);
}

let name = 'Paulina'

greet(name)
goodbye(name)

console.log('--------------------------');
// Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs - tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų, duodant skirtingus skaičius.


function larger(a, b) {
    if (a > b) {
        console.log(a, '>', b);
    } else if (a < b) {
        console.log(a, '<', b);
    } else {
        console.log(a, '=', b);
    }
}

larger(1, 2)
larger(4, 3)
larger(5, 5)

console.log('--------------------------');
// Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė, modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant skirtingus duomenis jai.
function vehicle(brand, model, year, engine) {
    console.log(brand, model, 'made in', year, engine, 'l');
}

vehicle('Audi', 'A4', '1999', '2.5')

console.log('--------------------------');
// Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas, perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą kartų.
function sum(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

function subtract(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
}

function multiply(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
}

function divide(a, b) {
    console.log(`${a} / ${b} = ${a / b}`);
}

function randomNo() {
    let numberOne = Math.floor(Math.random() * 10)
    let numberTwo = Math.floor(Math.random() * 10)

    sum(numberOne, numberTwo)
    subtract(numberOne, numberTwo)
    multiply(numberOne, numberTwo)
    divide(numberOne, numberTwo)
}

randomNo()

console.log('--------------------------');
// Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.
function words(array) {
    array.forEach(element => {
        console.log(element, element.length);
    });
}

const wordsArray = ["apple", "pear", "banana", "cherry", "orange"]
words(wordsArray)

console.log('--------------------------');
// Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.
function numbers(array) {
    array.forEach(element => {
        console.log(element, element * element, element / 2);
    })
}

const numbers1 = [5, 10, 15, 20, 25];
const numbers2 = [2, 4, 6, 8, 10];

numbers(numbers1)
console.log('----------');
numbers(numbers2)

console.log('--------------------------');
// Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba objektus studentų pažymiams saugoti ir užpildykite juos duomenimis. Iškvieskite šią funkciją perduodant visus reikalingus duomenis.
function studies(marks, name, surname) {
    let avg = marks.reduce((a, b) => a + b, 0) / marks.length

    console.log(name, surname, marks.join(), avg);
}

const nameJ = 'John'
const surnameJ = 'Smith'
const marks = [10, 9, 8, 7, 10, 6, 5, 9];

studies(marks, nameJ, surnameJ)


console.log('--------------------------');
// Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat, susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus. Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti, masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.

function maxNumber(array) {
    // console.log(array.reduce((a, b) => Math.max(a, b)))
    let max = array.reduce((a, b) => (a > b ? a : b))
    console.log(array.join(), max);

}

function randomNumber(array, length) {
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 10) + 1)
    }
}

let arrayOne = []
let arrayTwo = []
let arrayThree = []

randomNumber(arrayOne, 20)
randomNumber(arrayTwo, 15)
randomNumber(arrayThree, 25)
console.log(arrayOne);
console.log(arrayTwo);
console.log(arrayThree);

maxNumber(arrayOne)
maxNumber(arrayTwo)
maxNumber(arrayThree)


console.log('--------------------------');
// Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite šią funkciją ir išspausdinkite gautus rezultatus.
function sentence() {
    return 'Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį.'
    // return (
    //     'Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį.'
    // )
}

console.log(sentence());

console.log('--------------------------');
// Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių. Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu norite būdu.
function randomReturn() {
    return Math.floor(Math.random() * 10) + 1
}

// console.log(randomReturn())
let randomR = randomReturn()
console.log(randomR);

console.log('--------------------------');
// Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį. Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų, perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.
function studentAvg(name, avg) {
    return (
        `Student ${name} has ${avg}`
    )
}

console.log(studentAvg('John', 8));


console.log('--------------------------');
// Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje iškvieskite šią funkciją, perduodant ciklo kintamąjį.
function numberReturn(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return i
        }

    }
    return number
}

for (let i = 10; i <= 30; i++) {
    console.log(i, numberReturn(i))
}

console.log(numberReturn(7))
console.log('--------------------------');
// Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis). Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10 false, 11 true, ...).

function primary(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }

    }
    return true
}

for (let i = 2; i <= 15; i++) {
    console.log(i, primary(i))
}

console.log('--------------------------');
// Susikurkite bent 3 matematines funkcijas, priimančias reikiamus argumentus (pvz suma iš dviejų skaičių, suma iš trijų skaičių, skirtumas, sandauga, dalyba) ir grąžinančias atitinkamus atsakymus. Taip pat, susikurkite funkciją, kurioje būtų sugeneruojamas reikiamas kiekis atsitiktinių skaičių ir išvedami visų skaičiavimų atsakymai su veiksmais (iškviečiant atitinkamas kitas funkcijas ir perduodant reikiamus kintamuosius) (pagal 7 pavyzdį). Iškvieskite šią pagrindinę funkciją bent kartą.

function sumOfTwo(a, b) {
    return a + b;
}

function multiplyOfTwo(a, b) {
    return a * b;
}

function difference(a, b) {
    return a - b;
}

function twoRandom() {
    let randomOne = Math.floor(Math.random() * 10) + 1
    let randomTwo = Math.floor(Math.random() * 10) + 1
    console.log(sumOfTwo(randomOne, randomTwo));
    console.log(multiplyOfTwo(randomOne, randomTwo));
    console.log(difference(randomOne, randomTwo));

}

twoRandom()

console.log('--------------------------');
// Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite. Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.
function numberArray(array) {
    return array.reduce((a, b) => a + b, 0)
}

let numbersOne = [2, 4, 6, 8, 10];
let numbersTwo = [1, 3, 5, 7, 9];

console.log(numberArray(numbersOne))
console.log(numberArray(numbersTwo))
console.log(numberArray(numbersOne) > numberArray(numbersTwo) ? 'first' + numberArray(numbersOne) : 'second' + numberArray(numbersTwo));


console.log('--------------------------');
// Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą. Ji turėtų rasti ir grąžinti ilgiausią žodį masyve. Už funkcijos ribų susikurkite žodžių masyvą. Iškvieskite funkciją perduodant jai žodžių masyvą. Gautą atsakymą išveskite, taip pat, nurodykite šio žodžio ilgį.


// Vienas parametras
const wordsArr = array => {
        let longest = array.reduce((a, b) => a.length > b.length ? a : b)
        return `${longest} ${longest.length}`
    
    }
    
    const wordsA = ['katė', 'šuo', 'obuolys', 'kompiuteris', 'mokykla']

console.log(wordsArr(wordsA));

console.log('--------------------------')
// Du parametrai
const sumN = (a, b) => {
  return a + b
}
console.log(sumN(3, 5)); 

console.log('--------------------------')
// Be {} skliaustu
const multiplyN = (a, b) => a * b
console.log(multiplyN(4, 6));

console.log('--------------------------')
// be parametrų
const greetB = () => {
  console.log("Sveikas!")
}
greetB()