"use strict"
const casesList = document.querySelector('#cases__list');
const enterInput = document.querySelector('#enter__input');
const enterBtn = document.querySelector('#enter__btn');

enterBtn.addEventListener('click', addToTheList);

function addToTheList() {
    if (!validationEnterInput()) {
        return
    }
    const newTask = getNewListItem();
    addTask(newTask);
    resetEnterInput();
}

function validationEnterInput() {
    if(enterInput.value === '') {
        return false;
    }
    return true;
}

function getNewListItem() {
    const newItem = enterInput.value;
    return newItem;
}

function addTask(task) {
    const taskEl = generatinTask(task);
    casesList.append(taskEl);
}

function generatinTask(task) {
    let liElement = document.createElement('li');
    liElement.textContent = task;
    liElement.addEventListener('click', () => {
        liElement.classList.toggle('ready');
    })
    return liElement;
}

function resetEnterInput() {
    enterInput.value = '';
}