# idea.md — Design Spec & Implementation Blueprint

> Everything someone needs to understand this portfolio and replicate it from scratch.

---

## The Concept

The goal was a portfolio that **demonstrates engineering craft**, not just lists skills. Most developer portfolios look the same — a hero section, a grid of cards, a contact form. This one needed to feel like a product.

Design philosophy:
- Every micro-interaction should have a purpose
- The visual system should feel cohesive, not assembled from parts
- It should work beautifully on desktop and be functional on mobile
- Zero frameworks — if it can't be done in vanilla HTML/CSS/JS, rethink the approach

---

## Visual Theme

### Style
**Glassmorphism** — frosted glass panels over a warm background with depth through blur and subtle borders.

### Color Palette

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--primary-color` | `#C9A84C` (gold) | same | Accents, gradients, icons |
| `--accent-color`  | `#E8D48B` (light gold) | same | Gradient endpoints |
| `--bg-primary`    | `#F5F0E8` (warm cream) | `#0D0D0D` (near black) | Page background |
| `--bg-secondary`  | `#EAE5DC` | `#161616` | Cards, sections |
| `--glass-bg`      | `rgba(245,240,232,0.6)` | `rgba(13,13,13,0.8)` | Glassmorphism surfaces |
| `--glass-border`  | `rgba(201,168,76,0.15)` | `rgba(201,168,76,0.12)` | Card borders |

The warm cream ↔ near-black contrast is intentional — softer on eyes than pure white/black.

### Typography
- **Font**: Inter (Google Fonts) — clean, modern, highly legible
- **Monospace**: Courier New — used for the nav logo `<Ashutosh Roy />`
- **Sizes**: 3.5rem hero title → 2.5rem section titles → 1rem body

### Background
A translucent satellite image (`assets/bg_satellite.png`) sits behind the entire page at `opacity: 0.06` — adds texture without distraction.

### Cursor
Custom sword PNG (`assets/cursor_sword.png`) with a gold circular follower ring — only on desktop. Hidden on mobile.

---

## Section Breakdown

### 1. Header / Navigation
- Fixed glassmorphism header with blur
- Logo: monospace styled `<Name />`
- Nav links with animated underline on hover/active
- Theme toggle button (moon/sun icon)
- Mobile: slide-in drawer from right with focus trap

### 2. Hero Section
- 2-column grid (content + image)
- Typing effect cycling through 4 roles
- Profile image in circular frame with gold border + float animation
- Magnetic CTA buttons (drift toward cursor)
- Social links row
- Scroll-down indicator with bounce animation

### 3. Resume Section
- 6 role buttons in a responsive grid (4 cols → 2 cols → 1 col)
- Each button has icon + role name + subtitle
- Active state: gold gradient border + background tint
- PDF iframe preview with 600px height
- Header: title + Fullscreen + Download buttons
- Fullscreen modal overlays the entire screen
- Mobile fallback: hide iframe, show download link

### 4. About Section
- 2-column grid (image + text)
- 3 subtitle blocks describing background
- CTA linking to Resume section
- Profile image in glass card

### 5. Projects Section
- Filter buttons: All / ML·AI / NLP·LLMs / Tools·Apps
- Responsive card grid (auto-fit, min 300px)
- Each card: thumbnail, overlay on hover (eye + external link), title, description, tech tags
- Click anywhere on card → opens Project Detail Modal
- **Project Detail Modal**: full-screen carousel
  - Prev/Next navigation + counter
  - Sections: Problem, Solution, Tech Stack (badges), Contribution, Results, Links
  - Optional: Live Demo (BeatBubble), Case Study link
  - Arrow keys for navigation
- **Case Study Modal**: stacked on top of project modal
  - Sections: Introduction, Problem Context, Research, Iterations/Failures, Solution, Learnings
  - Blockquote-style insight callouts

### 6. Skills Section
- 18 skill cards in auto-fit grid (min 180px)
- Stagger animation on scroll into view
- Hover: lift + scale + icon spin + shine sweep
- Each card: FA icon + skill name

### 7. Contact Section
- Centered card layout (email + WhatsApp)
- Email copies to clipboard on click
- No form (removed to avoid spam without backend)

### 8. Footer
- 3-column grid: description, quick links, social icons
- Social icon hover: gold background + lift

---

## JavaScript Features

### Core (main.js)
| Feature | How |
|---------|-----|
| Loading screen | Hide after 1s on `window.load` |
| Theme toggle | `classList.toggle('dark-mode')` + `localStorage` |
| Mobile nav | `classList.add('show-menu')` + focus trap |
| Scroll header | Add shadow class at 50px scroll |
| Active nav link | IntersectionObserver on sections |
| Smooth scroll | Override `<a href="#...">` default |
| Typing effect | Timeout loop with delete/type phases |
| Project filter | `classList.add('hide')` + re-trigger animation |
| Skills animation | IntersectionObserver + stagger setTimeout |
| Back to top | Show/hide at 400px, scroll to 0 |
| Keyboard shortcuts | `keydown` listener (g/r/p/t) |
| Debounce | All scroll handlers wrapped |

