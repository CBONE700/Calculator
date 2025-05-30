function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let firstNumber = 2;
let secondNumber = 2;
let operator = '*';

function operate(a, b, operator){
    if (operator == '+'){
        return add(a, b);
    }
    else if (operator == '-'){
        return subtract(a, b);
    }
    else if (operator == '*'){
        return multiply(a, b);
    }
    else if (operator == '/'){
        return divide(a, b);
    }
}

let total = document.querySelector(".total");
total.textContent = operate(firstNumber, secondNumber, operator);