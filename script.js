// Simulating sign up functionality
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Simulate sign up process, e.g., store data in localStorage or send to server
    // For this example, let's just log the data
    console.log("Signed up with: ", username, email, password);

    // Redirect to profile page (for demonstration purposes, just go to a dummy profile page)
    window.location.href = "profile.html";
});

// Simulating login functionality
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulate login process, e.g., check credentials from localStorage or server
    // For this example, let's just log the login attempt
    console.log("Logged in with: ", username, password);

    // Redirect to profile page (for demonstration purposes, just go to a dummy profile page)
    window.location.href = "profile.html";
});
