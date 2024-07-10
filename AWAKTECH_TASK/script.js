document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        messageDiv.innerText = '';
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Check if email and password are not empty
        if (email === '' || password === '') {
            showMessage('Email and password must not be empty');
            return;
        }

        login(email, password);
    });

    function login(email, password) {
        messageDiv.innerText = 'Logging in...';
        messageDiv.style.color = 'blue';

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: email, password: password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // to determine a successful login response
            if (data) {
                showMessage(`Welcome, ${email}!`);
                loginForm.reset();
            }
        })
        // if it has an error it will display login failed
        .catch(error => {
            showMessage('Login failed');
        });
    }

    function showMessage(message) {
        messageDiv.innerText = message;
        if (message.includes('Welcome')) {
            messageDiv.style.color = 'green';
        } else {
            messageDiv.style.color = 'red';
        }
    }
});
