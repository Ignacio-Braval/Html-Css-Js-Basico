// Codigo para que aparezca un menu lateral cuando la resolución sea
// menor a 700px
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

// Implementación de Scroll Reveal
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-card', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});