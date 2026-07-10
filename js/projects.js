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
        github: 'https://github.com/ashutoshroy02/emotion-stress-ml',
        live: 'https://huggingface.co/ashutoshroy02/hybrid-wave2vec-LSTM-emotion-stress-RAVDESS',
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
        github: 'https://github.com/ashutoshroy02/IITDTIE',
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
        title: 'Exam-Helper Agentic RAG',
        tagline: 'Evolved from plain RAG to multi-step agentic retrieval system',
        problem: 'Students study from scattered sources — PDFs, images, YouTube. Plain RAG answers are shallow when questions need multi-hop reasoning across sources.',
        solution: 'Started as LLaMA 3 RAG with FAISS/Pinecone. Evolved into Agentic RAG using LangGraph — dynamic multi-step retrieval, tool use, and context-aware planning. Multimodal ingestion for PDFs, images, YouTube transcripts.',
        tech: ['Python', 'LLaMA 3', 'LangGraph', 'FAISS', 'Pinecone', 'LangChain', 'FastAPI', 'Streamlit', 'Groq API'],
        contribution: 'Sole developer. Designed ingestion pipeline, vector indexing, LangGraph agent loops, Groq API inference. Deployed Streamlit frontend + FastAPI backend.',
        results: '~40% hallucination reduction. Sub-second retrieval. Supports 3 input modalities. Multi-step reasoning for complex queries.',
        github: 'https://github.com/ashutoshroy02/Exam-Helper',
        live: 'https://good-boy.streamlit.app/',
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
        results: '~40% reduction in query resolution time. QLoRA cut GPU memory ~75% vs. full fine-tune. Processed 1,000+ unstructured medical reports.',
        github: 'https://github.com/ashutoshroy02/Medical-chatbot',
        live: 'https://huggingface.co/fhai50032/BeagleLake-7B',
        hasCaseStudy: false,
    },
    {
        id: 5,
        title: 'Industrial Defect Detection',
        tagline: 'Real-time computer vision for automated quality inspection',
        problem: 'Manual visual inspection in manufacturing is slow, inconsistent, and misses defects under varying lighting — causing quality failures at scale.',
        solution: 'Fine-tuned YOLOv8 on custom annotated industrial dataset covering 4 defect types. GPU-accelerated inference pipeline with augmentation for lighting robustness. Automated reporting and analytics dashboard.',
        tech: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'CUDA'],
        contribution: 'Built end-to-end: dataset collection and annotation (4 defect classes), YOLOv8 fine-tuning, CUDA inference pipeline, defect reporting and visualization module.',
        results: 'High detection accuracy on custom dataset. Real-time low-latency GPU inference. Automated defect reporting replacing manual inspection effort.',
        github: 'https://github.com/ashutoshroy02/Industrial-Defect-Detection-System',
        hasCaseStudy: false,
    },
    {
        id: 6,
        title: 'Skills-for-Agents',
        tagline: 'Open-source modular instruction ecosystem for multi-task LLM agents',
        problem: 'Multi-task LLM agents hit instruction conflicts when multiple skills (voice, density, craft) run concurrently — no standard protocol exists to resolve domain ownership.',
        solution: 'Built production-ready modular skill system where each skill owns exactly one domain. Designed Skills Interoperability Protocol (SIP) to resolve conflicts, enable shared memory, and allow composable tool calling across agents.',
        tech: ['Python', 'LangGraph', 'MCP', 'AI Agents', 'SIP Protocol'],
        contribution: 'Sole architect. Designed SIP conflict resolution protocol, built 10+ modular skills, implemented shared memory and tool calling interfaces. Open-sourced for community use.',
        results: '~60% reduction in prompt duplication. Conflict-free concurrent multi-skill execution. Reusable across different agent architectures.',
        github: 'https://github.com/ashutoshroy02/skills-for-agents',
        hasCaseStudy: false,
    },
    {
        id: 7,
        title: 'Shopping Assistant Agent',
        tagline: 'Multi-agent LangGraph system for automated product search and recommendations',
        problem: 'Users waste time searching, comparing, and evaluating products across multiple sources — no unified intelligent assistant exists for the full shopping workflow.',
        solution: 'Multi-agent system using LangGraph orchestrating specialized agents for product search, comparison, review summarization, and recommendations. MCP servers for secure tool calling with product APIs.',
        tech: ['Python', 'LangGraph', 'MCP', 'Claude 3.5', 'FastAPI'],
        contribution: 'Built orchestration layer, MCP server integrations, agent reasoning loops, and recommendation pipeline.',
        results: '~35% faster response time vs. single-agent baseline. Improved recommendation quality through multi-agent reasoning.',
        github: 'https://github.com/ashutoshroy02/shopping-assistant-agent-',
        hasCaseStudy: false,
    },
    {
        id: 8,
        title: 'InterviewPrep Platform',
        tagline: 'Open-source AI/ML interview prep with 700+ curated questions',
        problem: 'No single free resource covers AI/ML interview prep comprehensively — especially for FAANG-level ML, LLM, RAG, and CV questions with structured study paths.',
        solution: 'Built full-stack platform (FastAPI + SQLite backend, then rebuilt as SEO-optimized static Astro site). 700+ curated questions across Python, ML, DL, NLP, LLMs, RAG, CV, SQL, HR. Company-specific tracks, 12-week roadmap, flashcards, mock interviews.',
        tech: ['Astro', 'JavaScript', 'HTML/CSS', 'Python', 'FastAPI', 'SQLite', 'SEO'],
        contribution: 'Solo built both iterations — backend API platform (2025) and open-source static rebuild (2026). All content curation, platform design, and SEO optimization.',
        results: '95+ Lighthouse performance score. FAANG + Indian IT company tracks. Light/dark mode, schema markup, fully responsive.',
        github: 'https://github.com/ashutoshroy02/InterviewPrep',
        live: 'https://interview-prep-lac.vercel.app/',
        hasCaseStudy: false,
    },
    {
        id: 9,
        title: 'BulkyMail',
        tagline: 'Automated bulk email tool with dynamic personalization',
        problem: 'Sending 100+ personalized outreach emails manually takes hours — generic bulk tools lack per-recipient personalization (name, role, company) that drives responses.',
        solution: 'Streamlit app with dynamic templating engine supporting name/role/company variables. SMTP/API integration for reliable delivery at scale. Used for internship outreach campaigns.',
        tech: ['Python', 'Streamlit', 'SMTP'],
        contribution: 'Built complete tool. Designed template engine, SMTP integration, and Streamlit UI.',
        results: '100+ personalized emails in minutes. Contributed to successful internship conversions for multiple users.',
        github: 'https://github.com/ashutoshroy02/BULK-MAIL',
        live: 'https://bulkymail.streamlit.app/',
        hasCaseStudy: false,
    },
    {
        id: 10,
        title: 'URL Shortener',
        tagline: 'Scalable URL shortener with Redis caching and analytics',
        problem: 'Standard URL shorteners lack caching — high traffic causes slow response times and poor scalability.',
        solution: 'REST API with custom short links, Redis caching layer, and analytics. PostgreSQL for persistence, Docker for deployment.',
        tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
        contribution: 'Built full backend: REST API design, Redis caching layer, analytics module, Docker containerization.',
        results: '~40% response time reduction via Redis cache. Production-ready with Docker deployment.',
        github: 'https://github.com/ashutoshroy02/Chota-link',
        hasCaseStudy: false,
    },
    {
        id: 11,
        title: 'Netflix Data Analysis',
        tagline: 'EDA on 8,000+ Netflix titles for content trend insights',
        problem: 'Raw Netflix catalogue data lacks structure for business insight — genre trends, rating patterns, regional content gaps are not visible without systematic analysis.',
        solution: 'Cleaned and analyzed 8,000+ title dataset. Built visualizations identifying trends in genres, ratings, countries, release years. Enhanced open-source base project with deeper analysis.',
        tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
        contribution: 'Data cleaning, EDA, visualization design, and business insight extraction.',
        results: 'Comprehensive trend analysis across genre, geography, ratings, and time. Visualizations suitable for data-driven content strategy.',
        github: 'https://github.com/ashutoshroy02/Netflix-Data-Analysis',
        hasCaseStudy: false,
    },
    {
        id: 12,
        title: 'BeatBubble — Music Identification',
        tagline: 'Real-time audio fingerprinting for instant song recognition',
        problem: 'Identifying songs playing in noisy environments requires robust audio fingerprinting that works with short, low-quality audio snippets.',
        solution: 'Built end-to-end pipeline: audio capture → feature extraction → ACRCloud API fingerprinting → metadata retrieval. Cross-platform UI via Streamlit and Flutter.',
        tech: ['Python', 'ACRCloud API', 'Streamlit', 'Flutter', 'NumPy', 'Audio Processing'],
        contribution: 'Sole developer. Designed audio capture pipeline, integrated ACRCloud fingerprinting API, built cross-platform UI for both web and mobile.',
        results: 'Real-time identification in under 3 seconds. Works with ambient noise. Cross-platform deployment.',
        github: 'https://github.com/ashutoshroy02/Beat-Bubble',
        live: 'https://beatbubblefind.streamlit.app/',
        hasDemo: true,
        hasCaseStudy: false,
    },
    {
        id: 13,
        title: 'Portfolio Website',
        tagline: 'Custom portfolio with minimal design and smooth interactions',
        problem: 'Generic portfolio templates don\'t stand out. Needed something that demonstrates engineering craft.',
        solution: 'Built from scratch with vanilla HTML/CSS/JS. Minimal design system, custom cursor, multi-role resume selector, keyboard shortcuts, and smooth micro-interactions.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        contribution: 'Complete design and development. Every animation, interaction, and design decision is custom.',
        results: 'Smooth 60fps animations. Mobile responsive. SEO optimized with structured data. Dark/light mode.',
        github: 'https://github.com/ashutoshroy02/Portfolio-ashu',
        hasCaseStudy: false,
    },
    {
        id: 14,
        title: 'Fixed QR Code Generator',
        tagline: 'Static QR codes that never expire — no redirects, no accounts',
        problem: 'Most QR generators use redirect URLs that break when the service shuts down or the subscription expires.',
        solution: 'Static QR codes generated entirely client-side — no backend, no redirect, no expiry. Supports URLs, WiFi, vCards, email, and phone.',
        tech: ['React', 'Lovable', 'QR Library'],
        contribution: 'Vibe coded — designed and shipped end-to-end.',
        results: 'Live at fixedqrcodegenerator.lovable.app. Free, instant, permanent QR codes.',
        github: 'https://fixedqrcodegenerator.lovable.app/',
        hasCaseStudy: false,
    },
    {
        id: 15,
        title: 'UrbanBite',
        tagline: 'Food & restaurant discovery web app',
        problem: 'Wanted a clean, fast food discovery UI without the bloat of Zomato/Swiggy.',
        solution: 'Minimal restaurant and menu browsing app with urban aesthetic. Vibe coded from idea to deploy.',
        tech: ['React', 'Lovable', 'UI/UX'],
        contribution: 'Vibe coded — full design and frontend.',
        results: 'Live at urbanbite89.lovable.app.',
        github: 'https://urbanbite89.lovable.app/',
        hasCaseStudy: false,
    },
    {
        id: 16,
        title: 'Reset Vibes Hub',
        tagline: 'Wellness and mental reset platform',
        problem: 'Needed a calming space for mood tools and chill-out resources.',
        solution: 'Wellness platform with soft UI, mood reset tools, and curated calming content. Vibe coded.',
        tech: ['React', 'Lovable', 'UI/UX'],
        contribution: 'Vibe coded — full design and frontend.',
        results: 'Live at reset-vibes-hub.lovable.app.',
        github: 'https://reset-vibes-hub.lovable.app/',
        hasCaseStudy: false,
    },
    {
        id: 17,
        title: 'Indiglow',
        tagline: 'Beauty & skincare discovery app',
        problem: 'Indie skincare brands have no unified discovery platform with clean UX.',
        solution: 'Elegant beauty app with glowing aesthetic — product browsing, routines, and indie brand spotlight. Vibe coded.',
        tech: ['React', 'Lovable', 'UI/UX'],
        contribution: 'Vibe coded — full design and frontend.',
        results: 'Live at indigloww.lovable.app.',
        github: 'https://indigloww.lovable.app/',
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

    const liveLink = p.live
        ? `<a href="${p.live}" target="_blank" rel="noopener" class="pmodal__live"><i class="fas fa-external-link-alt"></i> Live / Model</a>`
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
                    ${liveLink}
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
document.querySelectorAll('.project__card').forEach((card) => {
    card.addEventListener('click', (e) => {
        // ignore clicks on <a> tags (external links)
        if (e.target.closest('a')) return;
        const previewBtn = card.querySelector('.preview-btn');
        const projectNum = previewBtn ? parseInt(previewBtn.getAttribute('data-project'), 10) : null;
        if (projectNum) {
            const idx = projectsData.findIndex(p => p.id === projectNum);
            if (idx !== -1) renderProjectModal(idx);
        }
    });
});

// ── Preview eye buttons — open modal directly ──
document.querySelectorAll('.preview-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent card handler double-firing
        const projectNum = parseInt(btn.getAttribute('data-project'), 10);
        const idx = projectsData.findIndex(p => p.id === projectNum);
        if (idx !== -1) renderProjectModal(idx);
    });
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
