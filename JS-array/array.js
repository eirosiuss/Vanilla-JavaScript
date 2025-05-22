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
let countries = [
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
let words = ["apple", "banana", "school", "javascript", "sun", "mountain"]
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

console.log('for of, for in---------------------');
console.log('---------------------');
// Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, …
words = [
    'hello', 'good', 'day', 'yes',
    'no', 'code', 'sun', 'happy',
    'food', 'love'
]

for (const word in words) {
    console.log(word, words[word]);
}

console.log('---------------------');
// Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.
let shoppingList = ["apples", "bread", "milk", "eggs", "cheese", "chicken", "rice", "tomatoes", "potatoes"]

console.log(shoppingList.length);

for (const item of shoppingList) {
    console.log('-', item);
}

console.log('---------------------');
// Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.
grades = [8, 7, 9, 10, 6, 5, 8]
sum = 0
for (const grade of grades) {
    console.log(grade);

    sum += grade
}
console.log((sum / grades.length).toFixed(2));

console.log('---------------------');
// Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus per dieną kilometrus, kurie yra didesni nei 150.
let kilometresPerDay = [170, 145, 90, 110, 135, 160, 195];
for (const element of kilometresPerDay) {
    if (element > 150) {
        console.log(element);
    }
}

console.log('---------------------');
// Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis. Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt arba .json tipo.
let fileNames = ["document.txt", "presentation.pptx", "photo.jpg", "report.pdf", "notes.json", "script.js", "style.css", "archive.zip"];

for (const name of fileNames) {
    if (name.endsWith('.txt') || name.endsWith('.json')) {
        console.log(name);
    }
}

console.log('---------------------');
// Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant kiek raidžių sudaro jo pavadinimą.
let carBrands = ["Toyota", "BMW", "Audi", "Mercedes", "Volkswagen", "Honda", "Ford", "Nissan", "Kia", "Hyundai"];
for (const car of carBrands) {
    console.log(car, car.length);
}

console.log('---------------------');
// Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui, taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.
let errorCodes = [404, 500, 403, 401];

for (const errorCode of errorCodes) {
    if (errorCode == 404)
        console.log('Not Found')
    else if (errorCode == 500)
        console.log('Internal Server Error')
    else if (errorCode == 403)
        console.log('Forbidden')
    else if (errorCode == 401)
        console.log('Unauthorized')
}

console.log('---------------------');
// Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės užteks maždaug 11 dienų ir t.t.
const stockQuantities = [120, 45, 78, 0, 250, 13, 89, 7, 34, 0];
for (const stock of stockQuantities) {
    console.log('Now we have: ', stock + '. It is enough for: ', (stock - (stock % 5)) / 5, 'days');
}

console.log('---------------------');
// Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas gavo (mažesnių nei 4). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų pažymių kiekį.
grades = []
sum = 0
for (let i = 0; i < 6; i++) {
    grades.push(Math.floor(Math.random() * 10) + 1
    )
}
console.log(grades);

let negative = 0
for (const grade of grades) {
    sum += grade
    if (grade < 4) {
        negative++
    }

    if (grade >= 4) {
        console.log('positive: ', grade);

    }
}
console.log('avg: ', (sum / 6).toFixed(2));
console.log('negative quantity: ', negative);

console.log('---------------------');
// Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir nurodykite kuris studentas turi didesnį vidurkį.
let sum1 = 0
student1Grades = [8, 5, 6, 10, 7, 9];
for (const grade of student1Grades) {
    sum1 += grade
    console.log(grade);
}
console.log(sum1 / student1Grades.length);

let sum2 = 0
student2Grades = [4, 3, 6, 5, 2, 7];
for (const grade of student2Grades) {
    sum2 += grade
    console.log(grade);
}
console.log(sum2 / student2Grades.length);

console.log(sum1 / student1Grades.length > sum2 / student2Grades.length ? 'first' : 'second');


console.log('---------------------');
// Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.

words = ["obuolys", "mėnulis", "žvaigždė", "saga", "upė"];
let shortWords = []
for (const word of words) {
    if (word.length < 5) {
        shortWords.push(word)
    }

}
console.log(words);
console.log(shortWords);


console.log('---------------------');
// Susikurkite masyvą, kuriame būtų pateikti mėgstamiausi valgiai. Pamėginkite masyvą papildyti informacija įvairiais būdais (pridėti naują valgį priekyje, gale, per vidurį, pasirinktoje vietoje). Pamėginkite ištrinti kažkuriuos 3 valgius (iš pasirinktų pozicijų, pvz, galo ir vidurio).
let favoriteFoods = ["Pizza", "Sushi", "Dumplings", "Spaghetti", "Cold beet soup"];
console.log("Initial list:", favoriteFoods);

// Add a new food to the beginning
favoriteFoods.unshift('Salads');
console.log("After unshift (added 'Salads' to the beginning):", favoriteFoods);

// Add a new food to the end
favoriteFoods.push('Steak');
console.log("After push (added 'Steak' to the end):", favoriteFoods);

// Add a food to the middle (at index 2, before 'Dumplings')
favoriteFoods.splice(2, 0, 'Cake');
console.log("After splice (inserted 'Cake' at index 2):", favoriteFoods);

// Remove the first element
favoriteFoods.shift();
console.log("After shift (removed the first element):", favoriteFoods);

// Remove the last element
favoriteFoods.pop();
console.log("After pop (removed the last element):", favoriteFoods);

// Remove an element from the middle (at index 3, 'Dumplings')
favoriteFoods.splice(3, 1);
console.log("After splice (removed element at index 3):", favoriteFoods);


console.log('---------------------');
// Susikurkite skaičių masyvą. Naudojant includes, patikrinkite ar masyve yra kuris nors pasirinktas skaičius (pvz 8).
numbers = [5, 12, 8, 20, 3, 15];
console.log("Number array:", numbers);

// Check if number 8 is in the array
console.log("Does the array include 8?", numbers.includes(8)); // true

// Check if number 11 is in the array
console.log("Does the array include 11?", numbers.includes(11)); // false


console.log('---------------------');
// Susikurkite masyvą, kuriame būtų surašyti bet kokie žodžiai. Panaudokite join metodą, kad masyvą paverstumėte į teksto eilutę. Paeksperimentuokite su skirtingais skirtukais jungiant tekstą (pvz vieną kartą panaudokite tarpą, kitą kablelius ir t.t.).
words = ["sun", "tree", "book", "computer", "coffee"];
console.log("Original array:", words);

// Join the words with a space
console.log("Joined with space:", words.join(' ')); // sun tree book computer coffee

// Join the words with default separator (comma)
console.log("Joined with default (comma):", words.join()); // sun,tree,book,computer,coffee

// Join the words with comma and space
console.log("Joined with comma and space:", words.join(', ')); // sun, tree, book, computer, coffee


console.log('---------------------');
// Susikurkite kintamąjį kuriame būtų saugomas sakinys iš kelių žodžių (string tipo kintamasis). Išskaidykite šį tekstą į masyvą naudojant split metodą. Raskite kiek žodžių buvo sakinyje.
// Create a string variable holding a sentence
let sentence = "The sun is shining brightly today.";
console.log("Original sentence:", sentence);

// Split the sentence into an array of words using space as separator
console.log("Array of words:", sentence.split(' '));

// Count how many words are in the sentence
console.log("Number of words:", sentence.split(' ').length);


console.log('---------------------');
// Susikurkite pažymių masyvą. Surikiuokite pažymius nuo didžiausio iki mažiausio. Išveskite tris didžiausius pažymius.
grades = [9, 7, 10, 6, 8]
console.log("Original grades:", grades);

// Sort from highest to lowest
console.log("Sorted grades:", grades.sort((a, b) => b - a));

// Show top 3 grades
console.log("Top 3 grades:", grades.sort((a, b) => b - a).slice(0, 3));


console.log('---------------------');
// Susikurkite du masyvus, pirmąjame būtų saugomi biologijos pamokos studentų vardai, o antrąjame būtų saugojami matematikos pamokos studentų vardai. Apjunkite šiuos masyvų informaciją į vieną masyvą. Bonus: ar jums pavyktų išskirti tik unikalius vardus? (galima ieškoti kaip panaudoti set).
let biologyStudents = ["Jonas", "Aiste", "Tomas", "Greta"];
console.log("Biology students:", biologyStudents);

let mathStudents = ["Lukas", "Aiste", "Greta", "Mantas"];
console.log("Math students:", mathStudents);

// Combine both arrays into one
let students = biologyStudents.concat(mathStudents);
console.log("Combined students:", students);

// Remove duplicate names using Set and spread operator
students = [...new Set(students)];
console.log("Unique students:", students);


console.log('---------------------');
// Susikurkite du masyvus. Pirmame masyve bus išvardinta pirmo semestro paskaitų temos, o antrame masyve - antro semestro paskaitų temos. Sujunkite šiuos masyvus naudojant spread operator, taip, kad pirmiausia būtų pateikta pirmo semestro informacija ir tada antro.
// First semester lecture topics
let firstSemesterTopics = ["Introduction to Biology", "Cell Structure", "Genetics", "Ecology"];
console.log("First semester topics:", firstSemesterTopics);

// Second semester lecture topics
let secondSemesterTopics = ["Evolution", "Human Anatomy", "Plant Physiology", "Microbiology"];
console.log("Second semester topics:", secondSemesterTopics);

// Combine both arrays using the spread operator
let semesterTopics = [...firstSemesterTopics, ...secondSemesterTopics];
console.log("Combined semester topics:", semesterTopics);


console.log('---------------------');
// Susikurkite masyvą, kuriame būtų išvardintos kelios spalvos. Padarykite šio masyvo kopiją ir duomenis iš originalaus masyvo pašalinkite. Išveskite abu masyvus, atkreipkite dėmesį į tai kad pašalinus duomenis iš pirmojo masyvo, turėjo pasinaikinti tik iš jo, o antrame viskas likti tvarkingai, o jeigu išsitrynė abiejų duomenys - pamėginkite surasti priežastį ir sutvarkyti.
let colors = ["red", "blue", "green", "yellow", "purple"];
console.log("Original colors array:", colors);

// Copy the array using slice()
let colorsCopy = colors.slice();

// Clear original array by assigning an empty array
colors = [];

console.log("Copy of colors array (should remain unchanged):", colorsCopy);
console.log("Original colors array after clearing (should be empty):", colors);


console.log('---------------------');
// Susikurkite masyvą, kuriame būtų saugomi miestų pavadinimai. Atlikite paiešką masyve su indexOf surasdami kurioje pozicijoje yra pasirinktas miestas.
let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys"];
console.log('Cities:', cities);

// Find the position (index) of the city "Klaipėda"
let position = cities.indexOf('Klaipėda');
console.log('Position of Klaipėda in the array:', position);


console.log('---------------------');
// Susikurkite bet kokį masyvą. Parašykite programą kuri išsiaiškintų ar masyve yra bent vienas dublikatas.
// Pvz, masyve [1, 2, 3] nėra dublikatų.
// O masyve [1, 2, 3, 4, 2] yra dublikatų (skaičius 2).
numbers = [10, 7, 25, 10]
let dublicate = false
for (let i = 0; i < numbers.length; i++) {
    if (numbers.indexOf(numbers[i]) !== i) {
        dublicate = true
    }
}
console.log(dublicate);


console.log('---------------------');
// Parašykite programą, kuri galėtų masyvą išskaidyti į pasirinkto dydžio gabalėlius (chunk size). Pvz turint masyvą [1, 2, 3, 4, 5, 6] ir pasirinkus chunk size 2, turėtų gautis toks masyvas - [[1, 2], [3, 4], [5, 6]].
numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers);

