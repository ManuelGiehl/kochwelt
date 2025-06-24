// Burger Menu ein und ausblenden
function toggleMenu() {
    var menu = document.getElementById("menuButton");
    menu.classList.toggle("d-none");
}

// Kontaktformular zurücksetzen
function resetContactForm() {
    var contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.reset();
    }
}

// Event-Listener für das Kontaktformular
document.addEventListener('DOMContentLoaded', resetContactForm);
window.addEventListener('pageshow', resetContactForm);

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('cheesecakeBtn');
    if (btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'cheesecake.html';
        });
    }
    
    // Kontaktformular Event-Listener
    var contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Formspree wird das Formular automatisch verarbeiten
            // Nach erfolgreichem Absenden wird zur Erfolgsseite weitergeleitet
            setTimeout(function() {
                window.location.href = 'success.html';
            }, 100);
        });
    }
});
