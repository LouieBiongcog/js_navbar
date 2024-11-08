document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

   
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    
    if (username && password) {
        
        errorMessage.textContent = '';

        localStorage.setItem('isLoggedIn', 'true');

        
        window.location.href = 'navbar.html';
    } else {
       
        errorMessage.textContent = 'Please enter both username and password.';
    }
});
