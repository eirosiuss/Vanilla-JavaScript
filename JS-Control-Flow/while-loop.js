console.log('While loop================================');
let count = 1;
while (count < 5) {
    console.log('Learning while loop');
    console.log(count);
    count += 1;
}

console.log('Creating Multiplication Table================================');
let number = 9;
let countOne = 1;

while (countOne <= 10) {
    let product = number * countOne;
    console.log(`${number} * ${countOne} = ${product}`);
    countOne += 1;
}

console.log('do While loop================================');
let countTwo = 6;
do {
    console.log(countTwo);
    countTwo += 1
} while (countTwo <= 5) {
}

console.log('--------------------------');
let countThree = 1;
let numberOne = 3;
do {
    let result = countThree * numberOne
    console.log(countThree + ' * ' + numberOne + ' = ' + result);
    countThree += 1
} while (countThree <= 10) {
}

console.log('--------------------------');
let numberTwo = 9;
let countFour = 10;

while (countFour >= 1) {
    let product = numberTwo * countFour;
    console.log(`${numberTwo} * ${countFour} = ${product}`);
    countFour -= 1;
}

console.log('sum--------------------------');
let n = 10;
let counter = 1;
let sum = 0;
while (counter <= n) {
    sum += counter
    // console.log(sum);
    counter += 1
}
console.log(sum);

console.log('factorial--------------------------');
let numberF = 5;
let counterF = numberF;
let factorial = 1;
while (counterF >= 1) {
    factorial *= counterF
    console.log(factorial);
    counterF--
}
console.log(factorial);

console.log('fibonacci sequence--------------------------');
let counterFS = 1;
let numberFS = 7;
let zero = 0;
let one = 1;
while (counterFS <= numberFS) {
    console.log(zero);
    let next = zero + one
    zero = one
    one = next
    counterFS++
}

console.log('even--------------------------');

let countE = 2;
while (countE <= 10) {
    console.log(countE);
    countE += 2;
}

console.log('reverse--------------------------');
let countR = 10;
while (countR >= 1) {
    console.log(countR);
    countR -= 1
}

console.log('multiply--------------------------');
let countM = 1;
let multiply = 1
while (multiply < 1000) {
    multiply = multiply * 2
    console.log(multiply);
    countM += 1
}

console.log('--------------------------');
// Išveskite visus skaičius nuo 1 iki 20.
let i = 1
while (i <= 20) {
    console.log(i)
    i++
}

console.log('--------------------------');
// Išveskite visus skaičius nuo 1 iki 50. Prie kiekvieno lyginio skaičiaus parašykite žodį „lyginis“, o prie kiekvieno nelyginio – „nelyginis“.
i = 1
while (i <= 50) {
    console.log(i, i % 2 == 0 ? 'lyginis' : 'nelyginis');
    i++
}

console.log('--------------------------');
// Išveskite visus skaičius nuo 25 iki 50. Vietoj skaičių, kurie dalinasi iš 3 išveskite tekstą „skaičius {skaičius} dalinasi iš 3“.
i = 25
while (i <= 50) {
    console.log(i % 3 == 0 ? `skaičius ${i} dalinasi iš 3` : i);
    i++
}

console.log('--------------------------');
// Išvedinėkite visus skaičius nuo 1 iki tol kol pasitaikys skaičius, kuris dalinasi iš 3 ir iš 5.
while (true) {
    i = Math.floor(Math.random() * 100) + 1

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
        break
    }
}

console.log('--------------------------');
// Iš skaičių nuo 1 iki 100, raskite visų lyginių skaičių sumą.
i = 1
sum = 0
while (i <= 100) {
    if (i % 2 == 0) {
        sum += i
    }
    i++
}
console.log(sum);

console.log('--------------------------');
// Žemiau parodytą pavyzdį pakeiskite taip, kad toje pačioje eilutėje išvestų ne tik skaičių, bet ir jo kvadratą:
// let skaicius = 1;

// while (skaicius < 5) {
// 	console.log(skaicius);
// 	skaicius++;
// }

let skaicius = 1;

while (skaicius < 5) {
    console.log(skaicius, skaicius ** 2);
    skaicius++;
}

console.log('--------------------------');
// (sudėtingesnė) Išvedinėkite visus skaičius nuo 1 iki kol rasite tokį, kuris yra pirminis.
i = Math.floor(Math.random() * 1000) + 1
while (true) {

    let pirminis = true

    if (i < 2) {
        pirminis = false
    } else {
        let daliklis = 2
        while (daliklis < i) {
            if (i % daliklis == 0) {
                pirminis = false
                break
            }
            daliklis++
        }
    }
    if (pirminis == false) {
        console.log(i, 'ne pirminis');
    } else {
        console.log(i, 'pirminis');
        break
    }
    i++
}

console.log('--------------------------');
// Parašykite programą, kuri paverstų eurus į dolerius.
let eur = 100
let usd = 1.125

while (true) {
    let result = eur * usd
    result = result.toFixed(2)
    console.log(eur + ' eur =', result + ' $');
    break
}