const USER = 'USER';

export function getUser() {
    const stringyUser = localStorage.getItem(USER);
    const parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}
export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
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
    if (username === user.username) {
        return true;
    } else {
        return false;
    }
}
export function usernameAndPasswordMatch(username, password) {
    const user = getUser();
    if (!checkIfUserExists(username) || user.password !== )
}
