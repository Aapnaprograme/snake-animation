/* Smooth Scroll for Navbar Links */
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* Active Menu Highlight on Scroll */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* Scroll to Top Button */
const topBtn = document.createElement('button');
topBtn.innerText = '⬆';
topBtn.style.position = 'fixed';
topBtn.style.bottom = '20px';
topBtn.style.right = '20px';
topBtn.style.padding = '10px 14px';
topBtn.style.border = 'none';
topBtn.style.borderRadius = '50%';
topBtn.style.cursor = 'pointer';
topBtn.style.background = '#2563eb';
topBtn.style.color = '#fff';
topBtn.style.display = 'none';

document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* Simple Welcome Alert (First Visit) */
if (!localStorage.getItem('visited')) {
    alert('Welcome to AapnaProgrammer 🚀 Start learning today!');
    localStorage.setItem('visited', 'true');
}


