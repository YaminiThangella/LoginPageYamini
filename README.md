# LoginPageYamini
# Simple Login Web Page
This project is a simple Registration and login web page made with HTML, CSS, and JavaScript. It uses an open login API for user authentication and includes client-side validations. The login form and Registration form is designed to work well on both computers and mobile devices.

## Features
- Basic HTML structure with fields for username/email and password
- CSS styling for a good-looking and adaptable form
- JavaScript for validating form input and connecting to the API
- Responsive design that adjusts for different screen sizesa
- Additional features:
  show/hide password,loading spinner

## Requirements
- Ensure the username/email field is filled and contains a valid email format
- Ensure the password field is filled and at least 6 characters long
- Handle API responses to show success or error messages

## Getting Started
### Installation
1. Clone the repository:bash git clone https://github.com/your-username/login-page.git

### Navigate to the project directory:
- cd login-page
- cd Registration-page

### Running the Project
- Open the index.html file in your web browser to see the login page.
- Enter your username/email and password, then click "Submit" to log in.
- If you are a new user then,Open the registration.html file in your web browser to see the Registration page.
- Enter your username,email and password, then click "Submit" to Register.

### Usage
- The form checks that fields are filled correctly while submission.
- When you submit the form, it sends a POST request to the open login API.
- If the login is successful, it shows a success message; if not, it displays an error message.
- The form adjusts to different screen sizes, so it works well on mobile devices too.

### API Integration
The login form uses this open login API for authentication : POST https://jsonplaceholder.typicode.com/posts \
-Headers "Content-Type: application/json" 
-details'{
"username": "user@example.com",
"password": "yourpassword"
}'

### Bonus Features:
- Show/hide password option
- Loading spinner during API calls
