/* =============================================
   PROJECTS — data, modal, case study, demo
   ============================================= */
'use strict';

// ── Project data ──
export const projectsData = [
    {
        id: 1,
        title: 'Speech Emotion & Stress Detection',
        tagline: 'Multitask ML system for real-time emotion + stress analysis from audio',
        problem: 'Existing emotion recognition systems are single-task and single-corpus — they can\'t generalize across datasets or simultaneously predict both emotion category and stress intensity.',
        solution: 'Designed a multitask Wav2Vec2 + BiLSTM architecture that jointly trains on 5-class emotion classification and continuous stress regression across 3 corpora (RAVDESS, TESS, SAVEE) with unified preprocessing.',
        tech: ['Python', 'PyTorch', 'Wav2Vec2', 'BiLSTM', 'Hugging Face', 'Librosa'],
        contribution: 'Sole researcher — designed architecture, built preprocessing pipeline (VAD, silence removal, log-Mel spectrograms), trained and evaluated all models. First author on accepted paper.',
        results: '85.9% accuracy, 0.856 F1 score, RMSE 0.1268. Paper accepted at RECCAP 2026, IIT Palakkad. Outperformed SVM, Random Forest, and CNN baselines.',
        github: 'https://github.com/ashutoshroy02',
        hasCaseStudy: true,
        caseStudy: {
            intro: 'Speech carries rich paralinguistic information beyond words. This project explores whether a single model can simultaneously understand both discrete emotion categories and continuous stress levels from raw audio.',
            context: 'Most emotion detection systems train on a single dataset with rigid label sets. Real-world audio varies wildly — different speakers, recording conditions, and cultural contexts. We needed cross-corpus generalization.',
            research: 'Explored traditional ML (SVM, RF) with handcrafted features (MFCCs, pitch, energy), CNN architectures, and self-supervised models. Wav2Vec2 showed strongest transfer learning capability for audio understanding.',
            iterations: 'First attempt with raw MFCCs + SVM achieved ~62% accuracy. Adding data augmentation and BiLSTM improved to ~75%. The breakthrough came from using frozen Wav2Vec2 embeddings as features — jumping to 85.9%.',
            solution: 'Final architecture: Wav2Vec2 (frozen encoder) → BiLSTM (temporal modeling) → dual heads (classification + regression). Unified preprocessing pipeline handles 3 corpora seamlessly.',
            learnings: 'Self-supervised pre-training is the biggest lever for audio tasks. Cross-corpus evaluation is essential — single-corpus metrics are misleading. Multitask learning provides natural regularization.'
        }
    },
    {
        id: 2,
        title: 'Archaeological Search Engine (IIT Delhi)',
        tagline: 'Multimodal retrieval system for large-scale archaeological archives',
        problem: 'Archaeological archives contain thousands of scanned documents — handwritten manuscripts, printed texts, maps — with no structured search capability. Researchers spend hours manually browsing.',
        solution: 'Built SARCH: a multimodal pipeline combining OCR text extraction (Tesseract, Marker, Gemini OCR), image understanding, and hybrid retrieval (FAISS/Pinecone + Apache Solr) for semantic + keyword search.',
        tech: ['Python', 'FastAPI', 'FAISS', 'Pinecone', 'Apache Solr', 'OCR', 'LangChain'],
        contribution: 'Co-authored research paper with IIT Delhi. Built OCR benchmarking pipeline, designed hybrid retrieval architecture, deployed FastAPI services for real-time querying.',
        results: 'Enabled sub-second search over 10,000+ archaeological documents. Paper co-authored with IIT Delhi under review. Built end-to-end from scanned images to searchable knowledge base.',
        github: 'https://github.com/ashutoshroy02/TIE',
        hasCaseStudy: true,
        caseStudy: {
            intro: 'How do you make 10,000+ archaeological documents searchable when they exist only as scanned images with varying layouts, handwriting styles, and historical scripts?',
            context: 'IIT Delhi\'s archaeological archive contained decades of field notes, manuscripts, and maps. No digital search existed — researchers had to physically browse or rely on memory.',
            research: 'Evaluated 3 OCR systems across document types. Tesseract worked for printed text, Marker for structured layouts, Gemini OCR for handwritten/mixed content. No single OCR was best for all.',
            iterations: 'Pure keyword search (Solr) missed semantic meaning. Pure vector search (FAISS) missed exact terms like names/dates. The hybrid approach combining both finally delivered precise, relevant results.',
            solution: 'Per-document-class OCR selection → text chunking → dual indexing (dense vectors + sparse keywords) → unified query interface via FastAPI. Frontend integration for real-time responses.',
            learnings: 'Hybrid search is not optional for real-world retrieval. OCR is not a solved problem — document-specific strategy matters. Real research systems need production-grade engineering, not just notebooks.'
        }
    },
    {
        id: 3,
        title: 'Exam-Helper RAG',
        tagline: 'LLM-powered study assistant with multimodal retrieval',
        problem: 'Students study from scattered materials — PDFs, images, YouTube videos. No tool provides context-aware answers grounded in their specific study material.',
        solution: 'Built a RAG pipeline using LLaMA 3 with multimodal document ingestion (PDFs, images, YouTube transcripts). Dense retrieval via FAISS/Pinecone ensures context-precise, hallucination-reduced responses.',
        tech: ['Python', 'LLaMA 3', 'FAISS', 'Pinecone', 'LangChain', 'Streamlit', 'Groq API'],
        contribution: 'Sole developer. Designed ingestion pipeline, built vector indexing system, integrated Groq API for fast LLM inference, deployed via Streamlit for student-facing use.',
        results: 'Sub-second retrieval from large academic corpora. Supports 3 input modalities. Measurably reduced hallucination compared to direct LLM queries.',
        github: 'https://github.com/ashutoshroy02',
        hasCaseStudy: false,
    },
    {
        id: 4,
        title: 'Medical Chatbot (LLM)',
        tagline: 'Fine-tuned LLM for healthcare NLP with OCR integration',
        problem: 'Healthcare providers spend significant time interpreting unstructured medical reports. Patients wait longer for query resolution due to manual processes.',
        solution: 'Fine-tuned Mistral 7B via QLoRA (4-bit quantization) for medical NLU. Built Tesseract OCR pipeline to extract structured data from clinical report images for downstream inference.',
        tech: ['Python', 'Mistral 7B', 'QLoRA', 'Hugging Face', 'Tesseract OCR', 'FastAPI'],
        contribution: 'Built complete pipeline: OCR → text structuring → fine-tuned LLM inference → API deployment. Reduced compute cost vs. full fine-tuning while preserving accuracy.',
        results: 'Reduced patient query resolution time by ~40%. QLoRA achieved comparable accuracy to full fine-tuning at 4x lower compute cost.',
        github: 'https://github.com/ashutoshroy02',
        hasCaseStudy: false,
    },
    {
        id: 5,
        title: 'BeatBubble — Music Identification',
        tagline: 'Real-time audio fingerprinting for instant song recognition',
        problem: 'Identifying songs playing in noisy environments requires robust audio fingerprinting that works with short, low-quality audio snippets.',
        solution: 'Built end-to-end pipeline: audio capture → feature extraction → ACRCloud API fingerprinting → metadata retrieval. Cross-platform UI via Streamlit and Flutter.',
        tech: ['Python', 'ACRCloud API', 'Streamlit', 'Flutter', 'NumPy', 'Audio Processing'],
        contribution: 'Sole developer. Designed audio capture pipeline, integrated ACRCloud fingerprinting API, built cross-platform UI for both web and mobile.',
        results: 'Real-time identification in under 3 seconds. Works with ambient noise. Cross-platform deployment via Streamlit (web) and Flutter (mobile).',
        github: 'https://github.com/ashutoshroy02',
        hasDemo: true,
        hasCaseStudy: false,
    },
    {
        id: 6,
        title: 'Portfolio Website',
        tagline: 'Premium interactive portfolio with glassmorphism design',
        problem: 'Generic portfolio templates don\'t stand out. Recruiters see hundreds of similar-looking portfolios — needed something that demonstrates engineering craft.',
        solution: 'Built from scratch with vanilla HTML/CSS/JS. Glassmorphism design system, custom cursor, 3D tilt effects, multi-role resume selector, keyboard shortcuts, and smooth micro-interactions.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Glassmorphism', 'CSS Animations'],
        contribution: 'Complete design and development. Every animation, interaction, and design decision is custom — no templates, no frameworks.',
        results: 'Premium feel with smooth 60fps animations. Mobile responsive. SEO optimized with structured data. Dark/light mode with persistence.',
        github: 'https://github.com/ashutoshroy02/Portfolio-ashu',
        hasCaseStudy: false,
    }
];

