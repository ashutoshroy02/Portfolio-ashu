/* =============================================
   STAR CURSOR TRAIL — 60fps, self-cleaning
   ============================================= */
'use strict';

(function () {
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const COLORS = [
        '#FFD700', '#FFC0CB', '#C8A2C8', '#FFE066',
        '#FF9ECD', '#D4A8FF', '#FFF0A0', '#FFB3DE',
        '#FFFACD', '#FF85C2', '#E0B0FF', '#FFEAA0'
    ];

    const pool   = [];
    const active = [];
    let ticking  = false;
    let spawnTimer = 0;
    const SPAWN_INTERVAL = 16; // ~1 star per frame

    function getNode() {
        return pool.pop() || (() => {
            const el = document.createElement('div');
            el.className = 'star-trail';
            document.body.appendChild(el);
            return el;
        })();
    }

    function releaseNode(star) {
        star.style.opacity = '0';
        star.style.display = 'none';
        pool.push(star);
    }

    function spawnStar(x, y) {
        const star  = getNode();
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const size  = 10 + Math.random() * 16;          // 10–26px (bigger)
        const angle = Math.random() * 360;
        const drift = (Math.random() - 0.5) * 60;       // wider horizontal spread

        star.style.cssText = `
            display: block;
            left: ${x - size / 2}px;
            top:  ${y - size / 2}px;
            width:  ${size}px;
            height: ${size}px;
            color: ${color};
            transform: rotate(${angle}deg);
            opacity: 1;
        `;

        active.push({ el: star, born: performance.now(), x, y, drift, size });
    }

    function tick(now) {
        for (let i = active.length - 1; i >= 0; i--) {
            const s    = active[i];
            const age  = now - s.born;
            const life = 1400;               // longer lifetime (was 900)

            if (age >= life) {
                releaseNode(s.el);
                active.splice(i, 1);
                continue;
            }

            const progress = age / life;
            const opacity  = Math.pow(1 - progress, 1.5); // stay bright longer
            const fallY    = progress * 70;                // fall further (was 40)
            const driftX   = s.drift * progress;
            const rot      = progress * 270;               // more rotation
            const scale    = 1.2 - progress * 0.9;        // start bigger

            s.el.style.opacity   = opacity;
            s.el.style.transform = `translate(${driftX}px, ${fallY}px) rotate(${rot}deg) scale(${scale})`;
        }

        ticking = false;
        if (active.length > 0) {
            ticking = true;
            requestAnimationFrame(tick);
        }
    }

    document.addEventListener('mousemove', (e) => {
        const now = performance.now();
        if (now - spawnTimer < SPAWN_INTERVAL) return;
        spawnTimer = now;

        // spawn 2 stars per interval for denser trail
        spawnStar(e.clientX, e.clientY);
        spawnStar(e.clientX, e.clientY);

        if (!ticking) {
            ticking = true;
            requestAnimationFrame(tick);
        }
    });
})();
