/* =============================================
   UTILS — helpers used across all modules
   ============================================= */
'use strict';

/**
 * Debounce a function call.
 * @param {Function} func
 * @param {number} wait  ms to wait
 */
export function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            clearTimeout(timeout);
            func(...args);
        }, wait);
    };
}

/**
 * Copy text to clipboard and show a brief toast.
 * @param {Event}  e
 * @param {string} text
 */
export function copyEmail(e, text) {
    navigator.clipboard.writeText(text);
    const toast = document.createElement('div');
    toast.textContent = 'Copied!';
    Object.assign(toast.style, {
        position: 'fixed', bottom: '20px', left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--primary-color, #111111)', color: 'white',
        padding: '10px 20px', borderRadius: '5px',
        zIndex: '10000', transition: 'opacity 0.3s',
    });
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 1000);
}

// Expose globally for inline onclick handlers
window.copyEmail = copyEmail;
