const credentials = {
    login: 'admin',
    password: 'qwerty'
};

const form = document.getElementById('loginForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredLogin = document.getElementById('login').value;
    const enteredPassword = document.getElementById('password').value;

    if (enteredLogin === credentials.login && enteredPassword === credentials.password) {
        resultDiv.textContent = 'Welcome, ' + enteredLogin + '!';
        resultDiv.className = 'success';
    } else {
        resultDiv.textContent = 'Invalid login or password.';
        resultDiv.className = 'error';
    }
});