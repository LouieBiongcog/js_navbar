document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

  
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username && password) {
        
        if (username === storedUsername && password === storedPassword) {
            errorMessage.textContent = '';
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'navbar.html'; 
        } else {
            errorMessage.textContent = 'Incorrect username or password.';
        }
    } else {
        errorMessage.textContent = 'Please enter both username and password.';
    }
});


document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const signupMessage = document.getElementById('signup-message');

    if (newUsername && newPassword) {
       
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);

        signupMessage.textContent = 'Account created successfully! Please log in.';
        setTimeout(() => {
           
            document.getElementById('signupFormContainer').style.display = 'none';
            document.getElementById('loginFormContainer').style.display = 'block';
        }, 2000);
    } else {
        signupMessage.textContent = 'Please enter both username and password to sign up.';
    }
});


document.getElementById('goToSignUp').onclick = function() {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('signupFormContainer').style.display = 'block';
};

document.getElementById('goToLogin').onclick = function() {
    document.getElementById('signupFormContainer').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
};
