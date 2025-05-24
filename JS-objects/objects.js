// Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa, atsiskaitytų kreditų skaičius, pažymiai, ūgis, kelintame kurse mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris skirtingas pasirinktas savybes.

let studentData = {
    firstName: 'John',
    lastName: 'Smith',
    age: 20,
    studyProgram: 'Math',
    completedCredits: 2,
    grades: [7, 7, 4, 9],
    height: 182,
    yearOfStudy: 2,
    schoolAttended: 'Vilnius gimnasium'
}

console.log(studentData);
console.log(studentData.firstName);

console.log('--------------------');
// Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis - biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba panaudoti new Date(Date.now()).getFullYear() funkciją).

let movieData = {
    title: 'Inception',
    director: 'Christopher Nolan',
    budget: 160000000,
    earningsAfterRelease: 829895144,
    genre: 'Science Fiction',
    duration: 148, // trukmė minutėmis
    releaseYear: 2010,
    cast: [
        'Leonardo DiCaprio',
        'Joseph Gordon-Levitt',
        'Elliot Page',
        'Tom Hardy'
    ]
}

console.log(movieData)
console.log(movieData.earningsAfterRelease - movieData.budget)
console.log(movieData.cast.length);
console.log(new Date(Date.now()).getFullYear() - movieData.releaseYear);


console.log('--------------------');
// Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius, žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais), išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?
let book1 = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    price: 12.99,
    pageCount: 180,
    chapters: [
        'Chapter 1: The Buchanans',
        'Chapter 2: The Valley of Ashes',
        'Chapter 3: Gatsby’s Party',
        'Chapter 4: Truths Revealed'
    ],
    releaseYear: 1925,
    availableInStores: true
};

let book2 = {
    title: 'The Martian',
    author: 'Andy Weir',
    genre: 'Science Fiction',
    price: 15.50,
    pageCount: 387,
    chapters: [
        'Chapter 1: Log Entry: Sol 6',
        'Chapter 2: Hab Problems',
        'Chapter 3: Pathfinder',
        'Chapter 4: Rescue Plans',
        'Chapter 5: Rescue Plans'
    ],
    releaseYear: 2011,
    availableInStores: false
}

console.log(book1);
console.log(book2);
console.log(book1.pageCount < book2.pageCount ? `${book1.title} thinner` : `${book2.title} thinner`);
console.log(book1.chapters.length > book2.chapters.length ? `${book1.title} more chapter` : `${book2.title} more chapter`);
console.log((book1.price * 2) > book2.price ? 'yes' : 'no');



console.log('--------------------');
// Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas, turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje (pirma prekė kainuoja - …, antra prekė kainuoja - …, ir t.t.). Raskite ir išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės pelningumą ((kaina - savikaina) * kiekis sandėlyje).
let product1 = {
    name: 'Wireless Mouse',
    price: 25.99,
    cost: 10.00,
    code: 'PRD001',
    stockQuantity: 150,
    boxDimensions: {
        x: 12,
        y: 8,
        z: 5
    }
};

let product2 = {
    name: 'Bluetooth Headphones',
    price: 59.99,
    cost: 25.00,
    code: 'PRD002',
    stockQuantity: 85,
    boxDimensions: {
        x: 20,
        y: 18,
        z: 7
    }
};

let product3 = {
    name: 'Laptop Stand',
    price: 34.50,
    cost: 15.00,
    code: 'PRD003',
    stockQuantity: 60,
    boxDimensions: {
        x: 30,
        y: 25,
        z: 6
    }
};

// Išvedame visus tris produktus
console.log(product1);
console.log(product2);
console.log(product3);
console.log(product1.name, 'price is: ', product1.price, '\n', product2.name, 'price is: ', product2.price, '\n', product3.name, 'price is: ', product3.price);

if (product1.price > product2.price && product1.price > product3.price) {
    console.log('More expensive', product1.name, 'price is: ', product1.price);
} else if (product2.price > product1.price && product2.price > product3.price) {
    console.log('More expensive', product2.name, 'price is: ', product2.price);
} else {
    console.log('More expensive', product3.name, 'price is: ', product3.price)
}
console.log(product1.name, 'box volume is', product1['boxDimensions'].x * product1.boxDimensions.y * product1.boxDimensions.z);
console.log(product2.name, 'box volume is', product2['boxDimensions'].x * product2.boxDimensions.y * product2.boxDimensions.z);
console.log(product3.name, 'box volume is', product3['boxDimensions'].x * product3.boxDimensions.y * product3.boxDimensions.z);
console.log((product1.price - product1.cost) * product1.stockQuantity);
console.log((product2.price - product2.cost) * product2.stockQuantity);
console.log((product3.price - product3.cost) * product3.stockQuantity);


