console.log('if...else Statement================================');
let score = 60;
if (score >= 50) {
    console.log('You have passed');
}

console.log('------------------');
score = -20;
if (score < 50) {
    console.log('Sorry, you failed');
}

console.log('------------------');
if (score >= 50) {
    console.log('You have passed');
} else {
    console.log('Sorry, you failed');
}

console.log('else if Statement================================');
if (score > 100 || score < 0) {
    console.log('Score is invalid');
} else if (score >= 50) {
    console.log('You have passed');
} else {
    console.log('Sorry, you failed');
}

console.log('------------------');
let number = 12
if (number > 0) {
    console.log('positive');
} else if (number < 0 ){ 
    console.log('negative');
} else {
    console.log('zero');
    
}