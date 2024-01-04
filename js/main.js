let inputs = ['', ''];
let operator;

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

}

let textBox = document.getElementById("result");
let numbers = document.querySelectorAll(".number");

numbers.forEach((button) =>{
    button.addEventListener('click', () => {
        if(operator){
            inputs[1] += button.textContent;
            textBox.textContent = inputs[1];
        }
        else{
            inputs[0] += button.textContent;
            textBox.textContent = inputs[0];
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
    operate(operator, inputs);
});