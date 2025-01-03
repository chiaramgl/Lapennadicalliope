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

    // Gestione invio form senza inviare richieste reali
    const form = document.getElementById('poesie-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Poesia inviata con successo!');
        form.reset();
    });

    // Effetto scroll per l'immagine grande sulla home page
    const largeImage = document.querySelector('.large-image img');
    window.addEventListener('scroll', function() {
        const scrollValue = window.scrollY;
        largeImage.style.transform = `translateY(${scrollValue * 0.5}px)`;
    });
});
