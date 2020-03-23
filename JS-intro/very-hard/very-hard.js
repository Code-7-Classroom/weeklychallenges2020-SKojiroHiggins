



var inputNum1 = prompt("Please enter a number");
var inputOperator = prompt("Please enter an operator");
var inputNum2 = prompt("Please enter another number");

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


switch(inputOperator.toString()){
    case '+':
        console.log(parseInt(inputNum1) + ' + ' + parseInt(inputNum2) + ' = ' +  add(parseInt(inputNum1), parseInt(inputNum2)));
        break; 
    case '-':
        console.log(parseInt(inputNum1) + ' - ' + parseInt(inputNum2) + ' = ' + subtract(parseInt(inputNum1), parseInt(inputNum2)));
        break; 
    case '*':
        console.log(parseInt(inputNum1) + ' * ' + parseInt(inputNum2) + ' = ' + multiply(parseInt(inputNum1), parseInt(inputNum2)));
        break; 
    case '/':
        console.log(parseInt(inputNum1) + ' / ' + parseInt(inputNum2) + ' = ' + divide(parseInt(inputNum1), parseInt(inputNum2)));
        break;  
}