let newNumbers = []
for (let i = 0; i < numbers.length; i += 2) {
    newNumbers.push(numbers.slice(i, i + 2))
}
console.log(newNumbers);


console.log('---------------------');
// Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai.
numbers = [10, 7, 25, 10]
console.log(numbers.find(number => number % 2 == 0));


console.log('---------------------');
// Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5.
numbers = [-2, -5, -3, 12, -8, 0, 7, -1];
console.log(numbers.find(number => number > 0));


console.log('---------------------');
// Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas yra -6.
numbers = [5, 8, -3, -6, 4, 7]
console.log(numbers.find(number => number < 0 && number % 2 === 0));


console.log('---------------------');
// Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o jeigu masyvas [8, 9, -3, 2], tai atsakymas false.
numbers = [5, 8, -3, -6, 4, 7]
console.log(numbers.every(number => number > 0));


console.log('---------------------');
// Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu masyvas [7, 3, 6, 8, 10], tai atsakymas false.
numbers = [5, 8, -3, -6, 4, 7]
console.log(numbers.every(number => number % 2 === 0));


console.log('---------------------');
// Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve yra bent vienas skaičius, kuris yra mažesnis nei 5. Pvz, jeigu masyvas [8, 20, 5, 97, 44], tai atsakymas false, bet jeigu masyvas [20, 3, 7, 9], tai atsakymas true.
numbers = [20, 3, 7, 9]
console.log(numbers.some(number => number < 5));

