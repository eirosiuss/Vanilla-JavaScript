console.log('else if================================');
// Susikurkite tris skaičių kintamuosius. Patikrinkite šias sąlygas (naudojant else if dalis):
// Ar pirmas skaičius didesnis už antrą? (if)
// Ar antras skaičius didesnis už trečią? (else if)
// Ar trečias skaičius didesnis už pirmą? (else if)

// Ar pirmi du skaičiai yra lygūs? (if)
// Ar paskutiniai du skaičiai yra lygūs? (else if)
// Ar pirmas skaičius yra lygus 0? (else if)

// Ar antras skaičius neigiamas? (if)
// Ar trečias skaičius teigiamas? (else if)

let number1 = 2;
let number2 = 3;
let number3 = 4;

if (number1 > number2) {
    console.log('didesnis 1');
} else if (number2 > number3) {
    console.log('didesnis 2');
} else if (number3 > number1) {
    console.log('didesnis 3');
}

if (number1 === number2) {
    console.log('lygus');
} else if (number2 === number3) {
    console.log('lygus');
} else if (number1 === 0) {
    console.log('lygus nuliui');
}

if (number2 < 0) {
    console.log('neigiamas');
} else if (number3 > 0) {
    console.log('teigiamas');
}
console.log('--------------------------------');
// Susikurkite kintamąjį egzamino pažymiui saugoti [0-10]. Naudojant else if dalis patikrinkite šias sąlygas ir išveskite atitinkamą tekstą:
// Jei pažymys yra lygus 10 išvesti “puiku”.
// Jei pažymys yra lygus arba didesnis nei 9 išvesti “labai gerai”.
// Jei pažymys yra lygus arba didesnis nei 7 išvesti “gerai”.
// Jei pažymys yra lygus arba didesnis nei 5 išvesti “patenkinamai”.
// Jei pažymys mažesnis nei 5 išvesti “egzaminas neišlaikytas”.

let mark = 4;

if (mark == 10) {
    console.log('puiku');
} else if (mark >= 9) {
    console.log('labai gerai');
} else if (mark >= 7) {
    console.log('gerai');
} else if (mark >= 5) {
    console.log('patenkinamai');
} else if (mark < 5) {
    console.log('egzaminas neišlaikytas');
}

console.log('--------------------------------');
// Susikurkite skaičiaus kintamąjį. Patikrinkite ar jis yra lyginis, jei taip išveskite vieną informaciją, jei ne - kitą.
// Susikurkite skaičiaus kintamąjį. Patikrinkite ar šis skaičius dalinasi iš 7, jei taip išveskite vieną tekstą, jei ne - kitą.
// Susikurkite kintamąjį, kuriame nurodytumėte kelią iki norimo failo. Patikrinkite ar šis failas yra .js tipo, jei taip išveskite vieną tekstą, jei ne - kitą.

let number4 = 14;

if (number4 % 2 === 0) {
    console.log('lyginis');
} else {
    console.log('nelyginis arba 0');
}

if (number4 % 7 === 0) {
    console.log('dalinasi is 7');
} else {
    console.log('nesidalina');
}

let path = 'desktop/cat.js'

if (path.endsWith('.js')) {
    console.log('js');
} else {
    console.log('else');
}

console.log('--------------------------------');
// Susikurkite skaičiui saugoti skirtą kintamąjį. Tikrinkite (naudojant visas if sąlygos dalis):
// Ar skaičius yra lyginis?
// Ar dalinasi iš 5?
// Ar skaičius lygus 3?
// Jeigu nieko nepavyko rasti, išveskite klaidos pranešimą.

let number5 = 7;

if (number5 % 2 === 0) {
    console.log('lyginis');
} else if (number5 % 5 === 0) {
    console.log('dalinasi is 5');
} else if (number5 === 3) {
    console.log('3');
} else {
    console.log('neatitinka');
}

// Susikurkite tris skaičius. Tikrinkite (naudojant visas if sąlygos dalis):
// Ar pirmi du skaičiai lygūs?
// Ar pirmas ir trečias skaičiai lygūs?
// Ar trečias skaičius didesnis už pirmą?
// Ar antras skaičius lygus dvigubai trečio skaičiaus reikšmei?
// Ar pirmas skaičius dalinasi iš 3?
// Jei nieko nepavyko rasti, išveskite klaidos pranešimą.

let number6 = 6;
let number7 = 5;
let number8 = 2;

if (number6 === number7) {
    console.log('lygus');
} else if (number6 === number8) {
    console.log('lygus');
} else if (number8 > number6) {
    console.log('trecias didesnis uz pirma');
} else if (number7 === number8 * 2) {
    console.log('antras skaičius lygus dvigubai trečio skaičiaus reikšmei');
} else if (number6 % 3 === 0) {
    console.log('dalinasi iš 3');
} else {
    console.log('nieko');
}