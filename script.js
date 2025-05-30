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
const currentInput = document.querySelector(".currentInput");
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
            currentInput.textContent = firstNumber + ' ' + e.target.textContent;
            total.textContent = '';
        }
        else{
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