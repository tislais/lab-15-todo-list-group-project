import { getUser, setUser, makeNewUser, checkIfUserExists, usernameAndPasswordMatch, login, logout, loggedInAndRedirect } from './local-storage-utils.js'l

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('booger');
})