console.log('---------------------');
// Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Patikrinkite ar šiame masyve yra bent vienas teigiamas skaičius (didesnis nei 0). Pvz, jeigu masyvas [7, 2, -3, -6], tai atsakymas yra true, o jeigu masyvas yra [-8, -6, -4], tai atsakymas yra false.
numbers = [-8, -6, -4]
console.log(numbers.some(number => number > 0));


console.log('---------------------');
// Susikurkite žodžių masyvą. Patikrinkite ar visi šiame masyve esantys žodžiai yra sudaryti iš 3 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘antis’, ‘ožka’, ‘arklys’], tai atsakymas true, o jeigu masyvas [‘abc’, ‘de’, ‘fgia’], tai atsakymas false.
words = ["apple", "pear", "banana", "cherry"]
console.log(words.every(word => word.length >= 3));


console.log('---------------------');
// Susikurkite žodžių masyvą. Patikrinkite ar šiame masyve yra bent vienas žodis prasidedantis raide a (turi surasti nepriklausomai tai didžioji ar mažoji raidė). Pvz, jeigu masyvas [‘bananas’, ‘agurkas’, ‘pomidoras’], tai atsakymas true, o jeigu masyvas [‘kaunas’, ‘vilnius’, ‘klaipėda’], tai atsakymas false.
words = ["Apple", "pear", "banana", "cherry"]
console.log(words.some(word => word.toLowerCase().startsWith('a')));


