document.addEventListener("DOMContentLoaded", () => {

    // ── POPULATE CONFIG ──────────────────────────
    function populateConfig() {
        if (typeof weddingConfig === 'undefined') return;

        // Date formatting
        const eDate = new Date(weddingConfig.eventDateTime);
        const day = eDate.getDate();
        const suffix = (day % 10 === 1 && day !== 11) ? 'st' : (day % 10 === 2 && day !== 12) ? 'nd' : (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
        const month = eDate.toLocaleString('en-US', { month: 'long' });
        const displayDate = `${month} ${day}${suffix}, ${eDate.getFullYear()}`;
        const shortDate = eDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const timeStr = eDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

        // Meta & Title
        const titleEl = document.getElementById('cfg-title');
        if (titleEl) titleEl.textContent = `${weddingConfig.partner1} & ${weddingConfig.partner2} | Wedding Celebration`;
        const descEl = document.getElementById('cfg-description');
        if (descEl) descEl.content = `Join us to celebrate the wedding of ${weddingConfig.partner1} and ${weddingConfig.partner2}.`;

        // Initials (Seal)
        const sInit1 = document.getElementById('cfg-seal-init1');
        if (sInit1) sInit1.textContent = weddingConfig.initial1;
        const sInit2 = document.getElementById('cfg-seal-init2');
        if (sInit2) sInit2.textContent = weddingConfig.initial2;

        // Initials (Nav)
        const nInit1 = document.getElementById('cfg-nav-init1');
        if (nInit1) nInit1.textContent = weddingConfig.initial1;
        const nInit2 = document.getElementById('cfg-nav-init2');
        if (nInit2) nInit2.textContent = weddingConfig.initial2;

        // Initials (Footer)
        const fInit1 = document.getElementById('cfg-footer-init1');
        if (fInit1) fInit1.textContent = weddingConfig.initial1;
        const fInit2 = document.getElementById('cfg-footer-init2');
        if (fInit2) fInit2.textContent = weddingConfig.initial2;

        // Hero
        const hName1 = document.getElementById('cfg-hero-name1');
        if (hName1) hName1.textContent = weddingConfig.partner1;
        const hName2 = document.getElementById('cfg-hero-name2');
        if (hName2) hName2.textContent = weddingConfig.partner2;
        const hDate = document.getElementById('cfg-hero-date');
        if (hDate) hDate.textContent = displayDate;

        // Details
        const dDate = document.getElementById('cfg-details-date');
        if (dDate) dDate.textContent = shortDate;
        const dTime = document.getElementById('cfg-details-time');
        if (dTime) dTime.textContent = timeStr;
        const dLoc = document.getElementById('cfg-details-location');
        if (dLoc) dLoc.textContent = weddingConfig.venueName;
        const dAddr = document.getElementById('cfg-details-address');
        if (dAddr) dAddr.textContent = weddingConfig.venueAddress;

        const dMapBtn = document.getElementById('cfg-details-mapbtn');
        if (dMapBtn) dMapBtn.href = weddingConfig.mapLink;
        const dMapIframe = document.getElementById('cfg-map-iframe');
        if (dMapIframe) {
            // Dynamically generate the map embed URL using the venue name and address
            const mapQuery = encodeURIComponent(`${weddingConfig.venueName}, ${weddingConfig.venueAddress}`);
            dMapIframe.setAttribute('src', `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`);
        }

        // RSVP & Footer
        const rsvpDeadline = document.getElementById('cfg-rsvp-deadline');
        if (rsvpDeadline) rsvpDeadline.textContent = `Please respond by ${weddingConfig.rsvpDeadline}`;
        const fDate = document.getElementById('cfg-footer-date');
        if (fDate) {
            fDate.innerHTML = `Made with love by &copy;Blush Moments
            <div style="margin-top: 15px; display: flex; justify-content: center; gap: 20px;">
                <a href="${weddingConfig.tiktokLink || '#'}" target="_blank" style="color: var(--forest-green); opacity: 0.7; transition: opacity 0.3s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.7'" title="TikTok">
                    <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                </a>
                <a href="${weddingConfig.instagramLink || '#'}" target="_blank" style="color: var(--forest-green); opacity: 0.7; transition: opacity 0.3s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.7'" title="Instagram">
                    <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
            </div>`;
        }
    }

    function applyTheme() {
        const themeName = window.weddingConfig && window.weddingConfig.activeTheme ? window.weddingConfig.activeTheme : 'wedding';
        const theme = window.themes && window.themes[themeName];
        if (!theme) return;
        
        const root = document.documentElement;
        
        // Apply Colors
        if (theme.colors) {
            for (const [key, val] of Object.entries(theme.colors)) {
                root.style.setProperty('--' + key, val);
            }
        }
        
        // Apply Fonts
        if (theme.fonts) {
            root.style.setProperty('--font-body', theme.fonts.body);
            root.style.setProperty('--font-heading', theme.fonts.heading);
            root.style.setProperty('--font-accent', theme.fonts.accent);
            
            const fontNames = [theme.fonts.body, theme.fonts.heading, theme.fonts.accent]
                .map(f => f.split(',')[0].replace(/['"]/g, '').trim())
                .filter(Boolean);
            
            const uniqueFonts = [...new Set(fontNames)];
            const gFontsUrl = 'https://fonts.googleapis.com/css2?' + uniqueFonts.map(f => 'family=' + f.replace(/ /g, '+') + ':ital,wght@0,300;0,400;0,500;0,600;1,400;1,500').join('&') + '&display=swap';
            
            let link = document.getElementById('theme-fonts');
            if (!link) {
                link = document.createElement('link');
                link.id = 'theme-fonts';
                link.rel = 'stylesheet';
                document.head.appendChild(link);
            }
            link.href = gFontsUrl;
        }
    }

    applyTheme();
    populateConfig();

    // ── WAX SEAL OPEN ────────────────────────────
    window.openInvitation = function () {
        const sealScreen = document.getElementById('seal-screen');
        const invitation = document.getElementById('invitation');

        sealScreen.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sealScreen.style.opacity = '0';
        sealScreen.style.transform = 'scale(1.06)';

        setTimeout(() => {
            sealScreen.style.display = 'none';
            invitation.style.display = 'block';

            requestAnimationFrame(() => {
                invitation.style.transition = 'opacity 0.7s ease';
                invitation.style.opacity = '1';
            });

            startCountdown();
            initReveal();

        }, 850);
    };

    // ── COUNTDOWN ────────────────────────────────
    function startCountdown() {
        function tick() {
            const target = new Date(weddingConfig.eventDateTime).getTime();
            const now = Date.now();
            const diff = Math.max(0, target - now);

            document.getElementById('cd-days').textContent = Math.floor(diff / 86400000);
            document.getElementById('cd-hours').textContent = Math.floor((diff % 86400000) / 3600000);
            document.getElementById('cd-mins').textContent = Math.floor((diff % 3600000) / 60000);
            document.getElementById('cd-secs').textContent = Math.floor((diff % 60000) / 1000);

            document.querySelectorAll('.c-num').forEach(el => {
                el.classList.remove('cd-pulse');
                void el.offsetWidth;
                el.classList.add('cd-pulse');
            });
        }
        tick();
        setInterval(tick, 1000);
    }

    // ── SCROLL REVEAL ────────────────────────────
    function initReveal() {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.13 });
        reveals.forEach(el => observer.observe(el));

        document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('active'));
    }

    // ── SLIDESHOW ────────────────────────────────
    let currentSlide = 0;
    let slideshowTimer = null;

    function initSlideshow() {
        const slides = document.querySelectorAll('.slide');
        const dotsContainer = document.getElementById('slideDots');
        if (!slides.length || !dotsContainer) return;

        // Build dots
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });

        // Auto-advance every 4s
        slideshowTimer = setInterval(() => changeSlide(1), 4000);
    }

    function goToSlide(index) {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slide-dot');
        if (!slides.length) return;

        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        // Reset auto-timer
        clearInterval(slideshowTimer);
        slideshowTimer = setInterval(() => changeSlide(1), 4000);
    }

    window.changeSlide = function (dir) {
        goToSlide(currentSlide + dir);
    };

    // ── NAVBAR SCROLL ────────────────────────────
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ── PARALLAX HERO ────────────────────────────
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight && heroContent) {
            const s = window.scrollY;
            heroContent.style.transform = `translateY(${s * 0.3}px)`;
            heroContent.style.opacity = Math.max(0, 1 - s / 600);
        }
    });

    // ── FAQ ACCORDION ────────────────────────────
    window.toggleFaq = function (btn) {
        const answer = btn.nextElementSibling;
        const isOpen = btn.classList.contains('open');

        document.querySelectorAll('.faq-q.open').forEach(b => {
            b.classList.remove('open');
            b.nextElementSibling.style.maxHeight = '0';
        });

        if (!isOpen) {
            btn.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    };

    // ── RSVP FORM ────────────────────────────────
    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = rsvpForm.querySelector('.btn-submit');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.disabled = true;

            if (weddingConfig.googleSheetScriptUrl) {
                const formData = new FormData(rsvpForm);
                fetch(weddingConfig.googleSheetScriptUrl, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors' // Allows posting across domains without CORS preflight block
                })
                    .then(() => {
                        rsvpForm.style.display = 'none';
                        document.getElementById('rsvpSuccess').style.display = 'block';
                        launchConfetti();
                    })
                    .catch(() => {
                        btn.innerText = originalText;
                        btn.disabled = false;
                        alert('Oops... something went wrong. Please try again.');
                    });
            } else {
                // Mock submission UI effect if no script URL is provided
                setTimeout(() => {
                    rsvpForm.style.display = 'none';
                    document.getElementById('rsvpSuccess').style.display = 'block';
                    launchConfetti();
                }, 800);
            }
        });
    }

});

