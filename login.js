document.addEventListener('DOMContentLoaded', () => {
    // If user is already logged in, redirect to dashboard
    if (sessionStorage.getItem('userRole')) {
        window.location.href = 'index.html';
    }

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedRole = document.getElementById('role-select').value;
        
        // Store the role in sessionStorage to persist across pages
        sessionStorage.setItem('userRole', selectedRole);

        // Redirect to the main dashboard
        window.location.href = 'index.html';
    });
});
