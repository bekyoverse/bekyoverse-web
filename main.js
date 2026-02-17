document.addEventListener('DOMContentLoaded', () => {

    // ── THEME (init before anything renders) ──────────────
    const savedTheme = localStorage.getItem('bky-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Inject toggle button into every nav-right-group on the page
    document.querySelectorAll('.nav-right-group').forEach(group => {
        if (group.querySelector('.theme-toggle')) return; // avoid duplicates
        const btn = document.createElement('button');
        btn.className = 'theme-toggle';
        btn.setAttribute('aria-label', 'Toggle dark / light mode');
        btn.title = 'Toggle dark / light mode';
        btn.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('bky-theme', next);
        });
        // Insert as first child so it appears leftmost in the right group
        group.insertBefore(btn, group.firstChild);
    });

    // 1. Copy Email Function (Universal)
    // ----------------------------------
    window.copyEmail = function () {
        const email = 'bekyoverse@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            const toast = document.getElementById('copyToast');
            if (toast) {
                toast.innerText = 'Email copied ✓';
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2000);
            }
        }).catch(err => {
            console.error('Failed to copy email: ', err);
        });
    };

    // 2. Back to Top Functionality (Universal)
    // ----------------------------------------
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 3. Scroll Animations (Universal)
    // --------------------------------
    const animatedElements = document.querySelectorAll('.fade-in, .package-card, .category-section');

    if (animatedElements.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.style.opacity = '';
                    entry.target.style.transform = '';
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => observer.observe(el));
    }

    // 4. Index Page Specific Logic: Sticky Nav & Logo
    // -----------------------------------------------
    const homeLogo = document.getElementById('homeLogo');
    const stickyNav = document.querySelector('.nav-wrapper nav');
    const heroSection = document.querySelector('.hero');

    if (homeLogo && stickyNav && heroSection) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > heroSection.offsetHeight - 100) {
                homeLogo.classList.add('visible');
                stickyNav.classList.add('visible');
            } else {
                homeLogo.classList.remove('visible');
                stickyNav.classList.remove('visible');
            }
        });
    }

    // 5. Language Switcher Logic (Pricing Pages)
    // ------------------------------------------
    const langButtons = document.querySelectorAll('.lang-btn');
    if (langButtons.length > 0) {
        const currentLang = localStorage.getItem('language') || 'en';

        langButtons.forEach(btn => {
            if (btn.dataset.lang === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const selectedLang = btn.dataset.lang;
                localStorage.setItem('language', selectedLang);
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    // 6. 3D Head Interactivity removed — CSS float animation kept

    // 7. Mobile Tap-to-Reveal for Service Cards
    // ------------------------------------------
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                if (!this.classList.contains('mobile-active')) {
                    e.preventDefault();
                    serviceCards.forEach(c => c.classList.remove('mobile-active'));
                    this.classList.add('mobile-active');
                }
            }
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.service-card')) {
            serviceCards.forEach(card => card.classList.remove('mobile-active'));
        }
    });

});
