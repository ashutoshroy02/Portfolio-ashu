/* =============================================
   RESUME — role switcher, preview, modal
   ============================================= */
'use strict';

const roleNames = {
    'ml': 'AI/ML Engineer',
    'ds': 'Data Scientist',
    'py': 'Python Developer',
    'cv': 'AI/ML Researcher',
    'ai': 'AI Agent Developer',
    'fs': 'Full Stack Developer',
};

const resumeRoleBtns    = document.querySelectorAll('.resume__role-btn');
const resumeIframe      = document.getElementById('resume-iframe');
const resumePreviewTitle = document.getElementById('resume-preview-title');
const resumeDownloadBtn = document.getElementById('resume-download-btn');
const resumeFullscreenBtn = document.getElementById('resume-fullscreen-btn');
const resumeModal       = document.getElementById('resume-modal');
const resumeModalIframe = document.getElementById('resume-modal-iframe');
const resumeModalTitle  = document.getElementById('resume-modal-title');
const resumeModalDownload = document.getElementById('resume-modal-download');
const resumeModalClose  = document.getElementById('resume-modal-close');
const resumeFallback    = document.getElementById('resume-fallback');

let currentResumePdf = 'new_resume/ai_ml_engineer.pdf';
let currentRoleName  = 'AI/ML Engineer';

// ── Role switching ──
resumeRoleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        resumeRoleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const pdf      = btn.getAttribute('data-pdf');
        const role     = btn.getAttribute('data-role');
        const roleName = roleNames[role] || role;

        currentResumePdf = pdf;
        currentRoleName  = roleName;

        if (resumeIframe)      resumeIframe.src = pdf;
        if (resumePreviewTitle)
            resumePreviewTitle.innerHTML = `<i class="fas fa-file-pdf"></i> ${roleName} Resume`;
        if (resumeDownloadBtn) resumeDownloadBtn.href = pdf;

        // Animate container
        const container = document.getElementById('resume-preview-container');
        if (container) {
            container.style.animation = 'none';
            container.offsetHeight; // trigger reflow
            container.style.animation = 'fadeInUp 0.4s ease';
        }
    });
});

// ── Fullscreen ──
resumeFullscreenBtn?.addEventListener('click', () => {
    if (resumeModalIframe) resumeModalIframe.src = currentResumePdf;
    if (resumeModalTitle)  resumeModalTitle.textContent = `${currentRoleName} Resume`;
    if (resumeModalDownload) resumeModalDownload.href = currentResumePdf;
    resumeModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
});

export function closeResumeModal() {
    resumeModal?.classList.remove('active');
    if (resumeModalIframe) resumeModalIframe.src = '';
    document.body.style.overflow = 'auto';
}

resumeModalClose?.addEventListener('click', closeResumeModal);

// ── Mobile PDF fallback ──
resumeIframe?.addEventListener('load', () => {
    try {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isMobile) {
            if (resumeIframe)  resumeIframe.style.display = 'none';
            if (resumeFallback) resumeFallback.style.display = 'flex';
        }
    } catch (e) {}
});
