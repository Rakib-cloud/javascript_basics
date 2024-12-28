// Register user

document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    if (users.find(user => user.mobile === mobile)) {
        alert('User with this mobile number already exists.');
        return;
    }

    // Save new user
    users.push({ name, mobile, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful. Please log in.');
    window.location.href = 'login.html';
});

// Login user
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Validate login
    const user = users.find(user => user.mobile === mobile && user.password === password);
    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Login successful.');
        window.location.href = 'products.html';
    } else {
        alert('Invalid mobile or password.');
    }
});