console.log('---------------------');
// Susikurkite skaičių masyvą. Patikrinkite ar visi šiame masyve esantys skaičiai yra teigiami ir ar yra bent vienas skaičius, kuris būtų lyginis. Pvz, masyvas [3, 7, 2, 9, 6, 4], grąžina true, o masyvas [4, -2, 3, 7] grąžina false.
numbers = [4, -2, 3, 7]

if (numbers.every(number => number > 0) && numbers.some(number => number % 2 === 0)) {
    console.log(true);
} else {
    console.log(false);
}


console.log('---------------------');
// Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Išfiltruokite skaičius, kurie yra teigiami. Pvz, jeigu masyvas yra [4, -3, -2, 8, 9, 5], tai išfiltruotas variantas yra [4, 8, 9, 5].
numbers = [4, -3, -2, 8, 9, 5]
console.log(numbers.filter(number => number > 0));


console.log('---------------------');
// Susikurkite skaičių masyvą, kuriame būtų saugomi prekės reitingai (skaičiai nuo 1 iki 5). Išfiltruokite tuos įrašus, kur balų yra 1 arba 2. Pvz, jeigu masyvas [5, 1, 4, 5, 1, 3, 4, 5, 2], tai išfiltravus gausis [1, 1, 2].
let productRatings = [5, 1, 4, 5, 1, 3, 4, 5, 2]
console.log(productRatings.filter(rating => rating <= 2));


