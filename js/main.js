/* =============================================
   MAIN ENTRY POINT — orchestrates all features
   ============================================= */
'use strict';

import { debounce } from './utils.js';

// ── DOM Elements ──
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const themeToggle = document.getElementById('theme-toggle');
const backToTop = document.getElementById('back-to-top');
const loadingScreen = document.querySelector('.loading-screen');
const sections = document.querySelectorAll('.section');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project__card');
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

// ── Initialization ──
window.addEventListener('load', () => {
    setTimeout(() => loadingScreen?.classList.add('hidden'), 1000);
});

// ── Theme Toggle ──
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// ── Mobile Navigation ──
navToggle?.addEventListener('click', () => navMenu?.classList.add('show-menu'));
navClose?.addEventListener('click', () => navMenu?.classList.remove('show-menu'));
navLinks.forEach(link => link.addEventListener('click', () => navMenu?.classList.remove('show-menu')));

// ── Scroll Header ──
const scrollHeader = () => {
    if (window.scrollY >= 50) header?.classList.add('scroll-header');
    else header?.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

// ── Active Nav Link ──
const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);

// ── Smooth Scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const headerHeight = header?.offsetHeight || 0;
            const targetPosition = targetSection.offsetTop - headerHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// ── Typing Effect ──
const typingText = document.querySelector('.typing-text');
const phrases = [
    'AI/ML Engineer',
    'NLP & LLM Specialist',
    'Research Intern @ IIT Delhi',
    'Full Stack AI Developer'
];
let phraseIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 100;
function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        if (typingText) typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        if (typingText) typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }
    setTimeout(typeEffect, typingSpeed);
}
setTimeout(typeEffect, 1000);

// ── Project Filter ──
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.classList.remove('hide');
                card.style.animation = 'none';
                setTimeout(() => { card.style.animation = 'projectFadeIn 0.5s ease'; }, 10);
            } else {
                card.classList.add('hide');
            }
        });
    });
});

// ── Custom Cursor ──
if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
        setTimeout(() => {
            cursorFollower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
        }, 100);
    });
}

// ── Intersection Observer for animations ──
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            if (entry.target.classList.contains('skills')) {
                const skillCards = document.querySelectorAll('.skill-card');
                skillCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-card, .about__container, .projects__container').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
const skillsSection = document.querySelector('.skills');
if (skillsSection) observer.observe(skillsSection);

// ── Back to Top ──
const showBackToTop = () => {
    if (window.scrollY >= 400) backToTop?.classList.add('show');
    else backToTop?.classList.remove('show');
};
window.addEventListener('scroll', showBackToTop);
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Keyboard Shortcuts ──
let shortcutToastShown = false;
document.addEventListener('keydown', (e) => {
    const tag = document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    const pModal = document.getElementById('project-modal');
    const csModal = document.getElementById('casestudy-modal');
    const resumeModal = document.getElementById('resume-modal');
    if (pModal?.classList.contains('active') || csModal?.classList.contains('active') || resumeModal?.classList.contains('active')) return;

    switch(e.key.toLowerCase()) {
        case 'g':
            window.open('https://github.com/ashutoshroy02', '_blank');
            break;
        case 'r':
            document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            break;
        case 'p':
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            break;
        case 't':
            themeToggle?.click();
            break;
        default:
            return;
    }
    e.preventDefault();
});

setTimeout(() => {
    if (shortcutToastShown) return;
    const toast = document.getElementById('shortcut-toast');
    if (toast) {
        toast.classList.add('show');
        shortcutToastShown = true;
        setTimeout(() => toast.classList.remove('show'), 5000);
    }
}, 3000);

// ── Console Branding ──
console.log('%cHello, Developer!', 'color: #111111; font-size: 24px; font-weight: bold;');
console.log('%cThanks for checking out the code! Feel free to reach out if you want to collaborate.', 'color: #64748b; font-size: 14px;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #555555; font-size: 12px;');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
    document.body.classList.add('loaded');
});
