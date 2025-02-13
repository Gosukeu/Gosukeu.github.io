function validateLogin() {
    // Get and normalize the input values
    const usernameInput = document.getElementById('username').value.trim().toLowerCase();
    const passwordInput = document.getElementById('password').value.trim(); // keep case sensitivity for password

    // List of valid usernames in lower case only
    const validUsernames = ['gosukeu', 'paulito'];
    // Correct password (change if you want case insensitivity, e.g. passwordInput.toUpperCase() and 'POL')
    const validPassword = 'POL';

    // Hide the error message if it's currently displayed
    document.getElementById('error-message').style.display = 'none';

    // Check if username is valid and password matches exactly
    if (validUsernames.includes(usernameInput) && passwordInput === validPassword) {
        // Store login status in sessionStorage
        sessionStorage.setItem('loggedIn', 'true');
        
        // Redirect to the main page or access page if successful
        window.location.href = 'index.html'; // Change to the page you want to redirect to
    } else {
        // Display error message
        document.getElementById('error-message').style.display = 'block';
    }
    
    // Prevent form submission from reloading the page
    return false;
}
