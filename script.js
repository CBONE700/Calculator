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
    if (b == 0){
        return "undefined";
    }
    return a / b;
}

let firstNumber;
let secondNumber;
let operator;

const total = document.querySelector(".total");
const currentInput = document.querySelector(".currentInput");
const nums = document.querySelectorAll(".number");
const ops = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const dec = document.querySelector(".decimal");

clear.addEventListener("click", () => {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    total.textContent = '0';
    currentInput.textContent = '';
})
del.addEventListener("click", () => {
    total.textContent = total.textContent.slice(0, -1);
    if (total.textContent == ''){
        total.textContent = '0';
    }
})

dec.addEventListener("click", () => {
    if (!total.textContent.includes('.') && total.textContent.length < 15){
        total.textContent += '.';
    }
})

for (let num of nums){
    num.addEventListener("click", e => {
        if (operator != "=" && total.textContent.length < 15){
            if (total.textContent == '0'){
                total.textContent = e.target.textContent;
            }
            else{
                total.textContent += e.target.textContent;
            }
        }
    })}

for (let op of ops){
    op.addEventListener("click", (e) => {
        if (firstNumber == undefined){
            firstNumber = total.textContent;
            operator = e.target.textContent
            currentInput.textContent = firstNumber + ' ' + e.target.textContent;
            total.textContent = '0';
        }
        else if (firstNumber != "undefined"){
            secondNumber = total.textContent;
            total.textContent = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
            operator = e.target.textContent;
            if (e.target.textContent == '='){
                if (!currentInput.textContent.includes('=')){
                    currentInput.textContent += ' ' + secondNumber + ' =';
                    firstNumber = total.textContent;
                }
            }
            else{
                currentInput.textContent = total.textContent + ' ' + operator;
                firstNumber = total.textContent;
                total.textContent = '0';
            }
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
    else{
        return a;
    }
}