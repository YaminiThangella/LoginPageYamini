document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const messageDiv = document.getElementById('message');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        messageDiv.innerText = '';
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (username === '') {
            showError('Username is required.');
            return;
        }

        if (email === '') {
            showError('Email is required.');
            return;
        } else if (!isValidEmail(email)) {
            showError('Please enter a valid email address.');
            return;
        }

        if (password === '') {
            showError('Password is required.');
            return;
        } else if (password.length < 6) {
            showError('Password must be at least 6 characters long.');
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const isExistingUser = existingUsers.some(user => user.email === email);

        if (isExistingUser) {
            showError('User already exists. Please use a different email or login.');
        } else {
            existingUsers.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(existingUsers));
            showMessage('Registration successful!');
            registerForm.reset();
        }
    });

    function showMessage(message) {
        messageDiv.innerText = message;
        messageDiv.style.color = 'green';
    }

    function showError(error) {
        messageDiv.innerText = error;
        messageDiv.style.color = 'red';
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
});
