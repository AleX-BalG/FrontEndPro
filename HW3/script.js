"use strict"
const operand = getOperand('Enter any positive number.');
const sumEven = calculateSumEven(operand);
const sumOdd = calculateSumOdd (operand);
const result = showResult();

function getOperand(label) {
    let operand;

    do {
        operand = prompt(label);
    } while (isOperandInvalid(operand));

    return Number(operand);
}

function isOperandInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val) || val <= 0;
}

function calculateSumEven(i) {
    let sum = 0;
    for (; i > 0; i--) {
        if (!(i % 2)) {
            sum += i;
        }
    }
    return sum;
}

function calculateSumOdd(i) {
    let sum = 0;
    for (; i > 0; i--) {
        if (i % 2) {
            sum += i;
        }
    }
    return sum;
}

function showResult() {
    alert(`The sum of even numbers is ${sumEven}; \nThe sum of odd numbers is ${sumOdd};`);
}