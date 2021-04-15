// import { }

import { addToDo, getUser } from '../local-storage-utils.js';

const form = document.querySelector('form');
const toDoUl = document.getElementById('to-do-ul');
const user = getUser();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const toDoItem = data.get('to-do-item');
    addToDo(toDoItem);
    user.todo.forEach(todo => {
        const toDoLi = document.createElement('li');
        toDoLi.textContent = toDoItem;
        toDoUl.append(toDoLi);
    })
});