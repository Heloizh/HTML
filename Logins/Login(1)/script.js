// Adiciona um listener ao formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Obtém os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

 
    if (username === 'user' && password === '1234') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password:\nPlease try again.');
    }
});