console.log('--------------------');
// Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys). Sudėkite šias savybes su reikšmėmis: markė, rida, gamybos metai. Išveskite visą automobilio informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis įrašykite dabartinius metus arba panaudokite new Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300 kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).
let car = {}

car.brand = 'Audi'
car.mileage = 200000
car.year = 2000
console.log(car);
console.log(new Date(Date.now()).getFullYear() - car.year);
console.log(car.mileage / (new Date(Date.now()).getFullYear() - car.year));


console.log('--------------------');
// Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.).
let bookstore = {
    name: 'Knygų Sala',
    address: 'Gedimino pr. 12, Vilnius',
    area: 150,
    totalBooks: 12000,
    workingHours: '10:00 - 20:00',
    isOpen: true
};

for (const key in bookstore) {
    console.log(key, bookstore[key]);
}
console.log('--------------------');

for (const key in bookstore) {
    if (typeof bookstore[key] !== 'string') {
        console.log(key, bookstore[key])
    }
}


console.log('--------------------');
// Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių vidurkius. Išveskite abiejų studentų informaciją, bei pažymių vidurkius. Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir išveskite jo vardą su pavarde.
let student1 = {
    fullName: 'Jonas Jonaitis',
    studyProgram: 'Informatika',
    grades: [8, 9, 10, 7]
};

let student2 = {
    fullName: 'Aistė Petrauskaitė',
    studyProgram: 'Ekonomika',
    grades: [7, 8, 9, 6]
};

let sum = student1.grades.reduce((sum, value) => sum += value)
let avg = sum / student1.grades.length
console.log(student1.fullName, 'avg. grade', avg);


let sum2 = student2.grades.reduce((sum, value) => sum += value)
let avg2 = sum2 / student2.grades.length
console.log(student2.fullName, 'avg. grade', sum2 / student2.grades.length);

console.log(avg > avg2 ? student1.fullName + ' avg grade bigger' : student2.fullName + ' avg grade bigger');


// for objects
Object.entries(student1).forEach(element => {
    // console.log(element);

});

// for objects
Object.entries(student1).forEach(([key, value]) => {
    // console.log(key, value);

});

// for arrays
for (const element of student1.grades.entries()) {
    // console.log(element);
}
// for arrays
for (const [index, element] of student1.grades.entries()) {
    // console.log(index, element);
}


console.log('--------------------');
// Susikurkite knygų objektų masyvą. Apie kiekvieną knygą į atskirus knygų objektus sudėkite norimą informaciją (bent 3 savybes). Į masyvą įdėkite bent 3 knygas. Visas šias knygas išsiveskite. Tuomet parodykite pirmą knygą. Antros knygos kažkurią savybę.
let books = [
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949
    },
    {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
        year: 1997
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        year: 1988
    }
];
console.log(books);
console.log(books[0]);
console.log(books[1].title);

console.log('--------------------');
// Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis. Išveskite visų prekių pavadinimus su kainomis ir dar kokiais nors atributais atskirose eilutėse.
let products = [
    {
        name: 'Wireless Mouse',
        price: 25.99,
        inStock: true
    },
    {
        name: 'Bluetooth Headphones',
        price: 59.99,
        inStock: false
    },
    {
        name: 'Laptop Stand',
        price: 34.50,
        inStock: true
    }
];

products.forEach(element => {
    console.log(element.name, element.price);

});


console.log('--------------------');
// Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis. Išveskite kiekvieno automobilio pavadinimą, metus ir paskaičiuotą jo amžių (dabartiniai metai - gamybos metai).
let cars = [
    {
        brand: 'Audi',
        model: 'A4',
        year: 2015,
        mileage: 120000,
        fuelType: 'Diesel'
    },
    {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2018,
        mileage: 90000,
        fuelType: 'Petrol'
    },
    {
        brand: 'Tesla',
        model: 'Model 3',
        year: 2021,
        mileage: 30000,
        fuelType: 'Electric'
    }
]

cars.forEach(element => {
    console.log(element.brand, element.year, new Date().getFullYear() - element.year);

});

console.log('--------------------');
// Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite duomenimis. Išveskite kiekvienos įmonės informaciją atskirose eilutėse, gražiai suformatuotai (sakinio pavidalu ar pan.). Taip pat, ką nors paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis darbuotojų kiekis, darbuotojų kiekis per visas įmones.).
let companies = [
    {
        name: "Tech Solutions Ltd.",
        companyCode: "123456789",
        address: "1 Vilnius St., Vilnius",
        employeeCount: 25,
        industry: "Information Technology"
    },
    {
        name: "Green Leaf MB",
        companyCode: "987654321",
        address: "5 Kaunas St., Kaunas",
        employeeCount: 10,
        industry: "Food Production"
    },
    {
        name: "Construction Solutions AB",
        companyCode: "456789123",
        address: "10 Builders St., Klaipeda",
        employeeCount: 100,
        industry: "Construction"
    }
];


