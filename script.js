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