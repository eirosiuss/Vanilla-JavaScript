let routine = ['eat', 'sleep']
console.log(routine);

let numbers = [2, 3, 5, 7]
console.log(numbers);

let arr = ['eat', 'sleep', 3, 5, 'run']
console.log(arr);

let hello = ['h', 'e', 'l', 'l', 'o']
console.log(hello[0], hello[1], hello[2], hello[3], hello[4]);

console.log(hello.length);

routine[1] = 'drink'
console.log(routine);

// removes last element
console.log('removes last element');
console.log(routine);
routine.pop()
console.log(routine);

// removes first element
console.log('removes first element');
console.log(routine);
routine.shift()
console.log(routine);

// creates new array
console.log('creates new array');
routine = new Array('drink', 'sit')
console.log(routine);

console.log('fruits');
let fruits = ['apple', 'orange', 'mango']

// inserts at the end
console.log('inserts at the end');
console.log(fruits);
fruits.push('pineapple')
console.log(fruits);

// inserts at the beginning
console.log('inserts at the beginning');
console.log(fruits);
fruits.unshift('kiwi')
console.log(fruits);

// combines arrays
console.log('combines arrays');
let arrayOne = ['Hello', 'World']
console.log(arrayOne);
let arrayTwo = ['JavaScript', 'Programming']
console.log(arrayTwo);
let result = arrayOne.concat(arrayTwo)
console.log(result);

// sorts alphabethically
console.log('sorts alphabethically');
fruits = ['apple', 'papaya', 'mango', 'kiwi']
console.log(fruits);

fruits.sort()
console.log(fruits);

// slice all or copy all
console.log('slice all or copy all');
fruits = ['apple', 'papaya', 'mango', 'kiwi']
console.log(fruits);
let newFruits = fruits.slice()
console.log(newFruits);

// slice first two or copy first two
console.log('slice first two or copy first two');
console.log(fruits);
newFruits = fruits.slice(0, 2)
console.log(newFruits);

// splice, removes elements and inserts new elements
console.log('splice removes elements and inserts new elements');
fruits = ['apple', 'papaya', 'mango', 'kiwi']
console.log(fruits);
fruits.splice(0, 2, 'banana')
console.log(fruits);

// includes
console.log('includes');
fruits = ['apple', 'papaya', 'mango', 'kiwi']
result = fruits.includes('papaya')
console.log(result);

// finds value of the first element
console.log('finds value of the first element');
numbers = [2, 3, 5, 7]
result = numbers.find(number => number > 5
)
console.log(result);

console.log('---------------------');
// Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame masyve yra narių.
let vegetables = ["carrot", "broccoli", "spinach", "potato", "cucumber"];
console.log(vegetables[0]);
console.log(vegetables[vegetables.length - 1]);
console.log(vegetables[2], vegetables[3]);
console.log(vegetables.length);

console.log('---------------------');
// Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite pakeisto masyvo informaciją.
vegetables = ["carrot", "broccoli", "spinach", "potato", "cucumber"];
console.log(vegetables);
vegetables[2] = 'tomato'
console.log(vegetables);

console.log('---------------------');
// Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.
vegetables = []
console.log(vegetables);
vegetables.push("zucchini", "eggplant", "radish")
console.log(vegetables);

console.log('---------------------');
// Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais skaičiais. Išveskite šio masyvo informaciją.
numbers = []

for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 100)
    numbers.push(number)
}
console.log(numbers);

console.log('---------------------');
// Sukurkite du masyvus dviejų studentų pažymiams saugoti. Įveskite po 3-5 pažymius kiekvienam studentui (iškart kuriant masyvus arba per push funkciją). Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio studento vidurkis didesnis ir išveskite atsakymą.

let student1Grades = [8, 9, 7, 10]
let student2Grades = [6, 7, 9, 8, 10]

sum = 0
for (let index = 0; index < student1Grades.length; index++) {
    sum += student1Grades[index]
}
// console.log(sum)   

let average1 = sum / student1Grades.length
console.log(average1);

sum = 0
for (let index = 0; index < student2Grades.length; index++) {
    sum += student2Grades[index]
}
// console.log(sum)   

let average2 = sum / student2Grades.length
console.log(average2);

console.log(average1 > average2 ? 'pirmo studento' : 'antro studento');

