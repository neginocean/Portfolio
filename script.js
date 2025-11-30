// ================== Toggle روز/شب ==================
const toggleModeSwitch = document.getElementById('toggleMode');

toggleModeSwitch.addEventListener('change', () => {
    if(toggleModeSwitch.checked){
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
});

// ================== Mobile Menu ==================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open");
});

// ================== Skill Bars Animation ==================
const skillBars = document.querySelectorAll('.skill-bar .progress div');

window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about');
    if(window.scrollY + window.innerHeight > aboutSection.offsetTop + 100){
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
});

// ================== Portfolio Scroll Animation ==================
const portfolioItems = document.querySelectorAll('.portfolio-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.2});

portfolioItems.forEach(item => observer.observe(item));
