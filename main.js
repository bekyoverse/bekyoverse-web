document.addEventListener('DOMContentLoaded', () => {

    // 1. Copy Email Function (Universal)
    // ----------------------------------
    // Attaches to any element with onclick="copyEmail()" or class "copy-email-btn"
    window.copyEmail = function () {
        const email = 'bekyoverse@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            const toast = document.getElementById('copyToast');
            if (toast) {
                toast.innerText = 'Email copied ✓'; // Update text dynamically
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2000);
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
    // Animates elements with .fade-in class (and others if needed)
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
                    // For elements relying on inline JS styles previously (backward compatibility if needed)
                    entry.target.style.opacity = '';
                    entry.target.style.transform = '';
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // 4. Index Page Specific Logic: Sticky Nav & Logo
    // -----------------------------------------------
    const homeLogo = document.getElementById('homeLogo');
    const stickyNav = document.querySelector('.nav-wrapper nav');
    const heroSection = document.querySelector('.hero');

    // Only run if these elements exist (mostly index.html)
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

                // Update UI state
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
    // 6. 3D Head Interactivity removed - reverted to CSS float animation as per user request

    // 7. Mobile Tap-to-Reveal for Service Cards
    // ------------------------------------------
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Only apply this logic on mobile screens
            if (window.innerWidth <= 768) {
                if (!this.classList.contains('mobile-active')) {
                    // Prevent navigation on first tap
                    e.preventDefault();

                    // Remove active class from all other cards
                    serviceCards.forEach(c => c.classList.remove('mobile-active'));

                    // Add active class to this card
                    this.classList.add('mobile-active');
                }
                // Second tap will naturally follow the link because class is now present
            }
        });
    });

    // Close overlays when tapping elsewhere
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.service-card')) {
            serviceCards.forEach(card => card.classList.remove('mobile-active'));
        }
    });
});
