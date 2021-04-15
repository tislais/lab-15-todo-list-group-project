// import { }

const form = document.querySelector('form');
const toDoUl = document.getElementById('to-do-ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    
    const toDoItem = data.get('to-do-item');
    
});