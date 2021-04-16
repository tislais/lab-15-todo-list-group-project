// import { }

import { addToDo, renderToDos, logout } from '../local-storage-utils.js';

const form = document.querySelector('form');
const button = document.getElementById('logout-button');
// const toDoUl = document.getElementById('to-do-ul');
// const user = getUser();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const todo = formData.get('to-do-item');

    addToDo(todo);
    renderToDos();
    form.reset();
});

renderToDos();

button.addEventListener('click', () => {
    logout();
    window.location = '../';
});