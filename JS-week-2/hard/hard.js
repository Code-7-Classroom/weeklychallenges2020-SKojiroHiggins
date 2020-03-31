var person1Name = 'Tom';
var person1Height = 9; // in
var person1Mass = 8; // lbs
var person2Name = 'Jerry';
var person2Height = 3.93701; // in
var person2Mass = 0.099208; // lbs
var higher; 

function calcBMI(height, mass) {
    return mass / (height * height);
}

if (calcBMI(person1Height, person1Mass) > calcBMI(person2Height, person2Mass)) {
    higher = true;
} else if (calcBMI(person1Height, person1Mass) < calcBMI(person2Height, person2Mass)) {
    higher = false;
}

console.log('Is ' + person1Name + '\'s BMI higher than ' + person2Name + '\'s? ' + higher);