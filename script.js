function add(a, b){
    return Math.round((a + b) * 1000)/1000;
}

function subtract(a, b){
    return Math.round((a - b) * 1000)/1000;
}

function multiply(a, b){
    return Math.round((a * b) * 1000)/1000;
}

function divide(a, b){
    if (b == 0){
        return "undefined";
    }
    return Math.round((a / b) * 1000)/1000;
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
    total.textContent = '';
    currentInput.textContent = '';
})
del.addEventListener("click", () => {
    if (firstNumber != "undefined"){
        total.textContent = total.textContent.slice(0, -1);
        if (total.textContent == ''){
            total.textContent = '';
    }
    }
})

dec.addEventListener("click", () => {
    if (!total.textContent.includes('.') && total.textContent.length < 15 && firstNumber != "undefined"){
        total.textContent += '.';
    }
})

for (let num of nums){
    num.addEventListener("click", e => {
        if (operator != "=" && total.textContent.length < 15){
            if (total.textContent == ''){
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
            total.textContent = '';
        }
        else if (firstNumber != "undefined" && total.textContent != ''){
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
                total.textContent = '';
            }
        }
        else{
            operator = e.target.textContent;
            currentInput.textContent = firstNumber + ' ' + operator;
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