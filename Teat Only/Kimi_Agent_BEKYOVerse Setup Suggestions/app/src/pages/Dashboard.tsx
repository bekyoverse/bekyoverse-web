import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { usePayment, courses } from '../contexts/PaymentContext';
import { useLanguage } from '../contexts/LanguageContext';
import Checkout from './Checkout';

const getClassData = (t: (en: string, mm: string) => string) => [
  {
    id: 'traditional',
    title: t('Traditional Character Drawing', 'ရိုးရာကာတွန်းပုံဆွဲနည်း'),
    subtitle: t('Pencil to Cartoon', 'ခဲတံမှ ကာတွန်းသို့'),
    description: t(
      'Learn the fundamentals of character drawing using traditional pencil techniques. Master proportions, expressions, and bring your cartoon characters to life.',
      'ခဲတံအသုံးပြု၍ ကာတွန်းဇာတ်ကောင်ဆွဲခြင်း၏ အခြေခံများကို လေ့လာပါ။ အချိုးအစား၊ မျက်နှာအမူအရာများကို ကျွမ်းကျင်အောင်လေ့ကျင့်ပြီး သင့်ဇာတ်ကောင်များကို အသက်သွင်းပါ။'
    ),
    emoji: '✏️',
    colorFrom: '#d97706',
    colorTo: '#c2410c',
    lessons: 8,
    duration: t('4 weeks', '၄ ပတ်'),
    level: t('Beginner → Intermediate', 'အခြေခံ → အလယ်အလတ်'),
  },
  {
    id: 'digital',
    title: t('Digital Art', 'ဒစ်ဂျစ်တယ်ပန်းချီ'),
    subtitle: t('Digital Creation', 'ဒစ်ဂျစ်တယ်ဖန်တီးမှု'),
    description: t(
      'Transform your traditional skills into digital masterpieces. Learn digital painting, coloring techniques, and professional workflow with Clip Studio Paint.',
      'သင်၏ရိုးရာအနုပညာအရည်အချင်းများကို ဒစ်ဂျစ်တယ်လက်ရာများအဖြစ် ပြောင်းလဲပါ။ Clip Studio Paint ဖြင့် ဒစ်ဂျစ်တယ်ဆေးရောင်ခြယ်နည်းနှင့် ကျွမ်းကျင်လုပ်ငန်းစဉ်များကို လေ့လာပါ။'
    ),
    emoji: '🎨',
    colorFrom: '#0891b2',
    colorTo: '#1d4ed8',
    lessons: 8,
    duration: t('4 weeks', '၄ ပတ်'),
    level: t('Intermediate → Advanced', 'အလယ်အလတ် → အဆင့်မြင့်'),
  },
];