### resume.js
- Role button click → update `iframe.src`, title text, download href
- Fullscreen button → clone PDF path into modal iframe
- Close → remove `active`, restore overflow

### projects.js
- All project data in a single `projectsData` array (easy to add more projects)
- `renderProjectModal(idx)` builds HTML from data and injects into modal
- Carousel: prev/next buttons wrap around with modulo
- `runBeatBubbleDemo()` — simulates API call with setTimeout
- `openCaseStudy(idx)` — builds case study HTML from nested `caseStudy` object

### interactions.js
- **3D Tilt**: `mousemove` → calculate offset from center → `perspective(800px) rotateX rotateY`
- **Magnetic buttons**: `mousemove` → offset × 0.15 → `translate()`
- **Enhanced cursor**: `mouseenter/mouseleave` on interactive elements → resize cursor
- **Parallax**: `scroll` → `translateY(scrolled * 0.5)` on hero blob
- **Unified ESC**: single `keydown` handler checks all modals in priority order

---

## CSS Architecture

The monolithic `style.css` (2149 lines) is split into:

| File | Contents |
|------|----------|
| `css/variables.css` | All CSS custom properties (design tokens) |
| `css/base.css` | Reset, globals, glass-card, buttons, loading, cursor, scrollbar, utilities |
| `css/header.css` | Header, nav, mobile menu |
| `css/hero.css` | Hero section, keyframes |
| `css/resume.css` | Resume role grid, preview frame, fullscreen modal |
| `css/projects.css` | Project cards, filter, lightbox, pmodal, csmodal |
| `css/sections.css` | About, Skills, Contact, Footer |

Each file is self-contained. `style.css` is kept as a legacy fallback.

---

## Animations Reference

| Name | Element | Type |
|------|---------|------|
| `float` | Hero image, blob | CSS keyframe loop |
| `fadeInUp` | Hero content, resume container | CSS keyframe entry |
| `fadeInRight` | Hero image wrapper | CSS keyframe entry |
| `blink` | Typing cursor | CSS keyframe loop |
| `scrollArrow` | Scroll-down arrow | CSS keyframe loop |
| `projectFadeIn` | Project cards | CSS keyframe on filter |
| `modalSlideUp` | Project modal, case study modal | CSS keyframe entry |
| `pmodalFadeIn` | Modal sections (staggered) | CSS keyframe with delay |
| `lightboxZoom` | Lightbox, resume modal | CSS keyframe entry |
| `heartbeat` | Footer heart icon | CSS keyframe loop |
| `spin` | Loading spinner | CSS keyframe loop |
| `skillsStagger` | Skill cards | JS setTimeout stagger |
| `3D tilt` | Project cards | JS requestAnimationFrame |
| `magnetic` | CTA buttons | JS requestAnimationFrame |

---

## SEO Implementation

- `<meta name="description">` — 160 chars
- `<meta name="keywords">` — role-specific terms
- Open Graph tags — title, description, image, URL, type
- Twitter Card — `summary_large_image`
- JSON-LD Person schema — name, description, jobTitle, knowsAbout, sameAs
- `<link rel="canonical">` — prevents duplicate content
- `robots.txt` — allow all crawlers
- `sitemap.xml` — single URL (SPA)
- All images have `alt` attributes and `loading="lazy"`

---

## How to Replicate This

1. **Copy the HTML structure** — one `index.html` with all sections + modals at the bottom
2. **Set up the CSS tokens** in `css/variables.css` — change colors to your brand
3. **Fill in your content** — update all text, links, project data in `js/projects.js`
4. **Add your images** to `assets/` and update `src` attributes
5. **Add your PDFs** to `new_resume/` and update paths in `index.html` + `js/resume.js`
6. **Update SEO meta tags** in `<head>` with your name, URL, and social profiles
7. **Update the JSON-LD** schema with your details
8. **Deploy** — drag and drop to Netlify, or `git push` with Netlify CI

No npm, no webpack, no dependencies to install. Just static files.

---

## What makes it feel premium

- **Consistency** — gold accent is used everywhere: borders, gradients, icons, hover states
- **Depth** — glassmorphism + shadow layers create visual hierarchy without clutter
- **Responsiveness** — every breakpoint is designed, not just "shrunk"
- **Delight** — small things: cursor that follows you, cards that tilt, buttons that respond to your cursor position
- **Performance** — reduced-motion support, debounced scrolls, lazy images, no unnecessary JS
