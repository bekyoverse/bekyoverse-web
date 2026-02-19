import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { usePayment } from '../contexts/PaymentContext';
import { useLanguage } from '../contexts/LanguageContext';
import Checkout from '../pages/Checkout'; // Adjusted path assuming this component is in components folder, but Checkout is in pages. Import relative to components would be ../pages/Checkout
import { SiteHeader } from '../pages/Dashboard';
import { Play, Lock, CreditCard } from 'lucide-react';

export interface Lesson {
    id: number;
    title: string;
    duration: string;
    week: number;
}

export interface ResourceItem {
    name: string;
    icon: string;
}

interface HeroEmoji {
    icon: string;
    opacity: number;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
}

interface ClassPageTemplateProps {
    courseId: 'digital' | 'traditional'; // Add other IDs if needed
    heroColors: [string, string]; // Start and end colors for gradient
    heroEmojis: HeroEmoji[];
    courseTitle: string;
    courseSubtitle: string; // The smaller text above title
    courseDescription: string;
    priceFormatted: string;
    lessons: Lesson[];
    resources: ResourceItem[];
    resourceSectionTitle: string; // "Required Software" or "Required Materials"
    resourceNote?: string; // Optional note like "Clip Studio must be purchased..."
}

export default function ClassPageTemplate({
    courseId,
    heroColors,
    heroEmojis,
    courseTitle,
    courseSubtitle,
    courseDescription,
    priceFormatted,
    lessons,
    resources,
    resourceSectionTitle,
    resourceNote
}: ClassPageTemplateProps) {
    const { logout, user } = useAuth();
    const { hasAccess } = usePayment();
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [activeLesson, setActiveLesson] = useState<number | null>(null);
    const [showCheckout, setShowCheckout] = useState(false);
    const hasPurchased = hasAccess(courseId);

    return (
        <div className="page-wrapper">
            {showCheckout && (
                <Checkout
                    courseId={courseId}
                    onClose={() => setShowCheckout(false)}
                    onSuccess={() => setShowCheckout(false)}
                />
            )}

            <SiteHeader onLogout={logout} userName={user?.name} />

            {/* Course hero banner */}
            <section style={{
                height: 280,
                background: `linear-gradient(135deg, ${heroColors[0]} 0%, ${heroColors[1]} 100%)`,
                position: 'relative', overflow: 'hidden',
                display: 'flex', alignItems: 'center',
            }}>
                {heroEmojis.map((emoji, index) => (
                    <span key={index} style={{
                        position: 'absolute',
                        top: emoji.top,
                        left: emoji.left,
                        right: emoji.right,
                        bottom: emoji.bottom,
                        fontSize: 80,
                        opacity: emoji.opacity
                    }}>
                        {emoji.icon}
                    </span>
                ))}

                <div className="content-wrapper" style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <button
                            onClick={() => navigate('/dashboard')}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 6,
                                background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
                                color: '#fff', borderRadius: 50, padding: '6px 16px', cursor: 'pointer',
                                fontSize: '0.85rem', marginBottom: 16,
                                backdropFilter: 'blur(8px)', fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            <i className="fas fa-arrow-left" />
                            {t('Back to Courses', 'သင်တန်းများသို့')}
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                            <i className="fas fa-display" style={{ color: 'rgba(255,255,255,0.8)' }} />
                            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', fontWeight: 500 }}>{courseSubtitle}</span>
                        </div>
                        <h1 style={{
                            fontFamily: "'Fredoka', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                            fontWeight: 900, color: '#fff', marginBottom: 8,
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        }}>
                            {courseTitle}
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 500, fontSize: '0.95rem' }}>
                            {courseDescription}
                        </p>
                    </div>

                    {!hasPurchased && (
                        <div className="glass-card" style={{ padding: '1.5rem', minWidth: 200, textAlign: 'center', flexShrink: 0, marginLeft: '2rem' }}>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', marginBottom: 4 }}>{t('Course Price', 'သင်တန်းစျေးနှုန်း')}</p>
                            <p style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary-red)', fontFamily: "'Fredoka', sans-serif", marginBottom: '1rem' }}>
                                {priceFormatted}
                            </p>
                            <button className="btn-primary" style={{ width: '100%', gap: 6 }} onClick={() => setShowCheckout(true)}>
                                <i className="fas fa-credit-card" /> {t('Buy Now', 'အခုပဲ ဝယ်ယူပါ')}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Main content */}
            <div className="content-wrapper" style={{ paddingTop: '2.5rem' }}>
                <div className="class-page-grid">

                    {/* Left */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {/* Video player */}
                        <div className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
                            {hasPurchased ? (
                                activeLesson ? (
                                    <div style={{
                                        aspectRatio: '16/9', background: '#000',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        position: 'relative',
                                    }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <Play style={{ width: 64, height: 64, color: 'var(--primary-red)', margin: '0 auto 12px' }} />
                                            <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem' }}>Video Player</p>
                                            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginTop: 6 }}>
                                                {lessons.find((l) => l.id === activeLesson)?.title}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setActiveLesson(null)}
                                            style={{
                                                position: 'absolute', top: 12, right: 12,
                                                background: 'rgba(0,0,0,0.6)', border: 'none', color: '#fff',
                                                borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', fontSize: '1rem',
                                            }}
                                        >✕</button>
                                    </div>
                                ) : (
                                    <div style={{
                                        aspectRatio: '16/9',
                                        background: 'linear-gradient(135deg, var(--dark-red), var(--body-bg-from))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: 56, marginBottom: 12 }}>💻</div>
                                            <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.4rem', marginBottom: 6 }}>{t('Select a Lesson to Start', 'သင်ခန်းစာတစ်ခုကို ရွေးချယ်ပါ')}</h3>
                                            <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>{t('Choose from the lesson list below', 'အောက်ပါ သင်ခန်းစာစာရင်းမှ ရွေးချယ်ပါ')}</p>
                                        </div>
                                    </div>
                                )
                            ) : (
                                <div style={{
                                    aspectRatio: '16/9', position: 'relative', overflow: 'hidden',
                                    background: 'linear-gradient(135deg, var(--dark-red), var(--body-bg-from))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
                                    <div style={{ position: 'relative', textAlign: 'center', padding: '2rem' }}>
                                        <Lock style={{ width: 56, height: 56, color: 'var(--primary-red)', margin: '0 auto 16px' }} />
                                        <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.8rem', marginBottom: 8 }}>{t('Course Locked', 'သင်တန်းကို ပိတ်ထားပါသည်')}</h3>
                                        <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem', maxWidth: 380 }}>
                                            {t(
                                                `Purchase this course to unlock all ${lessons.length} lessons and start learning!`,
                                                `ဤသင်တန်းကို ဝယ်ယူပြီး သင်ခန်းစာ ${lessons.length} ခုလုံးကို စတင်လေ့လာနိုင်ပါပြီ။`
                                            )}
                                        </p>
                                        <button className="btn-primary" style={{ gap: 8 }} onClick={() => setShowCheckout(true)}>
                                            <CreditCard style={{ width: 18, height: 18 }} />
                                            {t(`Unlock for ${priceFormatted}`, `${priceFormatted} ဖြင့် ဖွင့်ရန်`)}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Lessons */}
                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Fredoka', sans-serif", fontSize: '1.3rem', marginBottom: '1.2rem' }}>
                                <i className="fas fa-display" style={{ color: 'var(--primary-red)' }} />
                                {t('Course Content', 'သင်ခန်းစာ မာတိကာ')}
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {lessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        onClick={() => hasPurchased && setActiveLesson(lesson.id)}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: 14,
                                            padding: '12px 16px', borderRadius: 12,
                                            border: `1px solid ${!hasPurchased ? 'var(--border-faint)' : activeLesson === lesson.id ? 'var(--primary-red)' : 'var(--border-faint)'}`,
                                            background: activeLesson === lesson.id ? 'var(--primary-red-dim)' : 'transparent',
                                            cursor: hasPurchased ? 'pointer' : 'not-allowed',
                                            opacity: hasPurchased ? 1 : 0.6,
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <div style={{
                                            width: 38, height: 38, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            background: hasPurchased ? 'var(--primary-red-dim)' : 'var(--card-bg)',
                                            color: hasPurchased ? 'var(--primary-red)' : 'var(--text-gray)',
                                        }}>
                                            {hasPurchased ? <Play style={{ width: 16, height: 16 }} /> : <Lock style={{ width: 16, height: 16 }} />}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ fontWeight: 500, fontSize: '0.9rem', color: hasPurchased ? 'var(--text-light)' : 'var(--text-gray)' }}>{lesson.title}</p>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8rem', color: 'var(--text-gray)', flexShrink: 0 }}>
                                            <i className="fas fa-clock" style={{ fontSize: '0.75rem' }} />
                                            {lesson.duration}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

                        {!hasPurchased ? (
                            <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--border-accent)' }}>
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, marginBottom: '0.75rem' }}>
                                    <i className="fas fa-lock" style={{ color: 'var(--primary-red)' }} />
                                    {t('Unlock Full Course', 'သင်တန်းတစ်ခုလုံးကို ဖွင့်ရန်')}
                                </h3>
                                <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                                    {t(`Get access to all ${lessons.length} lessons with lifetime access.`, `သင်ခန်းစာ ${lessons.length} ခုလုံးကို တစ်သက်တာ လေ့လာနိုင်ပါပြီ။`)}
                                </p>
                                <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '2rem', fontWeight: 700, color: 'var(--primary-red)', marginBottom: '1rem' }}>
                                    {priceFormatted}
                                </div>
                                <button className="btn-primary" style={{ width: '100%', gap: 8 }} onClick={() => setShowCheckout(true)}>
                                    <i className="fas fa-credit-card" /> {t('Purchase Now', 'အခုပဲ ဝယ်ယူပါ')}
                                </button>
                            </div>
                        ) : (
                            <div className="glass-card" style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontWeight: 700, marginBottom: '1rem' }}>{t('Your Progress', 'သင်၏ လေ့လာမှုအခြေအနေ')}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ width: 56, height: 56, borderRadius: '50%', border: '3px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <span style={{ fontWeight: 700, color: '#22c55e' }}>0%</span>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--text-gray)' }}>{t(`0 of ${lessons.length} lessons completed`, `သင်ခန်းစာ ${lessons.length} ခုအနက် ၀ ခု ပြီးစီးသည်`)}</p>
                                        <p style={{ fontSize: '0.875rem', color: '#22c55e', marginTop: 4 }}>{t("Let's get started!", 'စတင်လိုက်ရအောင်!')}</p>
                                    </div>
                                </div>
                                <div style={{ height: 6, background: 'var(--card-bg)', borderRadius: 50, overflow: 'hidden' }}>
                                    <div style={{ width: '0%', height: '100%', background: 'linear-gradient(90deg, #22c55e, #86efac)', borderRadius: 50 }} />
                                </div>
                            </div>
                        )}

                        {/* Resources */}
                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, marginBottom: '1rem' }}>
                                <i className="fas fa-download" style={{ color: 'var(--primary-red)' }} />
                                {resourceSectionTitle}
                            </h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', marginBottom: resourceNote ? '1rem' : 0 }}>
                                {resources.map((r) => (
                                    <li key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.875rem' }}>
                                        <span style={{ fontSize: 20 }}>{r.icon}</span>
                                        <span>{r.name}</span>
                                    </li>
                                ))}
                            </ul>
                            {resourceNote && (
                                <div style={{
                                    padding: '10px 14px', borderRadius: 12,
                                    background: 'var(--primary-red-dim)', border: '1px solid var(--border-accent)',
                                }}>
                                    <p style={{ fontSize: '0.78rem', color: 'var(--text-gray)' }}>
                                        <span style={{ color: 'var(--primary-red)', fontWeight: 600 }}>{t('Note: ', 'မှတ်ချက် - ')}</span>
                                        {resourceNote}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Instructor */}
                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontWeight: 700, marginBottom: '1rem' }}>{t('Instructor', 'နည်းပြ')}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
                                <div style={{
                                    width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                                    overflow: 'hidden',
                                }}>
                                    <img src="/AI3DHead.png" alt="Bekyo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 600 }}>Kyi Zin Thet</p>
                                    <p style={{ color: 'var(--primary-red)', fontSize: '0.85rem' }}>aka Bekyo</p>
                                </div>
                            </div>
                            <a
                                href="https://m.me/bekyoverse"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                    width: '100%', padding: '10px', borderRadius: 12,
                                    border: '1px solid var(--border-faint)',
                                    color: 'var(--text-light)', textDecoration: 'none', fontSize: '0.875rem',
                                    fontFamily: "'Poppins', sans-serif",
                                    transition: 'all 0.3s ease',
                                    background: 'transparent',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--primary-red)';
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--primary-red)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-faint)';
                                }}
                            >
                                <i className="fas fa-comment" />
                                {t('Ask a Question', 'မေးခွန်းများ မေးရန်')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="site-footer" style={{ marginTop: '3rem' }}>
                <p>© 2025 BEKYOVerse. {t('All rights reserved.', 'မူပိုင်ခွင့်အားလုံးရှိသည်။')}</p>
            </footer>
        </div>
    );
}
