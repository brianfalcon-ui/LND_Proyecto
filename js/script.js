// Cierra el menú hamburguesa en móvil al pulsar un enlace del nav
document.querySelectorAll('.nav-links a').forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        document.getElementById('menu-toggle').checked = false;
    });
});