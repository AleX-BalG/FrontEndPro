// "use strict"
const quantity = getQuantity();
const action = getAction();
const arrOperand = getArray(quantity);
const result = calculateResult(arrOperand, action);
showResult(arrOperand, action, result);
    
function getQuantity() {
let quantity;

do {
    quantity = prompt('how many elements of the expression?');
} while (quantity <=0 || isOperandInvalid(quantity));

return Number(quantity);
}


function isOperandInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val);
}

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

function getArray(i) {
    let arrOperand = [];
    for (; i > arrOperand.length;) {
        arrOperand.push(getOperand())
        function getOperand() {
            let operand;

            do {
                operand = prompt('Enter operan');
            } while (isOperandInvalid(operand));

            return Number(operand);
        }
    }
    return arrOperand;
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