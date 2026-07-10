/* =============================================
   CONTACT FORM — Netlify Function + Resend
   ============================================= */
'use strict';

const form      = document.getElementById('contact-form');
const nameInput = document.getElementById('contact-name');
const msgInput  = document.getElementById('contact-message');
const msgError  = document.getElementById('contact-msg-error');
const submitBtn = document.getElementById('contact-submit');
const result    = document.getElementById('contact-result');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate
        const message = msgInput.value.trim();
        if (!message) {
            msgError.style.display = 'block';
            msgInput.focus();
            return;
        }
        msgError.style.display = 'none';

        // Loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        result.style.display = 'none';

        try {
            const res = await fetch('/.netlify/functions/contact', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name:    nameInput.value.trim() || 'Anonymous',
                    message: message,
                }),
            });

            let json = {};
            try { json = await res.json(); } catch { /* non-JSON response */ }

            if (res.ok && json.success) {
                result.textContent  = '✓ Message sent! I\'ll get back to you soon.';
                result.className    = 'form__message success';
                result.style.display = 'block';
                form.reset();
            } else {
                throw new Error(json.error || 'Something went wrong.');
            }
        } catch (err) {
            result.textContent   = `✕ ${err.message}`;
            result.className     = 'form__message error';
            result.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }
    });

    // Clear error on type
    msgInput.addEventListener('input', () => {
        if (msgInput.value.trim()) msgError.style.display = 'none';
    });
}
