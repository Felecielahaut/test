<body>

<div id="seal-screen">
    <p class="seal-pre">You have received a wedding invitation</p>
    <div class="seal-wrap">
        <div class="wax-seal" id="sealBtn" onclick="openInvitation()" title="Tap to open">
            <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                <circle cx="110" cy="110" r="100" fill="#1B2E22"/>
                <text x="110" y="100" text-anchor="middle" font-family="Cormorant Garamond,serif" font-size="24" fill="#C5A059" letter-spacing="2">L</text>
                <text x="110" y="126" text-anchor="middle" font-family="Georgia,serif" font-size="22" fill="#E3D3B0">&</text>
                <text x="110" y="152" text-anchor="middle" font-family="Cormorant Garamond,serif" font-size="24" fill="#C5A059" letter-spacing="2">K</text>
            </svg>
        </div>
        <p class="seal-hint">— tap to open —</p>
    </div>
</div>

<div id="invitation" style="display:none; opacity:0">
    <nav class="navbar">
        <div class="nav-logo">L <span class="amp">&</span> K</div>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#details">Details</a></li>
            <li><a href="#rsvp" class="btn-primary">RSVP</a></li>
        </ul>
    </nav>

    <header id="home" class="hero">
        <div class="hero-bg parallax"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content reveal fade-up">
            <h3 class="hero-subtitle">Together with their families</h3>
            <h1 class="hero-title">Laila <br><span class="amp">&</span> Kareem</h1>
            <p class="hero-date">May 2nd, 2026</p>
        </div>
    </header>

    <section id="details" class="section details-bg">
        <div class="container">
            <div class="section-header reveal fade-up">
                <h2 class="section-title">When & Where</h2>
                <div class="divider"></div>
            </div>
            </div>
    </section>

    <section id="rsvp" class="section rsvp-bg">
        <div class="container">
            <div class="glass-container reveal fade-up">
                <h2 class="section-title">RSVP</h2>
                <form id="rsvpForm">
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label>Will you attend?</label>
                        <div class="radio-group">
                            <label class="radio-label"><input type="radio" name="attendance" value="yes" checked> Joyfully Accept</label>
                            <label class="radio-label"><input type="radio" name="attendance" value="no"> Regretfully Decline</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="song">Song Request 🎵 (optional)</label>
                        <input type="text" id="song" name="song" placeholder="Your favorite dance track...">
                    </div>
                    <div class="form-group">
                        <label for="message">Leave a lovely note or wish 💕</label>
                        <input type="text" id="message" name="message" placeholder="...">
                    </div>
                    <button type="submit" class="btn-submit">Confirm RSVP</button>
                </form>
            </div>
        </div>
    </section>

    <footer class="footer section">
        <div class="container" style="text-align: center;">
            <h2 class="nav-logo">L<span class="amp">&</span>K</h2>
            <p>Made with love for May 2nd, 2026</p>
        </div>
    </footer>
</div>
</body>
</html>
