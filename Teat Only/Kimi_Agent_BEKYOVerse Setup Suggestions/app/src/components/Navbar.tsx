import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { getSiteConfig } from '../lib/siteConfig';

// Theme helper
function useTheme() {
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        if (typeof window === 'undefined') return 'dark';
        return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    });
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
    return { theme, toggle };
}

export function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { language, setLanguage, t } = useLanguage();
    const { isAuthenticated, logout } = useAuth();
    const config = getSiteConfig();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { toggle: toggleTheme } = useTheme();

    const isHome = location.pathname === '/';

    const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        if (isHome) {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };

    // Handle scroll to section if navigated with state
    useEffect(() => {
        if (isHome && location.state && (location.state as any).scrollTo) {
            const sectionId = (location.state as any).scrollTo;
            const el = document.getElementById(sectionId);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                    // Clear state to avoid scrolling on refresh
                    window.history.replaceState({}, document.title);
                }, 100);
            }
        }
    }, [isHome, location.state]);

    return (
        <div className="nav-wrapper">
            <a href="/" className="home-logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                <img src="/AI3DHead.png" alt="Bekyo 3D Head" />
                <span>{config[language].hero.title}</span>
            </a>

            <div className="nav-right-group">
                <button className="theme-toggle" onClick={toggleTheme}></button>
                <div className="nav-item">
                    <a href="#" className="glass-circle" onClick={e => e.preventDefault()}><i className="fas fa-globe"></i></a>
                    <div className="dropdown-content">
                        <a href="#" onClick={e => { e.preventDefault(); setLanguage('en'); }}>English</a>
                        <a href="#" onClick={e => { e.preventDefault(); setLanguage('mm'); }}>မြန်မာဘာသာ</a>
                    </div>
                </div>
                <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(o => !o)}>
                    <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </button>
                <nav className={mobileMenuOpen ? 'mobile-active' : ''}>
                    <a href="/#about" onClick={(e) => handleNavClick(e, 'about')}>{t('About', 'ကျွန်ုပ်အကြောင်း')}</a>
                    <a href="/#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>{t('Portfolio', 'လက်ရာများ')}</a>
                    <a href="/#comics" onClick={(e) => handleNavClick(e, 'comics')}>{t('Comics', 'ကာတွန်းများ')}</a>
                    <a href="/#services" onClick={(e) => handleNavClick(e, 'services')}>{t('Services', 'ဝန်ဆောင်မှုများ')}</a>

                    <div className="nav-item">
                        <a href="/pricing" onClick={e => { e.preventDefault(); navigate('/pricing'); }}>{t('Pricing', 'စျေးနှုန်းများ')}</a>
                        <div className="dropdown-content">
                            <a href="/services/mascot" onClick={e => { e.preventDefault(); navigate('/services/mascot'); }}>
                                <i className="fas fa-mask"></i> Mascot
                            </a>
                            <a href="/services/stickers" onClick={e => { e.preventDefault(); navigate('/services/stickers'); }}>
                                <i className="fas fa-sticky-note"></i> Sticker
                            </a>
                            <a href="/services/illustration" onClick={e => { e.preventDefault(); navigate('/services/illustration'); }}>
                                <i className="fas fa-palette"></i> Illustration
                            </a>
                            <a href="/services/comic" onClick={e => { e.preventDefault(); navigate('/services/comic'); }}>
                                <i className="fas fa-book-open"></i> Comic
                            </a>
                            <a href="/services/animation" onClick={e => { e.preventDefault(); navigate('/services/animation'); }}>
                                <i className="fas fa-film"></i> Animation
                            </a>
                        </div>
                    </div>

                    <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t('Contact', 'ဆက်သွယ်ရန်')}</a>

                    {isAuthenticated ? (
                        <>
                            <a href="/dashboard" onClick={e => { e.preventDefault(); navigate('/dashboard'); }}>{t('Dashboard', 'ဒက်ရှ်ဘုတ်')}</a>
                            <div className="nav-item" style={{ marginLeft: 10 }}>
                                <button
                                    onClick={logout}
                                    className="btn-secondary"
                                    style={{ borderRadius: 50, padding: '8px 20px', fontSize: '0.85rem' }}
                                >
                                    <i className="fas fa-right-from-bracket" style={{ marginRight: 6 }}></i>
                                    {t('Logout', 'ထွက်ရန်')}
                                </button>
                            </div>
                        </>
                    ) : (
                        <a href="/login" onClick={e => { e.preventDefault(); navigate('/login'); }} className="btn-primary" style={{ borderRadius: 50, padding: '8px 20px' }}>
                            <i className="fas fa-graduation-cap" style={{ marginRight: 6 }}></i>{t('Classes', 'သင်တန်းများ')}
                        </a>
                    )}
                </nav>
            </div>
        </div>
    );
}
