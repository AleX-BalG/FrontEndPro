"use strict"
const action = getAction();
const operands = getOperands();
const result = calculateResult(operands, action);
showResult(operands, action, result);

function getAction() {
    let val;

    do {
        val = prompt('Action? + - * /');
    } while (isOperatorInvalid(val));

    return val;
}

function isOperatorInvalid(val) {
    return val !== '+' && val !== '-' && val !== '*' && val !== '/';
}

function getOperands() {
    let operands;

    do {
        operands = prompt('Enter the numbers, separated by commas.');
    } while (isOperandInvalid(operands));

    return operands.split(/[, .]/).map(string => +string);
}

function isOperandInvalid(val) {
    return val === null || val.trim() === '';
}

function calculateResult(a, action) {
    let reduceValue;
    switch (action) {
        case '+':
            reduceValue =  a.reduce((prev, item, index) => {
                return prev + item;
            });
            return reduceValue;
        case '-':
            reduceValue =  a.reduce((prev, item, index) => {
                return prev - item;
            });
            return reduceValue;
        case '*':
            reduceValue =  a.reduce((prev, item, index) => {
                return prev * item;
            });
            return reduceValue;
        case '/':
             reduceValue =  a.reduce((prev, item, index) => {
                return prev / item;
            });
            return reduceValue;
    }
}

function showResult(a, action, result) {
    const expression = `Expression: ${a.join(action)} = ${result}`;
    alert(expression);
}