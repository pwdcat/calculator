let inputs = ['', ''];
let operator = '';
let cleared = false;

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

function operate(operator, inputs){
    switch(operator){
        case '+':
            return add(inputs[0], inputs[1]);
        case '-':
            return subtract(inputs[0], inputs[1]);
        case 'x':
            return multiply(inputs[0], inputs[1]);
        case '/':
            return divide(inputs[0], inputs[1]);
    }
}

let resultBox = document.getElementById("result");
let numbers = document.querySelectorAll(".number");

numbers.forEach((button) =>{
    button.addEventListener('click', () => {
        if(cleared){
            expressionBox.textContent = '';
            cleared = false;
        }
        if(operator == ''){
            inputs[0] += button.textContent;
            resultBox.textContent = inputs[0];
        }
        else{
            inputs[1] += button.textContent;
            resultBox.textContent = inputs[1];
        }
    });
});

let expressionBox = document.getElementById("expression")
let operators = document.querySelectorAll(".operator");

operators.forEach((button) =>{
    button.addEventListener('click', () => {
        operator = button.textContent;
        expressionBox.textContent = inputs[0] + ' ' + operator;
    });
});

let equals = document.getElementById("equals");

equals.addEventListener('click', () => {
    expressionBox.textContent = inputs[0] + ' ' + operator + ' ' + inputs[1] + ' = ';
    resultBox.textContent = operate(operator, inputs);
    clear();
});

function clear(){

    inputs = ['', ''];
    operator = '';
    cleared = true;
}