// sum = 0

// companies.forEach(company => {
//     console.log(company.name, company.companyCode);

//     sum +=company.employeeCount
// })

// console.log(sum);

// console.log(sum / companies.length);

sum = companies.reduce((sum, company) => sum + company.employeeCount, 0)

console.log(sum);
console.log(sum / companies.length);


console.log('--------------------');
// Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite jį pasirinktais duomenimis. Išveskite ligoninių pavadinimus su adresais skirtingose eilutėse. Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.: bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan.

let hospitals = [
    {
        name: "Vilnius City Hospital",
        code: "100001",
        address: "Antakalnio g. 57, Vilnius",
        beds: 350,
        departments: ["Emergency", "Cardiology", "Neurology", "Pediatrics"]
    },
    {
        name: "Kaunas Clinical Hospital",
        code: "100002",
        address: "Eivenių g. 2, Kaunas",
        beds: 420,
        departments: ["Surgery", "Oncology", "Orthopedics", "Intensive Care"]
    },
    {
        name: "Klaipėda Regional Hospital",
        code: "100003",
        address: "Liepojos g. 41, Klaipėda",
        beds: 280,
        departments: ["Gynecology", "Psychiatry", "Rehabilitation"]
    }
]

sum = hospitals.reduce((sum, hospital) => sum + hospital.beds, 0)
console.log(sum);
console.log(sum / hospitals.length);


console.log('--------------------');
// Susikurkite studentų objektų masyvą, kur apie kiekvieną studentą būtų žinoma ši informacija: vardas ir pavardė, amžius, pažymiai, studijų programa, kursas. Kiekvieną studentą išveskite taip: pirmoje eilutėje visi studento duomenys išskyrus jo pažymius, antroje eilutėje jo pažymiai, trečioje jo pažymių vidurkis su prierašu 'pažymių vidurkis'. Išvedus visus studentus dėkite brūkšnį (pvz.: -----) ir išveskite bendrą visų studentų pažymių vidurkį.
let students = [
    {
        name: "Jonas Jonaitis",
        age: 21,
        grades: [8, 9, 10, 7],
        program: "Informatika",
        year: 2
    },
    {
        name: "Aistė Petrauskaitė",
        age: 22,
        grades: [9, 9, 8, 10],
        program: "Verslo administravimas",
        year: 3
    },
    {
        name: "Tomas Kazlauskas",
        age: 20,
        grades: [2, 6, 7, 8, 7],
        program: "Statyba",
        year: 1
    }
]

let allGradesSum = 0
let allGradesCount = 0

students.forEach((student) => {

    console.log(student.name, student.age, student.program, student.year)
    console.log(student.grades);
    let gradesSum = student.grades.reduce((sum, grade) => sum + grade, 0)
    let gradesAvg = gradesSum / student.grades.length
    allGradesCount += student.grades.length
    console.log(student.name, 'grades avg:', gradesAvg)
    allGradesSum += gradesSum

    console.log('-----');
}
);

console.log('--------------------');

console.log('All students avg. grade:', (allGradesSum / allGradesCount).toFixed(2))


console.log('--------------------');
// Susikurkite parduotuvės objektą, kuriame būtų ši informacija: pavadinimas, adresas, darbuotojų kiekis, prekių objektų masyvas. Apie kiekvieną prekę parduotuvėje žinoma ši informacija: pavadinimas; kodas; kaina; savikaina; turimas kiekis. Išveskite parduotuvės bendrą informaciją, tuomet užrašą "prekės" ir atskirose eilutėse turimas prekes su kuria nors jų informacija (pvz.: pavadinimai, kainos ir turimi kiekiai). Galiausiai paskaičiuokite kiek iš viso parduotuvė turi visų prekių (sudėkite jų kiekius). Raskite ir išveskite kurios prekės turima daugiausiai, o kurios mažiausiai.

let store = {
  name: "Super Parduotuvė",
  address: "Gedimino pr. 10, Vilnius",
  employeeCount: 15,
  products: [
    {
      name: "Pienas 1L",
      code: "P001",
      price: 1.20,
      costPrice: 0.80,
      quantity: 100
    },
    {
      name: "Duona",
      code: "P002",
      price: 0.90,
      costPrice: 0.50,
      quantity: 50
    },
    {
      name: "Kava 250g",
      code: "P003",
      price: 3.50,
      costPrice: 2.00,
      quantity: 30
    }
  ]
};

// console.log(store.name, store.address);
// console.log('Products');


// // console.log(Object.entries(store));
// Object.entries(store).forEach(element => 
//     console.log(element[1])
    
// )
