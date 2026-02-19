import { useNavigate } from 'react-router-dom';
import { getSiteConfig } from '../lib/siteConfig';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export default function PricingPage() {
    const navigate = useNavigate();
    const { language, setLanguage, t } = useLanguage();
    const config = getSiteConfig();
    const p = config[language].pricing;
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    return (
        <div className="page-wrapper" style={{ background: 'var(--body-bg-to)' }}>
            <header className="site-header">
                <div className="site-header-inner">
                    <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="home-logo">
                        <img src="/AI3DHead.png" alt="Bekyo 3D Head" />
                        <span>BEKYOVerse</span>
                    </a>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <button
                            className="btn-secondary"
                            style={{ padding: '8px 15px', borderRadius: '12px', fontSize: '0.8rem' }}
                            onClick={() => setLanguage(language === 'en' ? 'mm' : 'en')}
                        >
                            <i className="fas fa-language" style={{ marginRight: 8 }} />
                            {language === 'en' ? 'မြန်မာ' : 'English'}
                        </button>
                        <button className="btn-primary" onClick={() => navigate('/')}>{t('Back Home', 'မူလစာမျက်နှာ')}</button>
                    </div>
                </div>
            </header>

            <section className="pricing-hero" style={{ padding: '6rem 2rem 4rem', textAlign: 'center' }}>
                <h1 className="shimmer-text" style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1rem' }}>
                    {p.hero.title}
                </h1>
                <p style={{ color: 'var(--text-gray)', maxWidth: 600, margin: '0 auto' }}>
                    {t(
                        'Transparent pricing for high-quality creative results. Choose a package that fits your vision.',
                        'အရည်အသွေးမြင့် ဖန်တီးမှုရလဒ်များအတွက် ပွင့်လင်းမြင်သာသော စျေးနှုန်းများ။ သင်၏စိတ်ကူးနှင့် ကိုက်ညီသော ပက်ကေ့ချ်ကို ရွေးချယ်ပါ။'
                    )}
                </p>
            </section>

            <div className="content-wrapper">
                {p.categories.map((cat: any) => (
                    <section key={cat.id} id={cat.id} className="category-section" style={{ marginBottom: '5rem' }}>
                        <div className="category-header" style={{ marginBottom: '2.5rem', borderBottom: '2px solid rgba(186, 74, 74, 0.2)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: 50, height: 50, borderRadius: 12, background: 'var(--primary-red-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className={`fas ${cat.icon}`} style={{ fontSize: '1.5rem', color: 'var(--primary-red)' }} />
                            </div>
                            <h2 className="category-title" style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '2rem', margin: 0 }}>
                                {cat.title}
                            </h2>
                        </div>

                        <div className="package-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                            {cat.packages.map((pkg: any) => (
                                <div key={pkg.name} className={`glass-card ${pkg.featured ? 'featured' : ''}`} style={{
                                    padding: '2.5rem 2rem',
                                    borderRadius: 32,
                                    border: pkg.featured ? '2px solid var(--primary-red)' : '1px solid var(--border-faint)',
                                    background: pkg.featured ? 'var(--primary-red-dim)' : 'var(--card-bg)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    position: 'relative'
                                }}>
                                    {pkg.featured && (
                                        <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--primary-red)', padding: '4px 20px', borderRadius: 50, fontSize: '0.75rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: 1 }}>
                                            Popular
                                        </div>
                                    )}

                                    <div>
                                        <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.8rem', marginBottom: '0.4rem' }}>{pkg.name}</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', lineHeight: 1.4 }}>{pkg.sub}</p>
                                    </div>

                                    <div style={{ margin: '0.5rem 0' }}>
                                        <div style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: "'Fredoka', sans-serif", color: '#fff' }}>{pkg.price}</div>
                                        <div style={{ fontSize: '1rem', color: 'var(--primary-red)', fontWeight: 600 }}>{pkg.priceMMK}</div>
                                    </div>

                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                                        {pkg.features.map((feat: string) => (
                                            <li key={feat} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                                                <i className="fas fa-check-circle" style={{ color: 'var(--primary-red)', marginTop: 4 }} />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        className="btn-primary"
                                        style={{ marginTop: '1rem', background: pkg.featured ? 'var(--primary-red)' : 'transparent', border: '2px solid var(--primary-red)', color: pkg.featured ? '#fff' : 'var(--primary-red)' }}
                                        onClick={() => navigate('/#contact')}
                                    >
                                        {t('Order Now', 'အခုပဲ မှာယူပါ')}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* --- Workflow Section --- */}
                        {cat.workflow && cat.workflow.length > 0 && (
                            <div className="detail-section" style={{ marginTop: '4rem' }}>
                                <h3 className="detail-title">{t('Working Process', 'လုပ်ဆောင်ပုံအဆင့်ဆင့်')}</h3>
                                <div className="workflow-grid">
                                    {cat.workflow.map((step: any, sIdx: number) => (
                                        <div key={sIdx} className="workflow-card">
                                            <div className="workflow-num">{sIdx + 1}</div>
                                            <h4>{step.title}</h4>
                                            <p>{step.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* --- Add-ons Section --- */}
                        {cat.addons && cat.addons.length > 0 && (
                            <div className="detail-section" style={{ marginTop: '4rem' }}>
                                <h3 className="detail-title">{t('Extra Services & Add-ons', 'အပိုဝန်ဆောင်မှုများနှင့် ဖြည့်စွက်ချက်များ')}</h3>
                                <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '24px', overflowX: 'auto' }}>
                                    <table className="addon-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                        <thead>
                                            <tr style={{ borderBottom: '1px solid var(--border-faint)', textAlign: 'left' }}>
                                                <th style={{ padding: '12px' }}>{t('Service', 'ဝန်ဆောင်မှု')}</th>
                                                <th style={{ padding: '12px' }}>USD</th>
                                                <th style={{ padding: '12px' }}>MMK</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cat.addons.map((addon: any, aIdx: number) => (
                                                <tr key={aIdx} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                                                    <td style={{ padding: '12px', color: '#fff' }}>{addon.name}</td>
                                                    <td style={{ padding: '12px', color: 'var(--text-gray)' }}>{addon.usd}</td>
                                                    <td style={{ padding: '12px', color: 'var(--primary-red)', fontWeight: 600 }}>{addon.mmk}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* --- FAQ Section --- */}
                        {cat.faqs && cat.faqs.length > 0 && (
                            <div className="detail-section" style={{ marginTop: '4rem' }}>
                                <h3 className="detail-title">{t('Frequently Asked Questions', 'အမေးများသောမေးခွန်းများ')}</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {cat.faqs.map((faq: any, fIdx: number) => {
                                        const isOpen = openFaq === `${cat.id}-${fIdx}`;
                                        return (
                                            <div key={fIdx} className="glass-card faq-item" style={{ borderRadius: '20px', cursor: 'pointer' }} onClick={() => setOpenFaq(isOpen ? null : `${cat.id}-${fIdx}`)}>
                                                <div style={{ padding: '1.2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span style={{ fontWeight: 600, color: '#fff' }}>{faq.q}</span>
                                                    <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} style={{ color: 'var(--primary-red)', fontSize: '0.8rem' }} />
                                                </div>
                                                {isOpen && (
                                                    <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                                        {faq.a}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </section>
                ))}
            </div>

            <footer className="site-footer">
                <p>© 2025 BEKYOVerse — {t('Powered by BekyoCMS', 'BekyoCMS ဖြင့် ပံ့ပိုးထားသည်')}</p>
            </footer>

            <style>{`
                .featured { transform: scale(1.03); z-index: 2; box-shadow: 0 20px 50px var(--primary-red-glow) !important; }
                .detail-title { font-family: 'Fredoka', sans-serif; font-size: 1.6rem; color: #fff; margin-bottom: 2rem; position: relative; padding-left: 15px; }
                .detail-title::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: var(--primary-red); border-radius: 2px; }
                .workflow-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
                .workflow-card { background: rgba(255,255,255,0.03); padding: 2rem; borderRadius: 24px; border: 1px solid var(--border-faint); position: relative; }
                .workflow-num { width: 36px; height: 36px; borderRadius: 18px; background: var(--primary-red); color: #fff; display: flex; alignItems: center; justifyContent: center; font-weight: 800; font-size: 0.9rem; margin-bottom: 1.2rem; }
                .workflow-card h4 { font-family: 'Fredoka', sans-serif; font-size: 1.2rem; color: #fff; margin-bottom: 0.8rem; }
                .workflow-card p { font-size: 0.85rem; color: var(--text-gray); line-height: 1.5; }
                .addon-table th { color: var(--text-gray); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; }
                .faq-item { transition: all 0.3s ease; border: 1px solid var(--border-faint); }
                .faq-item:hover { border-color: rgba(186, 74, 74, 0.4); background: rgba(255,255,255,0.05); }
            `}</style>
        </div>
    );
}
