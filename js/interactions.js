/* =============================================
   INTERACTIONS — 3D tilt, magnetic buttons,
                  enhanced cursor, unified ESC,
                  parallax, lightbox, back-to-top
   ============================================= */
'use strict';

import { closeProjectModal } from './projects.js';
import { closeResumeModal }  from './resume.js';

const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const cursor         = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

// ── 3D tilt + magnetic + enhanced cursor (performance-guarded) ──
if (!isLowEnd && !prefersReducedMotion) {

    /* 3D Tilt */
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -6;
            const rotateY = ((x - rect.width  / 2) / (rect.width  / 2)) *  6;
            requestAnimationFrame(() => {
                card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });
        });
        card.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                card.style.transform = '';
                card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
                setTimeout(() => { card.style.transition = ''; }, 500);
            });
        });
    });

    /* Magnetic buttons */
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width  / 2;
            const y = e.clientY - rect.top  - rect.height / 2;
            requestAnimationFrame(() => {
                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });
        });
        btn.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => { btn.style.transform = ''; });
        });
    });

    /* Enhanced cursor */
    const interactiveEls = document.querySelectorAll('a, button, .project__card, .resume__role-btn');
    interactiveEls.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (!cursor || !cursorFollower) return;
            cursor.style.width  = '30px';
            cursor.style.height = '30px';
            cursor.style.background = 'rgba(201,168,76,0.3)';
            cursorFollower.style.width  = '55px';
            cursorFollower.style.height = '55px';
        });
        el.addEventListener('mouseleave', () => {
            if (!cursor || !cursorFollower) return;
            cursor.style.width  = '20px';
            cursor.style.height = '20px';
            cursor.style.background = 'var(--primary-color)';
            cursorFollower.style.width  = '40px';
            cursorFollower.style.height = '40px';
        });
    });
}

// ── Parallax ──
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.hero__blob').forEach(el => {
        el.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});

// ── Lightbox ──
const lightbox        = document.getElementById('lightbox');
const lightboxClose   = lightbox?.querySelector('.lightbox__close');

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

function closeLightbox() {
    lightbox?.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ── Unified ESC handler ──
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    const pModal     = document.getElementById('project-modal');
    const csModal    = document.getElementById('casestudy-modal');
    const csClose    = document.getElementById('cs-close');
    const resumeModal = document.getElementById('resume-modal');

    if (csModal?.classList.contains('active')) {
        csClose?.click();
    } else if (pModal?.classList.contains('active')) {
        closeProjectModal();
    } else if (resumeModal?.classList.contains('active')) {
        closeResumeModal();
    } else if (lightbox?.classList.contains('active')) {
        closeLightbox();
    }
});

// ── Mobile navigation keyboard trap ──
const navMenu = document.getElementById('nav-menu');
if (navMenu) {
    const focusableEls = navMenu.querySelectorAll('a, button');
    const first = focusableEls[0];
    const last  = focusableEls[focusableEls.length - 1];
    navMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault(); last?.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault(); first?.focus();
            }
        }
        if (e.key === 'Escape') navMenu.classList.remove('show-menu');
    });
}
