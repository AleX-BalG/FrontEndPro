"use strict"
const operandFirst = document.querySelector('.first');
const operandSecond = document.querySelector('.second');
const btn = document.querySelector('#enterButton');
const resultDiv = document.querySelector('.result');
btn.addEventListener('click', onBtnClick);


function onBtnClick() {
    const a = +operandFirst.value;
    const b = +operandSecond.value;
    let result = a + b;
    resultDiv.textContent = `result = ${result}`;
}


