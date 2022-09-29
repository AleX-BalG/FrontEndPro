const TODO_ITEM_CLASS = 'list-item';
const DONE_ITEM_CLASS = 'done';
const DELETE_BTN_CLASS = 'delete-btn';
const INVALID_CLASS = 'invalid-input';
const listTemplate = document.querySelector('#listTemplate').innerHTML;
const contactsListEl = document.querySelector('#contactslist');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const phoneInput = document.querySelector('#phone');
const contactSeveBtn = document.querySelector('#contact__save-btn');

contactSeveBtn.addEventListener('click', onAddContactBtnClick);

function onAddContactBtnClick() {
    if (!validateForm()) {
        return;
    }
    const newContact = getValues();
    addContact(newContact);
    resetForm();
}

function validateForm() {
    resetValidation();

    if (nameInput.value === '') {
        nameInput.classList.add('invalid-input');
        return false;
    }
    if (surnameInput.value === '') {
        surnameInput.classList.add('invalid-input');
        return false;
    }
    if (phoneInput.value === '') {
        phoneInput.classList.add('invalid-input');
        return false;
    }
    return true;
}

function resetValidation() {
    nameInput.classList.remove('invalid-input');
    surnameInput.classList.remove('invalid-input');
    phoneInput.classList.remove('invalid-input');
}

function getValues() {
    return {
        name: nameInput.value,
        surname: surnameInput.value,
        phone: phoneInput.value,
    };
}

function addContact(contact) {
    const contactEl = ganarateContactElement(contact);

    contactsListEl.append(contactEl);
}

function ganarateContactElement({ name, surname, phone }) {
    const trEl = document.createElement('tr');
    // const deliteBtn = document.createElement('span');

    const listHtml = generateListHtml(list);
    listEl.insertAdjacentHTML('beforeend', listHtml);

    trEl.append(generateCell(name));
    trEl.append(generateCell(surname));
    trEl.append(generateCell(phone));

    // deliteBtn.textContent = 'X';
    // deliteBtn.classList.add('delite-btn');

    // trEl.append(deliteBtn);

    return trEl;
}

function generateListHtml({ title }) {
    return listTemplate.replaceAll('{{title}}', title);
}

function generateCell(value) {
    const tdEl = document.createElement('td');
    tdEl.textContent = value;

    return tdEl;
}

function resetForm() {
    nameInput.value = '';
    surnameInput.value = '';
    phoneInput.value = '';
}