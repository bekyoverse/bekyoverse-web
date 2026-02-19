import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSiteConfig } from '../lib/siteConfig';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

// Theme helper
function useTheme() {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    });
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
    return { theme, toggle };
}

// ─── Copy email ───────────────────────────────────────────────────────────────

function useCopyEmail(email: string) {
    const [copied, setCopied] = useState(false);
    const copy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };
    return { copied, copy };
}

// ─── Video Card (thumbnail → embed on click, right-click blocked) ─────────────

// ─── Video Card (thumbnail → embed on click, right-click blocked) ─────────────

function VideoCard({ id }: { id: string }) {
    const [playing, setPlaying] = useState(false);
    const handleContextMenu = (e: React.MouseEvent) => e.preventDefault();

    return (
        <div
            className="portfolio-item fade-in"
            onContextMenu={handleContextMenu}
            style={{ position: 'relative', cursor: 'pointer', userSelect: 'none' }}
        >
            {!playing ? (
                <div onClick={() => setPlaying(true)} style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                    {/* Default: Muted Autoplay (Background Mode) */}
                    <iframe
                        src={`https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                        allow="autoplay; fullscreen"
                        title={`Video Preview ${id}`}
                        style={{ width: '100%', height: '100%', border: 'none', display: 'block', borderRadius: 16, pointerEvents: 'none' }}
                    />
                    {/* Transparent overlay to capture click */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 2 }} />
                </div>
            ) : (
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                    {/* Active: Full Player with Controls */}
                    <iframe
                        src={`https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={`Video ${id}`}
                        style={{ width: '100%', height: '100%', border: 'none', display: 'block', borderRadius: 16 }}
                    />
                </div>
            )}
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function HomePage() {
    const navigate = useNavigate();
    const { language, setLanguage, t } = useLanguage();
    const { isAuthenticated, logout } = useAuth();
    const config = getSiteConfig();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { toggle: toggleTheme } = useTheme();
    const [activePortCat, setActivePortCat] = useState(config[language].portfolio.categories[0]?.id || '');

    const { copied, copy } = useCopyEmail(config.contact.email);

    const scrollTo = (id: string) => {
        setMobileMenuOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const els = document.querySelectorAll('.fade-in');
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.12 }
        );
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, [activePortCat]);

    const comicsLine1 = [32, 33, 35, 37, 40, 45, 46, 50, 52, 55, 59].map(n => `1ST LINE/GuuGuuGaaGaa (${n}).png`);
    const comicsLine2 = [1, 4, 5, 6, 7, 10, 11, 20, 25, 30].map(n => `2ND LINE/GuuGuuGaaGaa (${n}).png`);

    const currentVideos = config[language].portfolio.categories.find((c: any) => c.id === activePortCat)?.videos || [];

    return (
        <>
            <div className="nav-wrapper">
                <a href="#hero" className="home-logo" onClick={e => { e.preventDefault(); scrollTo('hero'); }}>
                    <img src="/AI3DHead.png" alt="Bekyo 3D Head" />
                    <span>{config[language].hero.title}</span>
                </a>

                <div className="nav-right-group">
                    <button className="theme-toggle" onClick={toggleTheme} />
                    <div className="nav-item">
                        <a href="#" className="glass-circle" onClick={e => e.preventDefault()}><i className="fas fa-globe" /></a>
                        <div className="dropdown-content">
                            <a href="#" onClick={e => { e.preventDefault(); setLanguage('en'); }}>English</a>
                            <a href="#" onClick={e => { e.preventDefault(); setLanguage('mm'); }}>မြန်မာဘာသာ</a>
                        </div>
                    </div>
                    <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(o => !o)}>
                        <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
                    </button>
                    <nav className={mobileMenuOpen ? 'mobile-active' : ''}>
                        <a href="#about" onClick={e => { e.preventDefault(); scrollTo('about'); }}>{t('About', 'ကျွန်ုပ်အကြောင်း')}</a>
                        <a href="#portfolio" onClick={e => { e.preventDefault(); scrollTo('portfolio'); }}>{t('Portfolio', 'လက်ရာများ')}</a>
                        <a href="#comics" onClick={e => { e.preventDefault(); scrollTo('comics'); }}>{t('Comics', 'ကာတွန်းများ')}</a>
                        <a href="#services" onClick={e => { e.preventDefault(); scrollTo('services'); }}>{t('Services', 'ဝန်ဆောင်မှုများ')}</a>

                        <div className="nav-item">
                            <a href="/pricing" onClick={e => { e.preventDefault(); navigate('/pricing'); }}>{t('Pricing', 'စျေးနှုန်းများ')}</a>
                            <div className="dropdown-content">
                                {config[language].pricing.categories.map((p: any) => (
                                    <a key={p.id} href={`/pricing`} onClick={e => { e.preventDefault(); navigate(`/pricing#${p.id}`); }}>
                                        <i className={`fas ${p.icon}`} /> {p.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact'); }}>{t('Contact', 'ဆက်သွယ်ရန်')}</a>

                        {isAuthenticated ? (
                            <>
                                <a href="/dashboard" onClick={e => { e.preventDefault(); navigate('/dashboard'); }}>{t('Dashboard', 'ဒက်ရှ်ဘုတ်')}</a>
                                <div className="nav-item" style={{ marginLeft: 10 }}>
                                    <button
                                        onClick={logout}
                                        className="btn-secondary"
                                        style={{ borderRadius: 50, padding: '8px 20px', fontSize: '0.85rem' }}
                                    >
                                        <i className="fas fa-right-from-bracket" style={{ marginRight: 6 }} />
                                        {t('Logout', 'ထွက်ရန်')}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <a href="/login" onClick={e => { e.preventDefault(); navigate('/login'); }} className="btn-primary" style={{ borderRadius: 50, padding: '8px 20px' }}>
                                <i className="fas fa-graduation-cap" style={{ marginRight: 6 }} />{t('Classes', 'သင်တန်းများ')}
                            </a>
                        )}
                    </nav>
                </div>
            </div>

            <section className="home-hero" id="hero">
                <video autoPlay loop muted playsInline className="bg-video">
                    <source src="/background-loop.mp4" type="video/mp4" />
                </video>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: -1 }} />
                <div className="hero-content" style={{ background: 'none', backdropFilter: 'none', border: 'none', boxShadow: 'none' }}>
                    <img src="/AI3DHead.png" alt="" className="hero-3d-head" />
                    <h1 className="hero-title">{config[language].hero.title}</h1>
                    <p className="hero-subtitle">{config[language].hero.subtitle}</p>
                    <p className="hero-tagline">{config[language].hero.tagline}</p>
                    <a href="#services" className="hero-cta" onClick={e => { e.preventDefault(); scrollTo('services'); }}>{config[language].hero.ctaText}</a>
                </div>
            </section>

            <section id="about" className="section">
                <div className="about-section">
                    <div className="about-image-container fade-in">
                        <img src="/about me/Profile_Picture_2025_August.png" alt="" className="about-image image-cartoon" />
                        <img src="/about me/482705559_18320704156166815_9082717179843693102_n.jpg" alt="" className="about-image image-human" />
                    </div>
                    <div className="about-content fade-in">
                        <h2 className="about-title">{config[language].about.title}</h2>
                        <p className="about-text">{config[language].about.text}</p>
                        <div className="about-stats">
                            {Object.entries(config[language].about.stats).map(([k, v]) => (
                                <div key={k} className="stat-item">
                                    <span className="stat-val">{v as string}</span>
                                    <span className="stat-label">
                                        {k === 'projects' ? t('Projects', 'ပရောဂျက်များ') :
                                            k === 'clients' ? t('Happy Clients', 'လက်ခံသူများ') :
                                                t('Years Exp.', 'လုပ်ငန်းအတွေ့အကြုံ')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="section">
                <h2 className="section-title fade-in">{t('What I Do', 'ကျွန်ုပ်၏ဝန်ဆောင်မှုများ')}</h2>
                <div className="services-grid">
                    {config[language].pricing.categories.slice(0, 4).map((s: any) => {
                        const routeMap: Record<string, string> = {
                            mascot: '/services/mascot',
                            stickers: '/services/stickers', // Note: 'stickers' id might be missing in config, assuming order or ID match
                            illustration: '/services/illustration',
                            comic: '/services/comic',
                            animation: '/services/animation'
                        };
                        // Fallback if ID doesn't match keys exactly (e.g. 'Sticker' vs 'stickers')
                        // Let's rely on s.id which should range from 'mascot', 'animation', etc.
                        // Wait, previous config showed 'mascot' and 'animation'.
                        // I should use s.id directly if it matches.

                        const targetRoute = routeMap[s.id] || `/pricing#${s.id}`;

                        return (
                            <a key={s.id} href={targetRoute} className="service-card fade-in" onClick={e => { e.preventDefault(); navigate(targetRoute); }}>
                                <img src={`/services_img/${s.title === 'Animation' ? '5_ Animation.png' : s.title === 'Illustration' ? '4_ Illustration.png' : s.title === 'Comic' ? '3_ Comics.png' : '2_ Mascot.png'}`} alt="" className="service-img" />
                                <div className="service-overlay"><div className="overlay-text">{t('View Details', 'အသေးစိတ်ကြည့်ရန်')}</div></div>
                            </a>
                        );
                    })}
                </div>
            </section>

            <section id="portfolio" className="section">
                <h2 className="section-title fade-in">{t('Featured Work', 'လက်ရွေးစင်လက်ရာများ')}</h2>

                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }} className="fade-in">
                    {config[language].portfolio.categories.map((cat: any) => (
                        <button
                            key={cat.id}
                            onClick={() => setActivePortCat(cat.id)}
                            style={{
                                padding: '10px 24px', borderRadius: 50, border: 'none', cursor: 'pointer',
                                background: activePortCat === cat.id ? 'var(--primary-red)' : 'var(--card-bg)',
                                color: activePortCat === cat.id ? '#fff' : 'var(--text-gray)',
                                fontWeight: 600, transition: 'all 0.3s ease'
                            }}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: 32, maxWidth: 1400, margin: '0 auto' }}>
                    {currentVideos.map((id: string) => <VideoCard key={id} id={id} />)}
                </div>
            </section>

            <section id="comics" className="marquee-wrapper">
                <h2 className="section-title">{t('GXG Comic Gallery', 'GXG ကာတွန်းပြခန်း')}</h2>
                <div className="marquee-track">
                    {[...comicsLine1, ...comicsLine1].map((src, i) => <div key={i} className="comic-card"><img src={`/gxg comics/${src}`} alt="" /></div>)}
                </div>
                <div className="marquee-track-reverse">
                    {[...comicsLine2, ...comicsLine2].map((src, i) => <div key={i} className="comic-card"><img src={`/gxg comics/${src}`} alt="" /></div>)}
                </div>
            </section>

            <section id="contact" className="contact-section">
                <h2 className="contact-title fade-in">{config[language].contact.title}</h2>
                <p className="hero-tagline fade-in">{config[language].contact.tagline}</p>
                <div className="contact-actions">
                    <div className="contact-links-wrapper">
                        {Object.entries(config.contact.links).map(([k, v]) => (
                            <a key={k} href={v as string} className="social-link-btn" target="_blank" rel="noopener noreferrer">
                                <span style={{ textTransform: 'capitalize' }}>{k}</span> <i className={`fab fa-${k === 'messenger' ? 'facebook-messenger' : k}`} />
                            </a>
                        ))}
                    </div>
                    <div className="contact-footer">
                        <button className="gmail-copy-btn" onClick={copy}>
                            <i className={copied ? 'fas fa-check' : 'fas fa-envelope'} />
                            {copied ? t('Copied!', 'ကော်ပီကူးပြီး!') : t('Copy Email Address', 'အီးမေးလ်ကူးယူရန်')}
                        </button>
                    </div>
                </div>
            </section>

            <footer><p>© 2025 BEKYOVerse. {t('All rights reserved.', 'မူပိုင်ခွင့်အားလုံးရှိသည်။')}</p></footer>

            <a href={config.contact.links.messenger} className="messenger-floating" target="_blank" rel="noopener noreferrer">
                <span className="messenger-tooltip">{t('Contact Me', 'ဆက်သွယ်ရန်')}</span>
                <i className="fab fa-facebook-messenger" />
            </a>
        </>
    );
}