// ── CONFETTI ─────────────────────────────────────
window.launchConfetti = function () {
    const colors = ['#C5A059', '#E3D3B0', '#1B2E22', '#f5ede0', '#d4a96a', '#8fb08a'];
    for (let i = 0; i < 80; i++) {
        const c = document.createElement('div');
        c.className = 'confetti-piece';
        c.style.cssText =
            'left:' + (Math.random() * 100) + 'vw;' +
            'background:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
            'width:' + (Math.random() * 8 + 5) + 'px;' +
            'height:' + (Math.random() * 8 + 5) + 'px;' +
            'animation-duration:' + (Math.random() * 3 + 2) + 's;' +
            'animation-delay:' + (Math.random() * 1) + 's;' +
            'border-radius:' + (Math.random() > 0.5 ? '50%' : '2px') + ';';
        document.body.appendChild(c);
        setTimeout(function (el) { el.remove(); }, 5500, c);
    }
};

// ── FLOATING HEARTS ──────────────────────────────
(function spawnHearts() {
    setInterval(() => {
        const h = document.createElement('div');
        h.className = 'floating-heart';
        h.innerText = '❤';
        h.style.cssText =
            'left:' + (Math.random() * 100) + 'vw;' +
            'animation-duration:' + (Math.random() * 3 + 3) + 's;' +
            'font-size:' + (Math.random() * 16 + 10) + 'px;' +
            'opacity:' + (Math.random() * 0.45 + 0.2) + ';';
        document.body.appendChild(h);
        setTimeout(function (el) { el.remove(); }, 6000, h);
    }, 1200);
})();
