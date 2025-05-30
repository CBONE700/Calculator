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

let firstNumber;
let secondNumber;
let operator;

const total = document.querySelector(".total");
const nums = document.querySelectorAll(".number");
const ops = document.querySelectorAll(".operator");
for (let num of nums){
    num.addEventListener("click", e => {
        if (total.textContent == 0){
            total.textContent = e.target.textContent;
        }
        else{
            total.textContent += e.target.textContent;
        }
    })}

for (let op of ops){
    op.addEventListener("click", (e) => {
        if (firstNumber == undefined){
            firstNumber = total.textContent;
            operator = e.target.textContent
            total.textContent = '';
            console.log(firstNumber);
            console.log(operator);
        }
        else{
            secondNumber = total.textContent;
            console.log(secondNumber);
            total.textContent = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
        }
    })}

function operate(a, b, operator){
    if (operator == '+'){
        return add(a, b);
    }
    else if (operator == '-'){
        return subtract(a, b);
    }
    else if (operator == '×'){
        return multiply(a, b);
    }
    else if (operator == '÷'){
        return divide(a, b);
    }
}