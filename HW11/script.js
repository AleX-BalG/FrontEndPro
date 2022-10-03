"use strict"
const TODO_ITEM_SELECTOR = '.todo-item';
const TODO_TITLE_CLASS = 'todo-title';
const DONE_ITEM_CLASS = 'done';
const DELETE_BTN_CLASS = 'delete-btn';
const INVALID_CLASS = 'invalid-input';
const todoTemplate = document.querySelector('#todoTemplate').innerHTML;
const listEl = document.querySelector('#list');
const newTodoTitleInput = document.querySelector('#newTodoTitle');
const saveTodoBtn = document.querySelector('#saveTodoBtn');
const newTodoForm = document.querySelector('#newTodoForm');

newTodoForm.addEventListener('submit', onFormSubmit);
newTodoTitleInput.addEventListener('input', onNewTodoTitleChange);
listEl.addEventListener('click', onListClick);

let todoDeta = [
{ title: 'Todo 1', id: 1, status: 'not done' },
{ title: 'Todo 2', id: 2, status: 'not done' },
{ title: 'Todo 3', id: 3, status: 'not done' },
{ title: 'Todo 4', id: 4, status: 'not done' },
]

init();

function init() {
    renderTodoData(todoDeta);
}
function renderTodoData(todo) {
    const htmls = todo.map(generateTodoHtml);
    listEl.innerHTML = htmls.join('');
    changeFone(todo);
}

function onListClick(e) {
    const todoId = getTodoId(e.target);
    
    if (e.target.classList.contains(TODO_TITLE_CLASS)) {
        toggleTodo(todoId);
    
    }
    
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteTodo(todoId);
    }
}

function onFormSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }
    const newTodo = getFormData();
    addTodo(newTodo);
    resetFormData();
}

function onNewTodoTitleChange(e) {
    validateForm();
}

function validateForm() {
    resetFormValidation();
    if (newTodoTitleInput.value === '') {
        newTodoTitleInput.classList.add(INVALID_CLASS);
        saveTodoBtn.disabled = true;
        return false;
    }

    return true;
}

function resetFormValidation() {
    newTodoTitleInput.classList.remove(INVALID_CLASS);
    saveTodoBtn.disabled = false;
}

function getFormData() {
    return {
        title: newTodoTitleInput.value,
    };
}

function getTodoId(el) {
    return +el.closest(TODO_ITEM_SELECTOR).dataset.todoId;
}

function addTodo(todo) {
    todo.id = Date.now();
    todo.status = 'not done';

    todoDeta.push(todo);
    renderTodoData(todoDeta);
}

function generateTodoHtml({ title, id, status }) {
    return todoTemplate
        .replaceAll('{{title}}', title)
        .replaceAll('{{id}}', id)
        .replaceAll('{{status}}', status);
}

function resetFormData() {
    newTodoTitleInput.value = '';
}

function clearList() {
    listEl.innerHTML = '';
}

function toggleTodo(id) {
    const el = todoDeta.find((item) => item.id === id);

    if (el.status == 'not done') {
        el.status = 'done';
    } else {
        el.status = 'not done';
    }

    renderTodoData(todoDeta);
}

function changeFone(el) {
    console.log(el);
    
}

function deleteTodo(id) {
    todoDeta = todoDeta.filter((item) => item.id !== id);
    renderTodoData(todoDeta);
}