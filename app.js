import { makeNewUser, checkIfUserExists, usernameAndPasswordMatch, login } from './local-storage-utils.js';

const form = document.querySelector('form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // check if user exists
        // if true, check if user name & pwd match 
            // if true, log in and redirect
            // else, show error msg
        // else, create new user
    const data = new FormData(form);

    const username = data.get('username').toLowerCase();
    const password = data.get('password');
    const userExists = checkIfUserExists(username);
    if (userExists) {
        const matchingUserPass = usernameAndPasswordMatch(username, password);
        if (matchingUserPass) {
            login(username);
            window.location = './todo';
        } else {
            errorMessage.textContent = 'Username and password don\'t match';
            errorMessage.classList.remove('hidden');
        }
    } else {
        makeNewUser(username, password);
        window.location = './todo';
    }
});