console.log('---------------------');
// Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.
const studyPrograms = [
    "Computer Science",
    "Business Management",
    "Biology",
    "Law",
    "Psychology",
    "Medicine",
    "Architecture",
    "Mechanical Engineering"
];

for (let i = 0; i < studyPrograms.length; i++) {
    console.log(studyPrograms[i])
}

console.log('---------------------');
// Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis. Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada nurodant šalį iš masyvo.
const countries = [
    "Lithuania",
    "France",
    "Germany",
    "Japan",
    "Canada",
    "Brazil",
    "Australia",
    "Norway"
]

for (let i = 0; i < countries.length; i++) {
    console.log('Salis: ' + countries[i])
}

console.log('---------------------');
// Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).
const completedProjects = [
    "Website Redesign",
    "Mobile App Development",
    "E-commerce Platform",
    "CRM Integration",
    "Social Media Campaign",
    "Data Analysis Tool",
    "Cloud Migration",
    "Cybersecurity Audit"
]
for (let i = 0; i < completedProjects.length; i++) {
    console.log(i + 1, completedProjects[i]);
}

console.log('---------------------');
// Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.
numbers = [5, 12, 23, 7, 18, 3, 42, 9]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(numbers[i]);
    }
}

console.log('---------------------');
// Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite visų skaičių, kurie dalinasi iš 4 sumą.
const randomNumbers = []
sum = 0
for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    randomNumbers.push(randomNum);

    if (randomNum % 4 == 0) {
        // console.log(randomNum);
        sum += randomNum
    }
}
console.log(randomNumbers);
console.log(sum);

console.log('---------------------');
// Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.
let grades = [];
sum = 0
for (let i = 0; i < 5; i++) {
    const randomGrade = Math.floor(Math.random() * 10) + 1;
    grades.push(randomGrade);

    sum += randomGrade
}

console.log('grades:', grades, 'average: ', sum / grades.length);

console.log('---------------------');
// Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.
grades = [];
sum = 0
for (let i = 0; i < 5; i++) {
    const randomGrade = Math.floor(Math.random() * 10) + 1;
    grades.push(randomGrade);
    sum += randomGrade
}

// console.log('grades:', grades, 'average: ', sum / grades.length);

for (let i = 0; i < grades.length; i++) {
    if (grades[i] > sum / grades.length) {
        console.log('larger than average: ', grades[i]);
    }
}

console.log('---------------------');
// Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo kvadratą.
numbers = [3, 7, 12, 5, 9, 20]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] % 2 == 0 ? `${numbers[i]} ${numbers[i] ** 2}` : numbers[i])
}

console.log('---------------------');
// Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis (atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 4 balai.
let studentGrades = [1, 9, 3, 10, 7, 2, 4]
for (let i = 0; i < studentGrades.length; i++) {
    if (studentGrades[i] >= 4) {
        console.log(studentGrades[i], 'positive');
    } else {
        console.log(studentGrades[i], 'negative, needed: ', 4 - studentGrades[i], 'points');
    }
}

console.log('---------------------');
// Susikurkite žodžių masyvą ir užpildykite duomenimis. Išveskite visus žodžius ekrane, nurodant iš kiek raidžių kiekvienas šis žodis yra sudarytas. Papildykite skriptą taip, kad rastumėte visų raidžių kiekį (pvz yra žodžiai "medis" ir "alus", 5 ir 4 raidės atitinkamai, o jas sudėjus gaunasi 9 raidės).
const words = ["apple", "banana", "school", "javascript", "sun", "mountain"]
sum = 0
for (let i = 0; i < words.length; i++) {
    console.log(words[i], words[i].length)
    sum += words[i].length
}
console.log(sum)

console.log('---------------------');
// Susikurkite skaičių masyvą ir užpildykite duomenimis. Raskite visų skaičių, kurie dalinasi iš 3 sumą ir vidurkį. Išveskite pradinius duomenis ir gautus atsakymus.
numbers = [3, 7, 12, 5, 9, 20]
sum = 0
let count = 0
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 == 0) {
        
        sum += numbers[i]
        // console.log(numbers[i])
        count++
        // console.log(count);
        
    }

}
console.log(numbers)
console.log(sum)
console.log('Average: ', (sum / count));


