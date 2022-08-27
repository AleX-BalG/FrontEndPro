"use strict"
let answerFirst = prompt('how many days of war have passed?(Enter the number)');
let answerSecond = prompt('How many days until victory? (Enter the number)');
while (testNumber(answerFirst) || testNumber (answerSecond)) {
    alert('Oops, you got it wrong somewhere, try again.');
    answerFirst = prompt('how many days of war have passed?(Enter the number)');
    answerSecond = prompt('How many days until victory? (Enter the number)');
}
answerFirst = Number(answerFirst);
answerSecond = Number(answerSecond);
function testNumber (resultVol) {
  return resultVol === null || resultVol === '' || isNaN(resultVol);
}
let calculations = prompt('Do you want to know how would say...(enter the number)?\n1. Grandmothers in the yard.\n2. You yourself.\n3. The enemy\'s media.\n4.A. Arestovich.');
let result = null
switch (calculations) {
    case '1': 
        result = answerFirst / answerSecond; 
        break 
    case '2': 
        result = answerFirst + answerSecond; 
        break
    case '3': 
        result = answerFirst - answerSecond; 
        break
    case '4': 
        result = answerFirst * answerSecond; 
        break
    default:
        alert('Oops, you got it wrong somewhere, selected option 2.');
        result = answerFirst + answerSecond;
}
alert('The war lasted ' + result + ' days, according to experts.');