console.log('---------------------');
// Susikurkite skaičių masyvą, kuriame būtų ir teigiamų ir neigiamų skaičių. Išfiltruokite tik tuos skaičius, kurie yra teigiami ir yra lyginiai. Pvz, jeigu turite masyvą [5, -3, 2, 7, 8, -4, 1] tai turi gautis [2, 8].
numbers = [5, -3, 2, 7, 8, -4, 1]
console.log(numbers.filter(number => number > 0 && number % 2 === 0));


console.log('---------------------');
// Susikurkite šalių pavadinimų masyvą. Išfiltruokite tik tas šalis, kurių pavadinime yra raidė b (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu turite masyvą [‘Belgija’, ‘Lietuva’, ‘Graikija’, ‘Bulgarija’], tai turi gautis [‘Belgija’, ‘Bulgarija’].
countries = ["Lithuania", "Latvia", "Estonia", "Poland", "Germany"];
console.log(countries);
let countriesL = []

// for (let i = 0; i < countries.length; i++) {
//     // console.log(countries[i].split(''));
//     // console.log(countries[i].includes('l'));
//     let countriesLower = countries[i].toLowerCase()

//     if (countriesLower.includes('l')) {
//         countriesL.push(countries[i])
//         // console.log(countries[i]);
//     }
// }

countries.forEach((country) => {
    let countriesLower = country.toLowerCase()
    // console.log(countriesLower);

    if (countriesLower.includes('l')) {
        countriesL.push(country)
    }
})

console.log(countriesL);

console.log('---------------------');
// Susikurkite skaičių masyvą. Išfiltruokite lyginius skaičius ir juos padvigubinkite. Pvz, jeigu masyvas yra [3, 7, 2, 9, 6, 4], išfiltravus gausis [2, 6, 4], o padvigubinus galutinis variantas bus [4, 12, 8].
numbers = [3, 7, 2, 9, 6, 4]
newNumbers = []

let numbersEven = numbers.filter(number => number % 2 === 0)
console.log(numbersEven);

numbersEven = numbersEven.map(number => number * 2)
console.log(numbersEven);


console.log('---------------------');
// Susikurkite skaičių masyvą. Kiekvieną skaičių jame padidinkite per 1. Pvz, jeigu masyvas yra [7, 8, 9, 2, 3], tai turi gautis [8, 9, 10, 3, 4].
numbers = [3, 7, 2, 9, 6, 4]
console.log(numbers);
console.log(numbers.map(number => number + 1));


console.log('---------------------');
// Susikurkite žodžių masyvą. Kiekvieną žodį iš šio masyvo paverskite į variantą iš didžiųjų raidžių. Pvz, jeigu turite masyvą [‘bananas’, ‘baba’, ‘klėtis’], tai turi gautis [‘BANANAS’, ‘BABA’, ‘KLĖTIS’].
words = ["apple", "pear", "banana", "cherry"]
console.log(words);
console.log(words.map(word => word.toUpperCase()));


console.log('---------------------');
// Susikurkite skaičių masyvą. Gaukite visų skaičių sumą. Pvz, jeigu masyvas yra [2, 3, 1], tai atsakymas 6.
numbers = [3, 7, 2]
console.log(numbers);
console.log(numbers.reduce((sum, number) => sum + number));


console.log('---------------------');
// Susikurkite skaičių masyvą. Atrinkite tik tuos skaičius, kurie yra lyginiai ir gaukite jų sumą. Pvz, jeigu masyvas yra [1, 2, 3, 4, 5], atrinkus gausis [2, 4], o šių skaičių suma ir galutinis atsakymas yra 6.
numbers = [3, 7, 2, 9, 6, 4]
console.log(numbers);
let even = numbers.filter(number => number % 2 === 0)
console.log(even);
console.log(even.reduce((sum, number) => sum + number));


console.log('---------------------');
// Susikurkite žodžių masyvą. Pasiimkite kiekvieno žodžio pirmą raidę, ją padarykite iš didžiosios raidės. Pvz, jeigu turite masyvą [‘šuo’, ‘katė’, ‘gyvatė’], tai turi gautis [‘Š’, ‘K’, ‘G’].
words = ["apple", "pear", "banana", "cherry"]
let firstC = words.map(word => word.toUpperCase().slice(0, 1))
console.log(firstC);

