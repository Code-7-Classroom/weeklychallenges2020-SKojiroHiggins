function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

var num1 = 5;
var num2 = 10;
var operator = '+';
var ans;


if (operator === '+') {
    ans = add(num1, num2);
} else if (operator == '-') {
    ans = subtract(num1, num2);
}

console.log('The answer is ' + ans);




if ('if this is true do code below, otherwise move on') {
    code;
} else if ('if this is true do code below, otherwise move on') {
    code;
} else {
    'code here runs if nothing else did'
    code;
}

