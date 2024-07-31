function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const overlay = document.getElementById('overlay');
    menuIcon.classList.toggle('change');
    overlay.classList.toggle('show');
}

function updateContent() {
    $('nav h1').localize();
    $('.overlay-menu a').each(function() {
        $(this).localize();
    });
}

/* scroll animation */
function handleScroll() {
    const elements = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
            el.classList.add('fade-in');
        } else {
            el.classList.remove('fade-in');
        }
    });
}

window.addEventListener('scroll', handleScroll);
