const USER = 'USER';
const LOGGED_IN = 'LOGGED_IN';

export function getUser() {
    const stringyUser = localStorage.getItem(USER);
    const parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}
export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}
export function addToDo(todo) {
    const newToDo = {
        todo,
        completed: false
    };
    const user = getUser();
    user.todo.push(newToDo);
}

export function makeNewUser(username, password) {
    const newUser = {
        username: username,
        password: password,
        todo: []
    };
    setUser(newUser);
}
export function checkIfUserExists(username) {
    const user = getUser();
    if (!user) {
        return false;
    } else {
        return username === user.username;
    }
}


export function usernameAndPasswordMatch(username, password) {
    const user = getUser();
    if (!checkIfUserExists(username) || user.password !== password) return false;
    return true;
}

export function login(username) {
    localStorage.setItem(LOGGED_IN, username);
}

export function logout(){
    localStorage.setItem(LOGGED_IN, '');
}

export function loggedInAndRedirect(username) {
    login(username);
    window.location = './todo';
}