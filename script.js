function showPage(page) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `<object type="text/html" data="${page}"></object>`;
}

// Funzioni per gestire il form delle poesie
function apriForm() {
    document.getElementById('formModal').style.display = 'block';
}

function chiudiForm() {
    document.getElementById('formModal').style.display = 'none';
}

function inviaRichiesta() {
    // Logica per inviare la richiesta
}

function aggiungiFoto() {
    // Logica per aggiungere una foto
}
// script.js
document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Il modulo non verrà inviato via email.');
});
// script.js
document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.open('url-della-tua-pagina-modulo.html', '_blank');
    alert('Il modulo non verrà inviato via email.');
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('open');
        overlay.classList.toggle('open');
    });

    overlay.addEventListener('click', function() {
        menu.classList.remove('open');
        overlay.classList.remove('open');
    });
});
