"use strict"
let answerFirst = prompt('how many days of war have passed?');
let answerSecond = prompt('How many days until victory?');
answerFirst = Number(answerFirst);
answerSecond = Number(answerSecond);
let result = answerFirst + answerSecond; 
alert('The war lasted ' + result + ' days, according to experts.');