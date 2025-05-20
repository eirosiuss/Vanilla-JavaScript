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
    sum +=student1Grades[index]
}
// console.log(sum)   

let average1 = sum / student1Grades.length
console.log(average1);

sum = 0
for (let index = 0; index < student2Grades.length; index++) {
    sum +=student2Grades[index]
}
// console.log(sum)   

let average2 = sum / student2Grades.length
console.log(average2);

console.log(average1 > average2 ? 'pirmo studento' : 'antro studento');


