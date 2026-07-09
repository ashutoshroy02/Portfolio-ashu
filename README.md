# Ashutosh Roy — Portfolio

> AI/ML Engineer · NLP & LLM Specialist · Research Intern @ IIT Delhi  
> Live: [mitovoid.netlify.app](https://mitovoid.netlify.app)

---

## What this is

A hand-crafted personal portfolio — zero frameworks, zero templates. Built from scratch with vanilla HTML, CSS, and JavaScript. Every interaction, animation, and design decision is intentional.

---

## Project Structure

```
portfolio_ashu/
├── index.html            # Single-page entry point
│
├── css/                  # Modular stylesheets
│   ├── variables.css     # Design tokens (colors, spacing, fonts)
│   ├── base.css          # Reset, globals, utilities, scrollbar, cursor
│   ├── header.css        # Navigation bar + mobile menu
│   ├── hero.css          # Hero section + typing animation
│   ├── resume.css        # Resume role-switcher + PDF preview + modal
│   ├── projects.css      # Project cards, filter, detail modal, case study
│   └── sections.css      # About, Skills, Contact, Footer
│
├── js/                   # Modular scripts (ES modules)
│   ├── utils.js          # Debounce, copyEmail helpers
│   ├── main.js           # Core UI: nav, theme, scroll, typing, observer
│   ├── resume.js         # Resume role switcher + fullscreen modal
│   ├── projects.js       # Project data, detail modal, BeatBubble demo, case study
│   └── interactions.js   # 3D tilt, magnetic buttons, cursor, parallax, ESC handler
│
├── assets/               # Images and icons
│   ├── profileimage.jpg
│   ├── cursor_sword.png
│   ├── bg_satellite.png
│   └── *.png / *.webp    # Project screenshots
│
├── new_resume/           # Role-specific PDF resumes
│   ├── ai_ml_engineer.pdf
│   ├── Data_Scientist.pdf
│   ├── software_developer.pdf
│   ├── Researcher - nlp, cv , voice.pdf
│   ├── Ai agent and Gen AI engineer.pdf
│   └── Full Stack Developer.pdf
│
├── style.css             # Legacy monolith (kept as fallback)
├── script.js             # Legacy monolith (kept as fallback)
├── robots.txt
├── sitemap.xml
├── idea.md               # Design spec — how to replicate this
└── README.md
```

---

## Features

- **Multi-role resume switcher** — 6 tailored PDFs with inline preview and download
- **Project detail modal** — carousel with prev/next navigation, tech stack, results, GitHub links
- **Case study modal** — deep dive into 2 featured projects (Speech Emotion, Archaeological Search)
- **BeatBubble live demo** — simulated ACRCloud audio fingerprinting
- **Glassmorphism design system** — warm parchment (light) / near-black (dark) with gold accent
- **Custom sword cursor** — PNG cursor with circular follower ring
- **3D card tilt** — perspective tilt on hover using `mousemove`
- **Magnetic CTAs** — buttons drift toward cursor
- **Typing effect** — 4-phrase typewriter loop
- **Dark / light mode** — persisted via `localStorage`
- **Keyboard shortcuts** — `G` GitHub · `R` Resume · `P` Projects · `T` Theme · `ESC` close modals
- **Scroll animations** — IntersectionObserver with stagger on skill cards
- **SEO** — structured data (JSON-LD Person schema), Open Graph, Twitter Card, sitemap, robots.txt
- **Performance** — debounced scroll events, lazy-loaded images, reduced-motion support

---

## Running locally

No build step required. Use a local server (needed for PDF iframes — `file://` blocks them):

**VS Code:**
Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) → right-click `index.html` → Open with Live Server

**Python:**
```bash
cd "Z:\TO DO\codes\projects\portfolio\portfolio_ashu"
python -m http.server 8000
# open http://localhost:8000
```

---

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `G` | Open GitHub |
| `R` | Scroll to Resume |
| `P` | Scroll to Projects |
| `T` | Toggle theme |
| `ESC` | Close any open modal |
| `← →` | Navigate projects (modal open) |

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, grid, flexbox, keyframes) |
| Logic | Vanilla JavaScript ES2020 (modules) |
| Icons | Font Awesome 6.4 |
| Fonts | Inter (Google Fonts) |
| Hosting | Netlify |
| Analytics | Google Analytics (gtag) |
| SEO | JSON-LD, Open Graph, sitemap.xml |

---

## Resumes

Each PDF is tailored for a specific role:

| Role | File |
|------|------|
| AI/ML Engineer | `new_resume/ai_ml_engineer.pdf` |
| Data Scientist | `new_resume/Data_Scientist.pdf` |
| Python / Software Developer | `new_resume/software_developer.pdf` |
| Researcher (NLP, CV, Voice) | `new_resume/Researcher - nlp, cv , voice.pdf` |
| AI Agent & Gen AI Engineer | `new_resume/Ai agent and Gen AI engineer.pdf` |
| Full Stack Developer | `new_resume/Full Stack Developer.pdf` |

---

## Contact

- Email: ashu2003roy@gmail.com
- LinkedIn: [ashutosh-roy-41618b202](https://www.linkedin.com/in/ashutosh-roy-41618b202/)
- GitHub: [ashutoshroy02](https://github.com/ashutoshroy02)
- YouTube: [channel](https://www.youtube.com/channel/UCk64HxDSenxzRgqNRUhBq3g/)
- Instagram: [@atrexplains](https://www.instagram.com/atrexplains/)

---

© Ashutosh Roy. Made with ❤️
