// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh

    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate input
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    // Simulate login functionality (you can replace this with a server call)
    const userData = { email, password };
    localStorage.setItem('userData', JSON.stringify(userData)); // Store data

    // Confirm data is stored and simulate login success
    alert('Login successful! Redirecting...');
    console.log('User Data:', userData);

    // Redirect (simulate)
    window.location.href = "./dashboard.html"; // Replace with your dashboard URL
});
