/* Toggle Menu */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

const toggleMenu = () => {
    if (!menuIcon || !navbar) return;
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    const expanded = menuIcon.getAttribute('aria-expanded') === 'true';
    menuIcon.setAttribute('aria-expanded', (!expanded).toString());
    if (!expanded) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
};

if (menuIcon && navbar) {
    // Initialize aria-expanded to false if not present
    if (!menuIcon.hasAttribute('aria-expanded')) {
        menuIcon.setAttribute('aria-expanded', 'false');
    }
    menuIcon.addEventListener('click', toggleMenu);
    menuIcon.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Close on nav link click (mobile) and lock scroll when menu open
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (!(target instanceof Element)) return;
        if (target.closest('header nav a')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            menuIcon.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        }
    });
}

/* Scroll Sections Active Link */
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const top = window.scrollY;
    sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector('header nav a[href="#' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
        }
    });

    /* Sticky Navbar */
    const header = document.querySelector('.header');
    if (header) header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove Toggle Icon and Navbar When Scrolling */
    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        menuIcon.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    }
});

/* Swiper */
if (window.Swiper) {
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
}

/* Typed.js */
if (window.Typed) {
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'Content Creator', 'Editor'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});
}

/* Scroll Reveal */
if (typeof ScrollReveal === 'function') {
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}

// Reduced motion preference
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (typeof ScrollReveal === 'function') {
        ScrollReveal({ reset: false, distance: '0px', duration: 0, delay: 0 });
    }
}
