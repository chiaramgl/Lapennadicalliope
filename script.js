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

    // Gestione invio form con EmailJS
    const form = document.getElementById('poesie-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                alert('Poesia inviata con successo!');
                form.reset();
            }, function(error) {
                alert('Errore nell\'invio della poesia: ' + JSON.stringify(error));
            });
    });
});
