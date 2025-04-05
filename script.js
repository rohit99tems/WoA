// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.slide-in, .fade-in');
    elements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elTop < windowHeight - 100) {
            el.style.animation = el.classList.contains('slide-in') ? 'slideIn 0.8s ease forwards' : 'fadeIn 1s ease forwards';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);