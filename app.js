import { getUser, setUser, makeNewUser, checkIfUserExists, usernameAndPasswordMatch, login, logout, loggedInAndRedirect } from './local-storage-utils.js';

const form = document.querySelector('form');

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
            alert('you done fucked up');
        }
    } else {
        makeNewUser(username, password);
        window.location = './todo';
    }
});