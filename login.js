function validateLogin() {
    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Correct usernames and password
    const validUsernames = ['gosukeu', 'paulito'];
    const validPassword = 'BW2';
    
    // Check if username is valid
    if (validUsernames.includes(username) && password === validPassword) {
        // Store login status in sessionStorage
        sessionStorage.setItem('loggedIn', 'true');
        
        // Redirect to the main page or access page if successful
        window.location.href = 'index.html';  // Change to the page you want to redirect to
        return false; // Prevent form from submitting normally
    } else {
        // Display error message
        document.getElementById('error-message').style.display = 'block';
        return false; // Prevent form submission
    }
}
