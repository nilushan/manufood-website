document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    const navbar = document.querySelector('.navbar');

    // Initially ensure navbar is closed on mobile
    if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
        nav.classList.remove('active');
    }

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navbar.classList.contains('active')) {
            nav.classList.remove('active');
            navbar.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});