// ── Modal DOM ──
const pModal      = document.getElementById('project-modal');
const pModalBody  = document.getElementById('pmodal-body');
const pModalClose = document.getElementById('pmodal-close');
const pModalOverlay = document.getElementById('pmodal-overlay');
const pModalPrev  = document.getElementById('pmodal-prev');
const pModalNext  = document.getElementById('pmodal-next');
const pModalCounter = document.getElementById('pmodal-counter');

let currentProjectIdx = 0;

// ── Render project modal ──
function renderProjectModal(idx) {
    const p = projectsData[idx];
    currentProjectIdx = idx;
    if (pModalCounter) pModalCounter.textContent = `${idx + 1} / ${projectsData.length}`;

    const demoHTML = p.hasDemo ? `
    <div class="pmodal__section">
        <h3><i class="fas fa-play-circle"></i> Try Live Demo</h3>
        <div class="pmodal__demo">
            <p>Simulate BeatBubble's audio recognition pipeline</p>
            <button class="pmodal__demo-btn" id="demo-btn" onclick="runBeatBubbleDemo()">
                <i class="fas fa-microphone"></i> Simulate Audio Upload
            </button>
            <div class="pmodal__demo-output" id="demo-output"></div>
        </div>
    </div>` : '';

    const caseStudyLink = p.hasCaseStudy
        ? `<a href="#" class="pmodal__casestudy" onclick="openCaseStudy(${idx}); return false;"><i class="fas fa-book-open"></i> View Case Study</a>`
        : '';

    if (pModalBody) {
        pModalBody.innerHTML = `
        <div class="pmodal__hero">
            <h2>${p.title}</h2>
            <p class="pmodal__tagline">${p.tagline}</p>
        </div>
        <div class="pmodal__sections">
            <div class="pmodal__section">
                <h3><i class="fas fa-exclamation-circle"></i> Problem</h3>
                <p>${p.problem}</p>
            </div>
            <div class="pmodal__section">
                <h3><i class="fas fa-lightbulb"></i> Solution</h3>
                <p>${p.solution}</p>
            </div>
            <div class="pmodal__section">
                <h3><i class="fas fa-layer-group"></i> Tech Stack</h3>
                <div class="pmodal__badges">${p.tech.map(t => `<span class="pmodal__badge">${t}</span>`).join('')}</div>
            </div>
            <div class="pmodal__section">
                <h3><i class="fas fa-user-check"></i> My Contribution</h3>
                <p>${p.contribution}</p>
            </div>
            <div class="pmodal__section">
                <h3><i class="fas fa-chart-bar"></i> Results</h3>
                <p>${p.results}</p>
            </div>
            ${demoHTML}
            <div class="pmodal__section">
                <h3><i class="fas fa-external-link-alt"></i> Links</h3>
                <div class="pmodal__links">
                    <a href="${p.github}" target="_blank" rel="noopener" class="pmodal__github"><i class="fab fa-github"></i> GitHub</a>
                    ${caseStudyLink}
                </div>
            </div>
        </div>`;
    }

    pModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (pModalBody) pModalBody.scrollTop = 0;
}

