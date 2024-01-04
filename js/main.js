let inputs = ['', ''];
let operator = '';
let cleared = false;
let decimalInDisplay = false;

let result = '';

function add(a, b){
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == 0){
        return "INF"
    }
    else{
        return a / b;
    }
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
    button.addEventListener('click', () =>{
        addToDisplay(button);
    });
});

function addToDisplay(button){
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

}

let decimal = document.getElementById("decimal");

decimal.addEventListener('click', () => {
    if(!decimalInDisplay){
        addToDisplay(decimal);
        decimalInDisplay = !decimalInDisplay;
    }
});

let expressionBox = document.getElementById("expression")
let operators = document.querySelectorAll(".operator");

operators.forEach((button) =>{
    button.addEventListener('click', () => {
        if(result != '' && cleared == true){
            cleared = false;
            inputs[0] = result;
        }

        if(inputs[0] != ''){
            if(inputs[1] != ''){
                result = operate(operator, inputs);
                clear();
                cleared = false;
                inputs[0] = result;
            }
            operator = button.textContent;
            expressionBox.textContent = inputs[0] + ' ' + operator;
        }
    });
});

let equals = document.getElementById("equals");

equals.addEventListener('click', () => {
    if(inputs[0] != '' && inputs[1] != ''){
        expressionBox.textContent = inputs[0] + ' ' + operator + ' ' + inputs[1] + ' = ';
        result = operate(operator, inputs);
        resultBox.textContent = result;
        clear();
    }
});

let clearButton = document.getElementById("C");
let allClear = document.getElementById("AC");

clearButton.addEventListener('click', () => {
    if(!cleared){
        resultBox.textContent = '0';
        if(operator == ''){
            inputs[0] = '';
        }
        else{
            inputs[1] = '';
        }
    }
    else{
        expressionBox.textContent = '';
        resultBox.textContent = '0';
        cleared = false;
    }
});

allClear.addEventListener('click', () => {
    if(!cleared){
        resultBox.textContent = '0';
        expressionBox.textContent = '';
        clear();
    }
    else{
        expressionBox.textContent = '';
        resultBox.textContent = '0';
        cleared = false;
    }
});

function clear(){
    inputs = ['', ''];
    operator = '';
    cleared = true;
}