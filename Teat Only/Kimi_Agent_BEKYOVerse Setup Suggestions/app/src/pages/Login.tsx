import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useAdmin } from '../contexts/AdminContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { students } = useAdmin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      const success = login(email, password, students);
      if (!success) setError('Invalid email or password. Please try again.');
      setIsLoading(false);
    }, 900);
  };

  return (
    <div className="login-hero">
      {/* Ambient blobs */}
      <div className="hero-blob"
        style={{ width: 420, height: 420, top: '-10%', left: '-10%', opacity: 0.04, animationDelay: '0s' }}
      />
      <div className="hero-blob"
        style={{ width: 520, height: 520, bottom: '-15%', right: '-12%', opacity: 0.05, animationDelay: '1.5s' }}
      />

      <div className="login-grid">

        {/* ── LEFT SIDE – Branding ── */}
        <div className="animate-fade-in-up" style={{ textAlign: 'center' }}>

          {/* BEKYOVerse logo pill — original image */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: 'var(--nav-glass)', backdropFilter: 'blur(12px)',
            border: '1px solid var(--nav-border)', borderRadius: 50,
            padding: '6px 22px 6px 8px', marginBottom: 36,
          }}>
            <img
              src="/AI3DHead.png"
              alt="BEKYOVerse"
              className="animate-logo-float"
              style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }}
            />
            <span style={{
              fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: '1.3rem',
              background: 'linear-gradient(135deg, var(--primary-red), #ff8a7a)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>BEKYOVerse</span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: 'clamp(2.8rem, 8vw, 5rem)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '1rem',
            textShadow: '0 0 30px rgba(255,255,255,0.2), 0 10px 40px rgba(0,0,0,0.5)',
            animation: 'titlePulse 3s ease-in-out infinite',
          }}>
            Online Art<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--primary-red) 0%, #ff8a7a 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Academy</span>
          </h1>

          <p style={{
            color: 'var(--text-gray)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            marginBottom: '2.5rem', maxWidth: 460, margin: '0 auto 2.5rem',
          }}>
            Learn traditional character drawing and digital art from{' '}
            <span style={{ color: 'var(--primary-red)', fontWeight: 600 }}>Kyi Zin Thet (Bekyo)</span>
          </p>

          {/* Feature pills — Font Awesome icons */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: 'fa-pencil', label: 'Traditional Drawing' },
              { icon: 'fa-palette', label: 'Digital Art' },
              { icon: 'fa-graduation-cap', label: '8 Lessons / Course' },
            ].map((f) => (
              <div key={f.label} className="glass-card" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '10px 18px', borderRadius: 50, fontSize: '0.88rem',
              }}>
                <i className={`fas ${f.icon}`} style={{ color: 'var(--primary-red)' }} />
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT SIDE – Login form ── */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 28 }}>

            {/* Form heading */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                width: 70, height: 70, borderRadius: '50%',
                background: 'var(--primary-red-dim)',
                border: '1px solid var(--border-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1rem',
              }}>
                <img src="/AI3DHead.png" alt="BEKYOVerse" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover' }} className="animate-logo-float" />
              </div>
              <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.8rem', fontWeight: 700, marginBottom: 4 }}>
                Welcome Back
              </h2>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>
                Sign in to access your courses
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* Email */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: 8, color: 'var(--text-gray)' }}>
                  Email Address
                </label>
                <div style={{ position: 'relative' }}>
                  <i className="fas fa-envelope" style={{
                    position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
                    color: 'var(--text-gray)', fontSize: '0.9rem',
                  }} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input-field"
                    style={{ paddingLeft: 44 }}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: 8, color: 'var(--text-gray)' }}>
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <i className="fas fa-lock" style={{
                    position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
                    color: 'var(--text-gray)', fontSize: '0.9rem',
                  }} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="input-field"
                    style={{ paddingLeft: 44 }}
                    required
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div style={{
                  padding: '12px 16px', borderRadius: 12,
                  background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
                  color: '#f87171', fontSize: '0.875rem',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <i className="fas fa-circle-exclamation" />
                  {error}
                </div>
              )}

              {/* Submit */}
              <button type="submit" disabled={isLoading} className="btn-primary" style={{ width: '100%', gap: 8 }}>
                {isLoading
                  ? <><i className="fas fa-spinner animate-spin" style={{ marginRight: 6 }} /> Signing in…</>
                  : <>Sign In <i className="fas fa-arrow-right" /></>
                }
              </button>
            </form>

            {/* Demo credentials hint */}
            <div style={{
              marginTop: '1.5rem', padding: '14px 18px', borderRadius: 14,
              background: 'var(--primary-red-dim)', border: '1px solid var(--border-accent)',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-gray)', lineHeight: 1.8 }}>
                <span style={{ color: 'var(--primary-red)', fontWeight: 700 }}>
                  <i className="fas fa-circle-info" style={{ marginRight: 4 }} />
                  Demo login:
                </span>
                &nbsp; demo@bekyoverse.com &nbsp;|&nbsp; demo123
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
