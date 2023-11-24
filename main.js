// main.JS

// Fungsi untuk beralih antara halaman login dan signup
function toggleForm(formToShow, formToHide) {
    document.getElementById(formToShow).style.display = 'block';
    document.getElementById(formToHide).style.display = 'none';
}

// Event listener untuk tombol login
document.getElementById('login-btn').addEventListener('click', function () {
    toggleForm('signin-box', 'signup-box');
});

// Event listener untuk tombol signup
document.getElementById('signup-btn').addEventListener('click', function () {
    toggleForm('signup-box', 'signin-box');
});
