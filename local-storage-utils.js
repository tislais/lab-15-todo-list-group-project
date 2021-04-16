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
    user.todos.push(newToDo);
    setUser(user);
}

export function renderLi(todo) {
    const li = document.createElement('li');
    li.textContent = todo.todo;

    if (todo.completed) {
        li.style.textDecoration = 'line-through';
    }

    li.addEventListener('click', () => {
        completeTodo(todo.todo);
        renderToDos();
    });
    return li;
}

export function completeTodo(todoMessage) {
    // get todos from local storage
    const user = getUser();

    // find this todo
    const matchingTodo = user.todos.find((todo) => todoMessage === todo.todo);

    // change completed to true
    matchingTodo.completed = true;
    // save the changes

    setUser(user);
}

export function renderToDos() {
    const user = getUser();
    const ul = document.querySelector('ul');

    ul.textContent = '';
    user.todos.forEach(todo => {
        const li = renderLi(todo);
        ul.append(li);
    });
}

export function makeNewUser(username, password) {
    const newUser = {
        username: username,
        password: password,
        todos: []
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

export function logout() {
    localStorage.setItem(LOGGED_IN, '');
}

export function loggedInAndRedirect(username) {
    login(username);
    window.location = './todo';
}