// Shared header component
function SiteHeader({ onLogout, userName }: { onLogout: () => void; userName?: string }) {
  const { language, setLanguage, t } = useLanguage();
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img
            src="/AI3DHead.png"
            alt="BEKYOVerse"
            className="animate-logo-float"
            style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={{
            fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: '1.2rem',
            background: 'linear-gradient(135deg, var(--primary-red), #ff8a7a)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>BEKYOVerse</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            className="btn-secondary"
            style={{ padding: '8px 16px', borderRadius: '50px', fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-faint)', color: 'var(--text-gray)' }}
            onClick={() => window.location.href = '/'}
          >
            <i className="fas fa-house" style={{ marginRight: 8 }} />
            {t('Home', 'ပင်မစာမျက်နှာ')}
          </button>

          <button
            className="btn-secondary"
            style={{ padding: '6px 12px', borderRadius: '50px', fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-faint)', color: 'var(--text-gray)' }}
            onClick={() => setLanguage(language === 'en' ? 'mm' : 'en')}
          >
            <i className="fas fa-language" style={{ marginRight: 6 }} />
            {language === 'en' ? 'MM' : 'EN'}
          </button>

          {userName && (
            <div className="glass-card" style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 50, fontSize: '0.8rem',
              border: '1px solid var(--border-faint)',
            }}>
              <i className="fas fa-user" style={{ color: 'var(--primary-red)', fontSize: '0.8rem' }} />
              <span style={{ maxWidth: '80px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{userName}</span>
            </div>
          )}
          <button
            onClick={onLogout}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 50,
              background: 'transparent',
              border: '1px solid var(--border-faint)',
              color: 'var(--text-light)', cursor: 'pointer', fontSize: '0.8rem',
              fontFamily: "'Poppins', sans-serif",
              transition: 'all 0.3s ease',
            }}
          >
            <i className="fas fa-right-from-bracket" />
            <span style={{ display: 'none' }} className="sm-show">Logout</span>
            <span className="sm-hide">{t('Logout', 'ထွက်ရန်')}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export { SiteHeader };

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { purchasedCourses } = usePayment();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [checkoutCourse, setCheckoutCourse] = useState<string | null>(null);

  const classData = getClassData(t);

  const navigateToClass = (classId: string) => {
    navigate(`/${classId}`);
  };

  return (
    <div className="page-wrapper">
      {checkoutCourse && (
        <Checkout
          courseId={checkoutCourse}
          onClose={() => setCheckoutCourse(null)}
          onSuccess={() => setCheckoutCourse(null)}
        />
      )}

      <SiteHeader onLogout={logout} userName={user?.name} />

      {/* Welcome hero */}
      <section style={{ padding: '4rem 1.5rem 2rem', textAlign: 'center', width: '100%' }}>
        <div className="animate-fade-in-up" style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ color: 'var(--primary-red)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            {t('Your Dashboard', 'သင်၏ ဒက်ရှ်ဘုတ်')}
          </p>
          <h1 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: 'clamp(2.4rem, 7vw, 4rem)',
            fontWeight: 900, color: '#fff',
            textShadow: '0 0 30px rgba(255,255,255,0.15)',
            marginBottom: '1rem',
          }}>
            {t('Welcome back,', 'ပြန်လည်ကြိုဆိုပါတယ်၊')}{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--primary-red), #ff8a7a)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              {user?.name.split(' ')[0]}
            </span>!
          </h1>
          <p style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>
            {t('Continue your artistic journey with Kyi Zin Thet (Bekyo).', 'Kyi Zin Thet (Bekyo) နှင့်အတူ သင်၏အနုပညာခရီးကို ဆက်လက်လျှောက်လှမ်းပါ။')}
          </p>
        </div>
      </section>

      <div className="content-wrapper" style={{ paddingTop: '1.5rem', paddingBottom: '3rem' }}>

        {/* ── My Courses ── */}
        {purchasedCourses.length > 0 && (
          <div className="animate-fade-in-up" style={{ marginBottom: '3rem', animationDelay: '0.1s' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Fredoka', sans-serif", fontSize: '1.6rem', marginBottom: '1.5rem' }}>
              <i className="fas fa-circle-check" style={{ color: '#22c55e' }} />
              {t('My Courses', 'ကျွန်ုပ်၏သင်တန်းများ')}
            </h2>
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', width: '100%' }}>
              {classData
                .filter((c) => purchasedCourses.includes(c.id))
                .map((cls) => (
                  <div key={cls.id} className="course-card purchased" onClick={() => navigateToClass(cls.id)}>
                    <div style={{
                      height: 100,
                      background: `linear-gradient(135deg, ${cls.colorFrom}, ${cls.colorTo})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 42, position: 'relative',
                    }}>
                      <span style={{ opacity: 0.5 }}>{cls.emoji}</span>
                      <div style={{
                        position: 'absolute', top: 10, right: 10,
                        background: '#22c55e', color: '#fff', fontSize: '0.72rem',
                        padding: '3px 10px', borderRadius: 50,
                        display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600,
                      }}>
                        <i className="fas fa-circle-check" style={{ width: 12, height: 12 }} /> {t('Purchased', 'ဝယ်ယူပြီး')}
                      </div>
                    </div>
                    <div style={{ padding: '1.2rem' }}>
                      <h3 style={{ fontWeight: 700, marginBottom: 4 }}>{cls.title}</h3>
                      <p style={{ color: 'var(--primary-red)', fontSize: '0.85rem', marginBottom: '1rem' }}>{cls.subtitle}</p>
                      <button style={{
                        width: '100%', padding: '10px',
                        borderRadius: 12, background: 'rgba(34,197,94,0.12)',
                        border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e',
                        cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem',
                        fontFamily: "'Poppins', sans-serif",
                        transition: 'all 0.3s ease',
                      }}>
                        {t('Continue Learning →', 'ဆက်လက်လေ့လာရန် →')}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ── Available Courses ── */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Fredoka', sans-serif", fontSize: '1.6rem', marginBottom: '1.5rem' }}>
            <i className="fas fa-lock" style={{ color: 'var(--primary-red)' }} />
            {t('Available Courses', 'ရရှိနိုင်သောသင်တန်းများ')}
          </h2>

          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', width: '100%' }}>
            {classData
              .filter((cls) => !purchasedCourses.includes(cls.id))
              .map((cls) => {
                const price = courses.find((c) => c.id === cls.id)?.price ?? 0;
                return (
                  <div key={cls.id} className="course-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    {/* Card banner */}
                    <div style={{
                      height: 140, position: 'relative', overflow: 'hidden',
                      background: `linear-gradient(135deg, ${cls.colorFrom}, ${cls.colorTo})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ fontSize: 64, opacity: 0.25 }}>{cls.emoji}</span>
                      {/* Price tag */}
                      <div className="glass-card" style={{
                        position: 'absolute', top: 14, right: 14,
                        padding: '4px 14px', borderRadius: 50, fontSize: '0.875rem', fontWeight: 700,
                        border: '1px solid var(--nav-border)',
                      }}>
                        {price.toLocaleString()} MMK
                      </div>
                    </div>

                    {/* Card body */}
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 4 }}>{cls.title}</h3>
                      <p style={{ color: 'var(--primary-red)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>{cls.subtitle}</p>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', marginBottom: '1.2rem', lineHeight: 1.6 }}>
                        {cls.description.slice(0, 110)}…
                      </p>

                      {/* Stats row */}
                      <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '1.4rem', flexWrap: 'wrap' }}>
                        {[
                          { icon: 'fa-circle-play', label: t(`${cls.lessons} Lessons`, `${cls.lessons} ခု`) },
                          { icon: 'fa-clock', label: cls.duration },
                          { icon: 'fa-trophy', label: cls.level },
                        ].map(({ icon, label }) => (
                          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.78rem', color: 'var(--text-gray)' }}>
                            <i className={`fas ${icon}`} style={{ color: 'var(--primary-red)', fontSize: '0.8rem' }} />
                            {label}
                          </div>
                        ))}
                      </div>

                      {/* Buy button */}
                      <button
                        onClick={() => setCheckoutCourse(cls.id)}
                        className="btn-primary"
                        style={{ width: '100%', gap: 8 }}
                      >
                        <i className="fas fa-lock" />
                        {t('Buy Course', 'သင်တန်းဝယ်ယူရန်')} — {price.toLocaleString()} MMK
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* ── Instructor section ── */}
        <div className="glass-card animate-fade-in-up" style={{
          padding: '2rem', marginTop: '3.5rem',
          maxWidth: 700, marginLeft: 'auto', marginRight: 'auto',
          animationDelay: '0.4s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, var(--primary-red), #c94030)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 36,
            }} className="animate-float">
              <img src="/AI3DHead.png" alt="Bekyo" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.3rem', marginBottom: 4 }}>
                {t('Instructor: Kyi Zin Thet', 'နည်းပြ - Kyi Zin Thet')}
              </h3>
              <p style={{ color: 'var(--primary-red)', fontWeight: 600, marginBottom: 6 }}>aka Bekyo</p>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem' }}>
                {t(
                  'Professional animator and illustrator with 5+ years of experience. Creator of GXG Comics and BEKYOVerse studio.',
                  'လုပ်ငန်းအတွေ့အကြုံ ၅ နှစ်ကျော်ရှိသော ကျွမ်းကျင်အန်နီမေးတာနှင့် သရုပ်ဖော်ပန်းချီဆရာတစ်ဦးဖြစ်သည်။ GXG Comics နှင့် BEKYOVerse စတူဒီယိုကို တည်ထောင်သူဖြစ်သည်။'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* ── Learning tips ── */}
        <div className="animate-fade-in-up" style={{ maxWidth: 700, margin: '2.5rem auto 0', animationDelay: '0.5s' }}>
          <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.3rem', textAlign: 'center', marginBottom: '1.2rem' }}>
            {t('Learning Tips', 'လေ့လာမှုဆိုင်ရာ အကြံပြုချက်များ')}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
            {[
              { emoji: '📚', title: t('Study Regularly', 'ပုံမှန်လေ့လာပါ'), hint: t('Practice 30 mins daily', 'နေ့စဉ် ၃၀ မိနစ် လေ့ကျင့်ပါ') },
              { emoji: '✏️', title: t('Take Notes', 'မှတ်စုထုတ်ပါ'), hint: t('Write down key techniques', 'အဓိကနည်းစနစ်များကို မှတ်သားပါ') },
              { emoji: '🎯', title: t('Set Goals', 'ပန်းတိုင်သတ်မှတ်ပါ'), hint: t('Complete weekly targets', 'အပတ်စဉ်ပန်းတိုင်များ ပြည့်မီအောင်လုပ်ပါ') },
            ].map((tip) => (
              <div key={tip.title} className="glass-card" style={{ padding: '1.2rem', textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{tip.emoji}</div>
                <h4 style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: 4 }}>{tip.title}</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.78rem' }}>{tip.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <p>© 2025 BEKYOVerse. {t('All rights reserved.', 'မူပိုင်ခွင့်အားလုံးရှိသည်။')}</p>
      </footer>
    </div>
  );
}