export function closeProjectModal() {
    pModal?.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ── Wire up project card clicks ──
document.querySelectorAll('.project__card').forEach((card, idx) => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        renderProjectModal(idx);
    });
});

// ── Preview buttons (stop propagation, let card handle it) ──
document.querySelectorAll('.preview-btn').forEach(btn => {
    btn.addEventListener('click', (e) => e.stopPropagation());
});

pModalClose?.addEventListener('click', closeProjectModal);
pModalOverlay?.addEventListener('click', closeProjectModal);

// ── Carousel navigation ──
pModalPrev?.addEventListener('click', () => renderProjectModal((currentProjectIdx - 1 + projectsData.length) % projectsData.length));
pModalNext?.addEventListener('click', () => renderProjectModal((currentProjectIdx + 1) % projectsData.length));

document.addEventListener('keydown', (e) => {
    if (!pModal?.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') pModalPrev?.click();
    if (e.key === 'ArrowRight') pModalNext?.click();
});

// ── BeatBubble demo ──
window.runBeatBubbleDemo = function () {
    const btn = document.getElementById('demo-btn');
    const output = document.getElementById('demo-output');
    if (!btn || !output) return;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing audio...';
    btn.disabled = true;

    const songs = [
        { title: 'Blinding Lights', artist: 'The Weeknd', confidence: '97.2%' },
        { title: 'Bohemian Rhapsody', artist: 'Queen', confidence: '99.1%' },
        { title: 'Shape of You', artist: 'Ed Sheeran', confidence: '95.8%' },
        { title: 'Tum Hi Ho', artist: 'Arijit Singh', confidence: '98.4%' },
        { title: 'Lose Yourself', artist: 'Eminem', confidence: '96.7%' }
    ];
    const song = songs[Math.floor(Math.random() * songs.length)];

    setTimeout(() => {
        output.innerHTML = `
            <div style="text-align:left;">
                <strong style="color:var(--primary-color);">✓ Match Found!</strong><br><br>
                🎵 <strong>${song.title}</strong><br>
                🎤 ${song.artist}<br>
                📊 Confidence: ${song.confidence}<br><br>
                <span style="color:var(--text-light);font-size:0.8rem;">Simulated ACRCloud API response · Real pipeline uses audio fingerprinting</span>
            </div>`;
        output.classList.add('active');
        btn.innerHTML = '<i class="fas fa-redo"></i> Try Again';
        btn.disabled = false;
        btn.onclick = () => {
            output.classList.remove('active');
            window.runBeatBubbleDemo();
        };
    }, 2000);
};

// ── Case Study Modal ──
const csModal = document.getElementById('casestudy-modal');
const csBody  = document.getElementById('cs-body');
const csClose = document.getElementById('cs-close');

window.openCaseStudy = function (idx) {
    const p = projectsData[idx];
    if (!p?.caseStudy) return;
    const cs = p.caseStudy;
    if (csBody) {
        csBody.innerHTML = `
        <h2>${p.title} — Case Study</h2>
        <div class="cs__section"><h3>Introduction</h3><p>${cs.intro}</p></div>
        <div class="cs__section"><h3>Problem Context</h3><p>${cs.context}</p></div>
        <div class="cs__section"><h3>Research & Exploration</h3><p>${cs.research}</p></div>
        <div class="cs__section">
            <h3>Iterations & Failures</h3>
            <p>${cs.iterations}</p>
            <div class="cs__insight">"The biggest improvements came not from better models, but from better data understanding."</div>
        </div>
        <div class="cs__section"><h3>Final Solution</h3><p>${cs.solution}</p></div>
        <div class="cs__section">
            <h3>Results & Learnings</h3>
            <p>${cs.learnings}</p>
            <div class="cs__insight">"Ship early, measure everything, iterate based on data — not assumptions."</div>
        </div>`;
    }
    csModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
};

csClose?.addEventListener('click', () => {
    csModal?.classList.remove('active');
    document.body.style.overflow = pModal?.classList.contains('active') ? 'hidden' : 'auto';
});
