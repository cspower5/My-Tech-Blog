$(document).ready(function () {

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#signup-name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-pass').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    } else {
        alert('You must enter a username, email, and password.')
    }
};

// document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);


document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

$('.create').click(function () {
    $('.login-form').hide();
    $('.signup-form').show();
});

$('.login').click(function () {
    $('.signup-form').hide();
    $('.login-form').show();
});