console.log('---------------------');
// Susikurkite žodžių masyvą. Raskite kiek šiame masyve yra žodžių, kurie susideda iš 5 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘bananas’, ‘persikas’, ‘abc’, ‘de’], tai atrinkus žodžius gausis [‘bananas’, ‘persikas’], o tokių žodžių yra ir galutinis atsakymas skaitosi 2.
words = ["bananas", "persikas", "abc", "de"]

let filtered = words.filter(word => word.length >= 5);
console.log(filtered, filtered.length);


console.log('---------------------');
// Susikurkite žodžių masyvą. Raskite kiekvieno žodžio simbolių kiekį. Pvz, jeigu masyvas yra [‘obelis’, ‘liepa’, ‘eglė’, ‘uosis’], tai turi gautis [6, 5, 4, 5].
words = ["apple", "pear", "banana", "cherry"]
console.log(words.map(word => word.length));


console.log('---------------------');
// Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti vardai ir amžiai. Ištraukite iš tokio masyvo tik vardus. Pvz, jeigu masyvas yra [‘Tomas 34’, ‘Jonas 20’, ‘Gintarė 40’, ‘Inga 24’], tai turi gautis [‘Tomas’, ‘Jonas’, ‘Gintarė’, ‘Inga’].
let people = ["Tomas 25", "Agnė 30", "Mantas 22", "Ieva 28"];
console.log(people.map(name => name.split(' ')[0]));


console.log('---------------------');
// Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti vardai ir amžiai. Ištraukite iš tokio masyvo tik amžius, juos paverskite į skaičius ir raskite bendrą sumą. Pvz, jeigu masyvas yra [‘Tomas 34’, ‘Jonas 20’, ‘Gintarė 40’, ‘Inga 24’], tai išrinkus info gausis [34, 20, 40, 24] ir suradus sumą turėsime 118.
people = ["Tomas 25", "Agnė 30", "Mantas 22", "Ieva 28"];
let age = people.map(name => parseInt(name.split(' ')[1]))
// console.log(age);
console.log(age.reduce((sum, age) => sum + age));


console.log('---------------------');
// Susikurkite masyvą prekių likučiams saugoti (tik likučių skaičiai). Išrinkite visus likučius, kurių liko mažai (mažiau nei 5 vnt.), ties kiekvienu likučiu paskaičiuokite kiek trūksta iki ribos. Pvz, jeigu turite masyvą [74, 2, 54, 3, 1, 87], išfiltravus liks [2, 3, 1], o paskaičiavus kiek kiekvieno trūksta iki 5, gausis [3, 2, 4].
let stockCounts = [74, 2, 54, 3, 1, 87]

let lessThan5 = stockCounts.filter(stock => stock < 5)
console.log(lessThan5);

lessThan5 = lessThan5.map(number => 5-number)
console.log(lessThan5);


console.log('---------------------');
// Susikurkite masyvą studento pažymiams saugoti. Suraskite kiek studentas turi gerų pažymių (8 ar daugiau). Pvz, jeigu masyvas yra [7, 8, 10, 6, 5, 9], išfiltravus gausis [8, 10, 9], o tokių pažymių jis turi 3.
grades = [7, 8, 10, 6, 5, 9]
console.log(grades.filter(grade => grade >= 8));
console.log(grades.filter(grade => grade >= 8).length);


console.log('---------------------');
// Susikurkite žodžių masyvą. Suraskite kiek iš viso šiame masyve per visus žodžius yra raidžių a (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu masyvas yra [‘bananas’, ‘obelis’, ‘automobilis’], gausis kad yra 4 raidės.
words = ["bananas", "obelis", "automobilis"]

// console.log(words.join(''));
words = words.join('').toLowerCase().split('')
console.log(words.join().toLowerCase().split(''));


console.log(words.filter(ch => ch === 'a').length)