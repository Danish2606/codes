document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
    } else {
        localStorage.setItem('registerEmail', document.getElementById('email').value);
        localStorage.setItem('registerPassword', password);
        alert('Registration successful');
        errorMessage.textContent = ''; 
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const registerEmail = localStorage.getItem('registerEmail');
    const registerPassword = localStorage.getItem('registerPassword');

    if (email === registerEmail && password === registerPassword) {
        alert('Login successful');
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid email or password';
    }
});

function goBack() {
    window.location.href = 'viewingbills.html'; 
}

function ccpayment() {

    window.location.href = 'creditcard.html';
}

function ewalletpayment() {

    window.location.href = 'ewallet.html';
}

function goEbills() {
    window.location.href = 'viewelectricbillchart.html'; }


function goPbills() {
     window.location.href = 'viewpowerbillchart.html'; }

function goWbills() {
        window.location.href = 'viewwaterbillchart.html'; }


function gopaynow() {

    window.location.href = 'paynowlogin.html';
}


function goccpayment2() {

    window.location.href = "creditcard2.html" ;
}




















