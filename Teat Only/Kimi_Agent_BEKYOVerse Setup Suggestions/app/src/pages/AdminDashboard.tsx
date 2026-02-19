
import { useState, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useAdmin, type Student, type CourseAccess } from '../contexts/AdminContext';
import { courses } from '../contexts/PaymentContext';
import { getSiteConfig, saveSiteConfig, DEFAULT_CONFIG } from '../lib/siteConfig';

// ─── Helpers ────────────────────────────────────────────────────────────────

function fmt(iso: string | null) {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function daysLeft(iso: string | null): number | null {
    if (!iso) return null;
    const diff = new Date(iso).getTime() - Date.now();
    return Math.ceil(diff / 86_400_000);
}

function statusBadge(access: CourseAccess | undefined) {
    if (!access) return <span style={badge('#555')}>No access</span>;
    if (access.status === 'revoked') return <span style={badge('#c0392b')}>Revoked</span>;
    if (access.status === 'expired') return <span style={badge('#e67e22')}>Expired</span>;
    const days = daysLeft(access.expiresAt);
    if (days !== null && days <= 0) return <span style={badge('#e67e22')}>Expired</span>;
    if (days !== null && days <= 7) return <span style={badge('#f39c12')}>⚠ {days}d left</span>;
    if (access.expiresAt === null) return <span style={badge('#27ae60')}>✓ Lifetime</span>;
    return <span style={badge('#27ae60')}>✓ {days}d left</span>;
}

function badge(bg: string): React.CSSProperties {
    return {
        background: bg + '22', border: `1px solid ${bg}55`,
        color: bg, fontSize: '0.72rem', fontWeight: 700,
        padding: '3px 10px', borderRadius: 50, display: 'inline-block',
    };
}

// ─── Shared UI Components ──────────────────────────────────────────────────

function AddStudentModal({ onClose }: { onClose: () => void }) {
    const { addStudent } = useAdmin();
    const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
    const [err, setErr] = useState('');
    const [saving, setSaving] = useState(false);

    const submit = async () => {
        if (!form.name || !form.email || !form.password) { setErr('Name, Email, Password required'); return; }
        setSaving(true);
        await addStudent(form);
        onClose();
    };

    return (
        <div style={overlay}>
            <div className="glass-card" style={{ padding: '2rem', width: '100%', maxWidth: 420, borderRadius: 24 }}>
                <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.4rem', marginBottom: '1.5rem' }}>
                    <i className="fas fa-user-plus" style={{ color: 'var(--primary-red)', marginRight: 10 }} />
                    Add New Student
                </h3>
                {[
                    { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Ma Hnin ...' },
                    { label: 'Email', key: 'email', type: 'email', placeholder: 'student@email.com' },
                    { label: 'Password', key: 'password', type: 'text', placeholder: 'Initial password' },
                    { label: 'Phone (optional)', key: 'phone', type: 'text', placeholder: '09 ...' },
                ].map(({ label, key, type, placeholder }) => (
                    <div key={key} style={{ marginBottom: '1rem' }}>
                        <label style={{ fontSize: '0.82rem', color: 'var(--text-gray)', display: 'block', marginBottom: 6 }}>{label}</label>
                        <input
                            type={type}
                            value={(form as any)[key]}
                            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                            placeholder={placeholder}
                            className="input-field"
                        />
                    </div>
                ))}
                {err && <p style={{ color: '#f87171', fontSize: '0.82rem', marginBottom: '1rem' }}>{err}</p>}
                <div style={{ display: 'flex', gap: 12, marginTop: '0.5rem' }}>
                    <button className="btn-primary" style={{ flex: 1 }} onClick={submit} disabled={saving}>
                        {saving ? <><i className="fas fa-spinner animate-spin" /> Saving…</> : 'Add Student'}
                    </button>
                    <button onClick={onClose} style={cancelBtn} disabled={saving}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

function AccessModal({ student, courseId, existing, onClose }: { student: Student; courseId: string; existing: CourseAccess | undefined; onClose: () => void }) {
    const { grantAccess, revokeAccess, updateExpiry } = useAdmin();
    const course = courses.find((c) => c.id === courseId);
    const [lifetime, setLifetime] = useState(!existing?.expiresAt);
    const [expiry, setExpiry] = useState(existing?.expiresAt ? existing.expiresAt.slice(0, 10) : '');
    const [saving, setSaving] = useState(false);

    const submit = async () => {
        setSaving(true);
        const expiresAt = lifetime ? null : expiry ? new Date(expiry).toISOString() : null;
        if (existing) await updateExpiry(student.id, courseId, expiresAt);
        else await grantAccess(student.id, courseId, expiresAt);
        onClose();
    };

    const handleRevoke = async () => {
        setSaving(true);
        await revokeAccess(student.id, courseId);
        onClose();
    };

    return (
        <div style={overlay}>
            <div className="glass-card" style={{ padding: '2rem', width: '100%', maxWidth: 400, borderRadius: 24 }}>
                <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.3rem', marginBottom: 6 }}>
                    {existing ? 'Edit Access' : 'Grant Access'}
                </h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                    {student.name} → {course?.name}
                </p>

                <label style={checkRow}>
                    <input type="checkbox" checked={lifetime} onChange={(e) => setLifetime(e.target.checked)} />
                    <span style={{ marginLeft: 8 }}>Lifetime access (no expiry)</span>
                </label>

                {!lifetime && (
                    <div style={{ marginTop: '1rem' }}>
                        <label style={{ fontSize: '0.82rem', color: 'var(--text-gray)', display: 'block', marginBottom: 6 }}>
                            Access expires on
                        </label>
                        <input
                            type="date"
                            value={expiry}
                            min={new Date().toISOString().slice(0, 10)}
                            onChange={(e) => setExpiry(e.target.value)}
                            className="input-field"
                        />
                    </div>
                )}

                <div style={{ display: 'flex', gap: 12, marginTop: '1.5rem' }}>
                    <button className="btn-primary" style={{ flex: 1 }} onClick={submit} disabled={saving}>
                        {saving ? <><i className="fas fa-spinner animate-spin" /> Saving…</> : 'Save'}
                    </button>
                    {existing && existing.status === 'active' && (
                        <button
                            onClick={handleRevoke}
                            disabled={saving}
                            style={{ ...cancelBtn, background: 'rgba(192,57,43,0.15)', borderColor: '#c0392b55', color: '#f87171' }}
                        >
                            Revoke
                        </button>
                    )}
                    <button onClick={onClose} style={cancelBtn} disabled={saving}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

// ─── Website Tab (CMS) ────────────────────────────────────────────────────────

function WebsiteTab() {
    const [config, setConfig] = useState(() => getSiteConfig());
    const [saved, setSaved] = useState(false);
    const [activeMainTab, setActiveMainTab] = useState<'general' | 'portfolio' | 'pricing'>('general');
    const [selectedCatIdx, setSelectedCatIdx] = useState(0);
    const [activeLang, setActiveLang] = useState<'en' | 'mm'>('en');

    const save = () => {
        saveSiteConfig(config);
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    const reset = () => {
        if (confirm('Reset all website content to defaults?')) {
            setConfig(DEFAULT_CONFIG);
            saveSiteConfig(DEFAULT_CONFIG);
        }
    };

    const updateConfig = (path: string, value: any) => {
        const newConfig = { ...config };
        const keys = path.split('.');
        let current = newConfig;
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
        setConfig({ ...newConfig });
    };

    return (
        <div className="animate-fade-in-up">
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(180px, 1fr) 4fr', gap: '2rem' }}>

                {/* ── Sidebar ── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {([
                        { id: 'general', label: '🏠 General', color: '#3b82f6' },
                        { id: 'portfolio', label: '🎬 Portfolio', color: '#8b5cf6' },
                        { id: 'pricing', label: '💰 Pricing', color: 'var(--primary-red)' }
                    ] as const).map(t => (
                        <button
                            key={t.id}
                            onClick={() => { setActiveMainTab(t.id); setSelectedCatIdx(0); }}
                            style={{
                                padding: '12px 18px', borderRadius: 16, border: 'none', cursor: 'pointer',
                                fontSize: '0.9rem', fontWeight: 600, textAlign: 'left',
                                background: activeMainTab === t.id ? t.color : 'var(--card-bg)',
                                color: activeMainTab === t.id ? '#fff' : 'var(--text-gray)',
                                transition: 'all 0.3s ease',
                                display: 'flex', alignItems: 'center', gap: 10
                            }}
                        >
                            {t.label}
                        </button>
                    ))}
                    <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: 4, display: 'flex' }}>
                            {(['en', 'mm'] as const).map(l => (
                                <button
                                    key={l}
                                    onClick={() => setActiveLang(l)}
                                    style={{
                                        flex: 1, padding: '6px', borderRadius: 10, border: 'none', cursor: 'pointer',
                                        fontSize: '0.75rem', fontWeight: 700,
                                        background: activeLang === l ? 'var(--primary-red)' : 'transparent',
                                        color: activeLang === l ? '#fff' : 'var(--text-gray)',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        <button className="btn-primary" onClick={save} style={{ width: '100%', padding: '10px', marginTop: 8 }}>
                            <i className={`fas ${saved ? 'fa-check' : 'fa-save'}`} /> {saved ? 'Saved!' : 'Save All'}
                        </button>
                        <button onClick={reset} style={{ ...cancelBtn, width: '100%', marginTop: 2, fontSize: '0.75rem', padding: '8px' }}>Reset CMS</button>
                    </div>
                </div>

                {/* ── Content Area ── */}
                <div style={{ minHeight: '60vh' }}>

                    {/* General Section */}
                    {activeMainTab === 'general' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="glass-card" style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#3b82f6' }}>Hero & About ({activeLang.toUpperCase()})</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                                    <div>
                                        <label className="input-label">Site Title</label>
                                        <input className="input-field" value={config[activeLang].hero.title} onChange={e => updateConfig(`${activeLang}.hero.title`, e.target.value)} />
                                    </div>
                                    <div>
                                        <label className="input-label">Hero Subtitle</label>
                                        <input className="input-field" value={config[activeLang].hero.subtitle} onChange={e => updateConfig(`${activeLang}.hero.subtitle`, e.target.value)} />
                                    </div>
                                    <div style={{ gridColumn: 'span 2' }}>
                                        <label className="input-label">Hero Tagline</label>
                                        <textarea className="input-field" style={{ height: 80 }} value={config[activeLang].hero.tagline} onChange={e => updateConfig(`${activeLang}.hero.tagline`, e.target.value)} />
                                    </div>
                                    <div style={{ gridColumn: 'span 2' }}>
                                        <label className="input-label">About Me Text</label>
                                        <textarea className="input-field" style={{ height: 120 }} value={config[activeLang].about.text} onChange={e => updateConfig(`${activeLang}.about.text`, e.target.value)} />
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card" style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#3b82f6' }}>Social Links</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                                    <div>
                                        <label className="input-label">Email</label>
                                        <input className="input-field" value={config.contact.email} onChange={e => updateConfig('contact.email', e.target.value)} />
                                    </div>
                                    {Object.keys(config.contact.links).map(k => (
                                        <div key={k}>
                                            <label className="input-label">{k.charAt(0).toUpperCase() + k.slice(1)}</label>
                                            <input className="input-field" value={(config.contact.links as any)[k]} onChange={e => updateConfig(`contact.links.${k}`, e.target.value)} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Portfolio Section */}
                    {activeMainTab === 'portfolio' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 10 }}>
                                {config[activeLang].portfolio.categories.map((cat: any, i: number) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedCatIdx(i)}
                                        style={{
                                            padding: '8px 20px', borderRadius: 12, border: 'none', cursor: 'pointer',
                                            background: selectedCatIdx === i ? '#8b5cf6' : 'var(--card-bg)',
                                            color: selectedCatIdx === i ? '#fff' : 'var(--text-gray)',
                                            fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {cat.title}
                                    </button>
                                ))}
                                <button
                                    onClick={() => {
                                        const newCats = [...config[activeLang].portfolio.categories, { id: 'new-cat', title: 'New Category', videos: [] }];
                                        updateConfig(`${activeLang}.portfolio.categories`, newCats);
                                        setSelectedCatIdx(newCats.length - 1);
                                    }}
                                    style={{ padding: '8px 15px', borderRadius: 12, border: '1px dashed #8b5cf6', background: 'transparent', color: '#8b5cf6', cursor: 'pointer' }}
                                >
                                    + Add Category
                                </button>
                            </div>

                            {config[activeLang].portfolio.categories[selectedCatIdx] && (
                                <div className="glass-card" style={{ padding: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                        <div style={{ flex: 1, maxWidth: 300 }}>
                                            <label className="input-label">Category Name ({activeLang.toUpperCase()})</label>
                                            <input className="input-field" value={config[activeLang].portfolio.categories[selectedCatIdx].title} onChange={e => {
                                                const newCats = [...config[activeLang].portfolio.categories];
                                                newCats[selectedCatIdx].title = e.target.value;
                                                newCats[selectedCatIdx].id = e.target.value.toLowerCase().replace(/\s+/g, '-');
                                                updateConfig(`${activeLang}.portfolio.categories`, newCats);
                                            }} />
                                        </div>
                                        <button className="small-btn" style={{ color: '#f87171' }} onClick={() => {
                                            if (confirm('Delete category?')) {
                                                const newCats = config[activeLang].portfolio.categories.filter((_: any, i: number) => i !== selectedCatIdx);
                                                updateConfig(`${activeLang}.portfolio.categories`, newCats);
                                                setSelectedCatIdx(0);
                                            }
                                        }}>Remove Category</button>
                                    </div>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label className="input-label">Add Vimeo Video (Paste URL or ID)</label>
                                        <div style={{ display: 'flex', gap: 10 }}>
                                            <input className="input-field" id="newPortVideo" placeholder="https://vimeo.com/..." />
                                            <button className="btn-primary" onClick={() => {
                                                const input = document.getElementById('newPortVideo') as HTMLInputElement;
                                                const val = input.value.trim();
                                                // Vimeo Regex: Supports vimeo.com/123456, player.vimeo.com/video/123456, or just 123456
                                                const idMatch = val.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/|^)([0-9]+)/);
                                                const id = idMatch ? idMatch[1] : null;

                                                if (id) {
                                                    const newCats = [...config[activeLang].portfolio.categories];
                                                    if (!newCats[selectedCatIdx].videos.includes(id)) {
                                                        newCats[selectedCatIdx].videos.push(id);
                                                        updateConfig(`${activeLang}.portfolio.categories`, newCats);
                                                        input.value = '';
                                                    }
                                                } else {
                                                    alert('Invalid Vimeo URL or ID');
                                                }
                                            }}>Add</button>
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
                                        {config[activeLang].portfolio.categories[selectedCatIdx].videos.map((vid: string, vIdx: number) => (
                                            <div key={vIdx} style={{ position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
                                                {/* Use vumbnail.com for Vimeo thumbnails to match HomePage */}
                                                <img
                                                    src={`https://vumbnail.com/${vid}.jpg`}
                                                    style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
                                                    alt=""
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/AI3DHead.png'; // Fallback
                                                    }}
                                                />
                                                <button
                                                    onClick={() => {
                                                        const newCats = [...config[activeLang].portfolio.categories];
                                                        newCats[selectedCatIdx].videos.splice(vIdx, 1);
                                                        updateConfig(`${activeLang}.portfolio.categories`, newCats);
                                                    }}
                                                    style={{ position: 'absolute', top: 5, right: 5, width: 24, height: 24, borderRadius: 12, border: 'none', background: 'rgba(0,0,0,0.7)', color: '#fff', cursor: 'pointer' }}
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Pricing Section */}
                    {activeMainTab === 'pricing' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 10 }}>
                                {config[activeLang].pricing.categories.map((cat: any, i: number) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedCatIdx(i)}
                                        style={{
                                            padding: '8px 20px', borderRadius: 12, border: 'none', cursor: 'pointer',
                                            background: selectedCatIdx === i ? 'var(--primary-red)' : 'var(--card-bg)',
                                            color: selectedCatIdx === i ? '#fff' : 'var(--text-gray)',
                                            fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {cat.title}
                                    </button>
                                ))}
                                <button
                                    onClick={() => {
                                        const newCats = [...config[activeLang].pricing.categories, { id: 'new-cat', title: 'New', icon: 'fa-box', packages: [] }];
                                        updateConfig(`${activeLang}.pricing.categories`, newCats);
                                        setSelectedCatIdx(newCats.length - 1);
                                    }}
                                    style={{ padding: '8px 15px', borderRadius: 12, border: '1px dashed var(--primary-red)', background: 'transparent', color: 'var(--primary-red)', cursor: 'pointer' }}
                                >
                                    + Add Category
                                </button>
                            </div>

                            {config[activeLang].pricing.categories[selectedCatIdx] && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {/* --- category header --- */}
                                    <div className="glass-card" style={{ padding: '2rem' }}>
                                        <div style={{ display: 'flex', gap: '1.2rem', marginBottom: '2rem', alignItems: 'flex-end' }}>
                                            <div style={{ flex: 2 }}>
                                                <label className="input-label">Category Title ({activeLang.toUpperCase()})</label>
                                                <input className="input-field" value={config[activeLang].pricing.categories[selectedCatIdx].title} onChange={e => {
                                                    const newCats = [...config[activeLang].pricing.categories];
                                                    newCats[selectedCatIdx].title = e.target.value;
                                                    newCats[selectedCatIdx].id = e.target.value.toLowerCase().replace(/\s+/g, '-');
                                                    updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                }} />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <label className="input-label">Icon (FontAwesome)</label>
                                                <input className="input-field" value={config[activeLang].pricing.categories[selectedCatIdx].icon} onChange={e => {
                                                    const newCats = [...config[activeLang].pricing.categories];
                                                    newCats[selectedCatIdx].icon = e.target.value;
                                                    updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                }} />
                                            </div>
                                            <button className="small-btn" style={{ color: '#f87171', height: 45 }} onClick={() => {
                                                if (confirm('Delete category?')) {
                                                    const newCats = config[activeLang].pricing.categories.filter((_: any, i: number) => i !== selectedCatIdx);
                                                    updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                    setSelectedCatIdx(0);
                                                }
                                            }}>Delete</button>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                            {config[activeLang].pricing.categories[selectedCatIdx].packages.map((pkg: any, pIdx: number) => (
                                                <div key={pIdx} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: 20, border: '1px solid var(--border-faint)' }}>
                                                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 15, marginBottom: 15 }}>
                                                        <input className="input-field" placeholder="Package Name" value={pkg.name} onChange={e => {
                                                            const newCats = [...config[activeLang].pricing.categories];
                                                            newCats[selectedCatIdx].packages[pIdx].name = e.target.value;
                                                            updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                        }} />
                                                        <input className="input-field" placeholder="USD" value={pkg.price} onChange={e => {
                                                            const newCats = [...config[activeLang].pricing.categories];
                                                            newCats[selectedCatIdx].packages[pIdx].price = e.target.value;
                                                            updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                        }} />
                                                        <input className="input-field" placeholder="MMK" value={pkg.priceMMK} onChange={e => {
                                                            const newCats = [...config[activeLang].pricing.categories];
                                                            newCats[selectedCatIdx].packages[pIdx].priceMMK = e.target.value;
                                                            updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                        }} />
                                                    </div>
                                                    <textarea className="input-field" placeholder="Short description" style={{ height: 60, marginBottom: 15 }} value={pkg.sub} onChange={e => {
                                                        const newCats = [...config[activeLang].pricing.categories];
                                                        newCats[selectedCatIdx].packages[pIdx].sub = e.target.value;
                                                        updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                    }} />

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <div style={{ display: 'flex', gap: 12 }}>
                                                            <label className="check-row">
                                                                <input type="checkbox" checked={pkg.featured} onChange={e => {
                                                                    const newCats = [...config[activeLang].pricing.categories];
                                                                    newCats[selectedCatIdx].packages[pIdx].featured = e.target.checked;
                                                                    updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                                }} />
                                                                <span style={{ marginLeft: 6 }}>Featured</span>
                                                            </label>
                                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-gray)' }}>{pkg.features?.length || 0} Features</span>
                                                        </div>
                                                        <div style={{ display: 'flex', gap: 8 }}>
                                                            <button
                                                                className="small-btn"
                                                                onClick={() => {
                                                                    const feat = prompt('Enter new feature:');
                                                                    if (feat) {
                                                                        const newCats = [...config[activeLang].pricing.categories];
                                                                        if (!newCats[selectedCatIdx].packages[pIdx].features) newCats[selectedCatIdx].packages[pIdx].features = [];
                                                                        newCats[selectedCatIdx].packages[pIdx].features.push(feat);
                                                                        updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                                    }
                                                                }}
                                                            >+ Feature</button>
                                                            <button className="small-btn" style={{ color: '#f87171' }} onClick={() => {
                                                                const newCats = [...config[activeLang].pricing.categories];
                                                                newCats[selectedCatIdx].packages.splice(pIdx, 1);
                                                                updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                            }}><i className="fas fa-trash" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <button className="btn-primary" style={{ padding: 12 }} onClick={() => {
                                                const newCats = [...config[activeLang].pricing.categories];
                                                newCats[selectedCatIdx].packages.push({ name: 'New Pack', price: '$0', priceMMK: '0 MMK', sub: 'Desc', featured: false, features: [] });
                                                updateConfig(`${activeLang}.pricing.categories`, newCats);
                                            }}>+ Add Package to {config[activeLang].pricing.categories[selectedCatIdx].title}</button>
                                        </div>
                                    </div>

                                    {/* --- Detailed Content Section --- */}
                                    <div className="glass-card" style={{ padding: '2rem' }}>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--primary-red)' }}>Deep Details ({activeLang.toUpperCase()})</h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                                            {/* Workflow steps */}
                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                                                    <label className="input-label">Workflow Steps</label>
                                                    <button className="small-btn" onClick={() => {
                                                        const newCats = [...config[activeLang].pricing.categories];
                                                        if (!newCats[selectedCatIdx].workflow) newCats[selectedCatIdx].workflow = [];
                                                        newCats[selectedCatIdx].workflow.push({ title: 'New Step', text: 'Step description' });
                                                        updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                    }}>+ Step</button>
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                                    {(config[activeLang].pricing.categories[selectedCatIdx].workflow || []).map((w: any, idx: number) => (
                                                        <div key={idx} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                                            <div style={{ width: 30, height: 30, borderRadius: 15, background: 'var(--primary-red-dim)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0 }}>{idx + 1}</div>
                                                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
                                                                <input className="input-field" placeholder="Step Title" value={w.title} onChange={e => {
                                                                    const newCats = [...config[activeLang].pricing.categories];
                                                                    newCats[selectedCatIdx].workflow[idx].title = e.target.value;
                                                                    updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                                }} />
                                                                <textarea className="input-field" style={{ height: 60 }} placeholder="Description" value={w.text} onChange={e => {
                                                                    const newCats = [...config[activeLang].pricing.categories];
                                                                    newCats[selectedCatIdx].workflow[idx].text = e.target.value;
                                                                    updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                                }} />
                                                            </div>
                                                            <button className="small-btn" style={{ color: '#f87171' }} onClick={() => {
                                                                const newCats = [...config[activeLang].pricing.categories];
                                                                newCats[selectedCatIdx].workflow.splice(idx, 1);
                                                                updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                            }}>×</button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div style={{ height: '1px', background: 'var(--border-faint)' }} />

                                            {/* Add-ons */}
                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                                                    <label className="input-label">Add-ons</label>
                                                    <button className="small-btn" onClick={() => {
                                                        const newCats = [...config[activeLang].pricing.categories];
                                                        if (!newCats[selectedCatIdx].addons) newCats[selectedCatIdx].addons = [];
                                                        newCats[selectedCatIdx].addons.push({ name: 'Extra Item', usd: '$10', mmk: '40,000 MMK' });
                                                        updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                    }}>+ Add-on</button>
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                                    {(config[activeLang].pricing.categories[selectedCatIdx].addons || []).map((a: any, idx: number) => (
                                                        <div key={idx} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 40px', gap: 10 }}>
                                                            <input className="input-field" placeholder="Name" value={a.name} onChange={e => {
                                                                const newCats = [...config[activeLang].pricing.categories];
                                                                newCats[selectedCatIdx].addons[idx].name = e.target.value;
                                                                updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                            }} />
                                                            <input className="input-field" placeholder="USD" value={a.usd} onChange={e => {
                                                                const newCats = [...config[activeLang].pricing.categories];
                                                                newCats[selectedCatIdx].addons[idx].usd = e.target.value;
                                                                updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                            }} />
                                                            <input className="input-field" placeholder="MMK" value={a.mmk} onChange={e => {
                                                                const newCats = [...config[activeLang].pricing.categories];
                                                                newCats[selectedCatIdx].addons[idx].mmk = e.target.value;
                                                                updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                            }} />
                                                            <button className="small-btn" style={{ color: '#f87171' }} onClick={() => {
                                                                const newCats = [...config[activeLang].pricing.categories];
                                                                newCats[selectedCatIdx].addons.splice(idx, 1);
                                                                updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                            }}>×</button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div style={{ height: '1px', background: 'var(--border-faint)' }} />

                                            {/* FAQs */}
                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                                                    <label className="input-label">FAQs</label>
                                                    <button className="small-btn" onClick={() => {
                                                        const newCats = [...config[activeLang].pricing.categories];
                                                        if (!newCats[selectedCatIdx].faqs) newCats[selectedCatIdx].faqs = [];
                                                        newCats[selectedCatIdx].faqs.push({ q: 'Question?', a: 'Answer' });
                                                        updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                    }}>+ FAQ</button>
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                                    {(config[activeLang].pricing.categories[selectedCatIdx].faqs || []).map((f: any, idx: number) => (
                                                        <div key={idx} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
                                                                <input className="input-field" placeholder="Question" value={f.q} onChange={e => {
                                                                    const newCats = [...config[activeLang].pricing.categories];
                                                                    newCats[selectedCatIdx].faqs[idx].q = e.target.value;
                                                                    updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                                }} />
                                                                <textarea className="input-field" style={{ height: 60 }} placeholder="Answer" value={f.a} onChange={e => {
                                                                    const newCats = [...config[activeLang].pricing.categories];
                                                                    newCats[selectedCatIdx].faqs[idx].a = e.target.value;
                                                                    updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                                }} />
                                                            </div>
                                                            <button className="small-btn" style={{ color: '#f87171' }} onClick={() => {
                                                                const newCats = [...config[activeLang].pricing.categories];
                                                                newCats[selectedCatIdx].faqs.splice(idx, 1);
                                                                updateConfig(`${activeLang}.pricing.categories`, newCats);
                                                            }}>×</button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .input-label { display: block; font-size: 0.75rem; color: var(--text-gray); margin-bottom: 6px; font-weight: 600; }
                .small-btn { padding: 4px 12px; border-radius: 10px; border: 1px solid var(--border-faint); background: rgba(255,255,255,0.05); color: #fff; cursor: pointer; display: inline-flex; align-items: center; font-size: 0.8rem; font-weight: 600; }
                .check-row { display: flex; align-items: center; cursor: pointer; font-size: 0.8rem; }
            `}</style>
        </div>
    );
}

// ─── Main Admin Dashboard ─────────────────────────────────────────────────────

export default function AdminDashboard() {
    const { logout } = useAuth();
    const { students, loading, removeStudent } = useAdmin();
    const [search, setSearch] = useState('');
    const [showAdd, setShowAdd] = useState(false);
    const [accessModal, setAccessModal] = useState<{ student: Student; courseId: string } | null>(null);
    const [confirmRemove, setConfirmRemove] = useState<Student | null>(null);
    const [activeTab, setActiveTab] = useState<'students' | 'overview' | 'website'>('overview');

    const handleRemove = async (s: Student) => {
        await removeStudent(s.id);
        setConfirmRemove(null);
    };

    const filtered = useMemo(() => students.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase())), [students, search]);

    return (
        <div className="page-wrapper">
            {showAdd && <AddStudentModal onClose={() => setShowAdd(false)} />}
            {accessModal && (
                <AccessModal
                    student={accessModal.student}
                    courseId={accessModal.courseId}
                    existing={accessModal.student.courses.find((c) => c.courseId === accessModal.courseId)}
                    onClose={() => setAccessModal(null)}
                />
            )}
            {confirmRemove && (
                <div style={overlay}>
                    <div className="glass-card" style={{ padding: '2rem', maxWidth: 360, textAlign: 'center', borderRadius: 24 }}>
                        <div style={{ fontSize: 48, marginBottom: 12 }}>⚠️</div>
                        <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.3rem', marginBottom: 8 }}>Remove Student?</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{confirmRemove.name} will be permanently removed.</p>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                            <button className="btn-primary" style={{ background: '#c0392b' }} onClick={() => handleRemove(confirmRemove)}>Remove</button>
                            <button onClick={() => setConfirmRemove(null)} style={cancelBtn}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <header className="site-header">
                <div className="site-header-inner">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <img src="/AI3DHead.png" alt="BEKYOVerse" className="animate-logo-float" style={{ width: 38, height: 38, borderRadius: '50%' }} />
                        <span style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#fff' }}>BEKYOVerse <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>ADMIN</span></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <button onClick={logout} style={cancelBtn}><i className="fas fa-sign-out-alt" /></button>
                    </div>
                </div>
            </header>

            <div className="content-wrapper" style={{ paddingTop: '2rem' }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: '2.5rem', background: 'var(--card-bg)', padding: 6, borderRadius: 50, width: 'fit-content' }}>
                    {([
                        { id: 'students', label: '👥 Students' },
                        { id: 'website', label: '🌐 Website' },
                    ] as const).map(t => (
                        <button key={t.id} onClick={() => setActiveTab(t.id)} style={{ padding: '8px 24px', borderRadius: 50, border: 'none', cursor: 'pointer', background: activeTab === t.id ? 'var(--primary-red)' : 'transparent', color: activeTab === t.id ? '#fff' : 'var(--text-gray)', fontWeight: 600 }}>{t.label}</button>
                    ))}
                </div>

                {!loading && (
                    <>
                        {activeTab === 'students' && (
                            <div className="animate-fade-in-up">
                                {/* Compact Overview Stats */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                                    <div className="glass-card" style={{ padding: '1.2rem', borderLeft: '3px solid #3b82f6' }}>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#3b82f6' }}>{students.length}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-gray)', fontWeight: 600 }}>Total Students</div>
                                    </div>
                                    {courses.map(c => (
                                        <div key={c.id} className="glass-card" style={{ padding: '1.2rem', borderLeft: '3px solid var(--primary-red)' }}>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary-red)' }}>
                                                {students.filter(s => s.courses.some(a => a.courseId === c.id && a.status === 'active')).length}
                                            </div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-gray)', fontWeight: 600 }}>{c.name.split(' ')[0]} Active</div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: 12, marginBottom: '1.5rem' }}>
                                    <div style={{ flex: 1, position: 'relative' }}>
                                        <i className="fas fa-search" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-gray)', fontSize: '0.8rem' }} />
                                        <input className="input-field" style={{ paddingLeft: 40 }} placeholder="Search students..." value={search} onChange={e => setSearch(e.target.value)} />
                                    </div>
                                    <button className="btn-primary" onClick={() => setShowAdd(true)} style={{ whiteSpace: 'nowrap', padding: '10px 20px', fontSize: '0.85rem' }}>+ Add Student</button>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {filtered.map(s => (
                                        <div key={s.id} className="glass-card" style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: 'minmax(200px, 1.2fr) 2fr 180px', gap: '1.5rem', alignItems: 'center' }}>
                                            {/* Column 1: Identity */}
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                                                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary-red-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary-red)' }}>
                                                        {s.name.charAt(0)}
                                                    </div>
                                                    <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>{s.name}</h3>
                                                </div>
                                                <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', marginBottom: 2 }}>{s.email}</p>
                                                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', display: 'flex', gap: 10 }}>
                                                    <span><i className="fas fa-calendar-alt" style={{ marginRight: 4 }} />{fmt(s.createdAt)}</span>
                                                    {s.phone && <span><i className="fas fa-phone" style={{ marginRight: 4 }} />{s.phone}</span>}
                                                </div>
                                            </div>

                                            {/* Column 2: Course Access Status */}
                                            <div style={{ display: 'flex', gap: 12 }}>
                                                {courses.map(c => {
                                                    const access = s.courses.find(a => a.courseId === c.id);
                                                    return (
                                                        <div
                                                            key={c.id}
                                                            onClick={() => setAccessModal({ student: s, courseId: c.id })}
                                                            style={{
                                                                flex: 1, padding: '12px 14px', borderRadius: 16,
                                                                background: access?.status === 'active' ? 'rgba(38, 162, 105, 0.08)' : 'rgba(255,255,255,0.03)',
                                                                border: '1px solid var(--border-faint)',
                                                                minWidth: 150,
                                                                cursor: 'pointer',
                                                                transition: 'all 0.2s ease',
                                                            }}
                                                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary-red)')}
                                                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-faint)')}
                                                        >
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                                                                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: access?.status === 'active' ? '#2ecc71' : 'var(--text-gray)' }}>
                                                                    {c.name.split(' ')[0]}
                                                                </span>
                                                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                                                    {statusBadge(access)}
                                                                </div>
                                                            </div>
                                                            {access?.expiresAt ? (
                                                                <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginBottom: 6 }}>
                                                                    Ends: {fmt(access.expiresAt)}
                                                                </div>
                                                            ) : access?.status === 'active' ? (
                                                                <div style={{ fontSize: '0.65rem', color: '#2ecc71', marginBottom: 6 }}>Lifetime Access</div>
                                                            ) : (
                                                                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', marginBottom: 6 }}>Not enrolled</div>
                                                            )}

                                                            <div style={{
                                                                fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary-red)',
                                                                display: 'flex', alignItems: 'center', gap: 4,
                                                                borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 6
                                                            }}>
                                                                <i className={`fas ${access ? 'fa-pen' : 'fa-plus-circle'}`} />
                                                                {access ? 'EDIT ACCESS' : 'GRANT ACCESS'}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Column 3: Actions */}
                                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <button
                                                    onClick={() => setConfirmRemove(s)}
                                                    style={{
                                                        ...smallIconBtn, width: 44, height: 44, color: '#f87171',
                                                        border: '1px solid rgba(248,113,113,0.15)',
                                                        background: 'rgba(248,113,113,0.05)'
                                                    }}
                                                    title="Remove Student"
                                                >
                                                    <i className="fas fa-trash-alt" style={{ fontSize: '1rem' }} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'website' && <WebsiteTab />}
                    </>
                )}
            </div>
        </div>
    );
}

const overlay: React.CSSProperties = { position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const cancelBtn: React.CSSProperties = { padding: '10px 20px', borderRadius: 50, border: '1px solid var(--border-faint)', background: 'transparent', color: '#fff', cursor: 'pointer' };
const checkRow: React.CSSProperties = { display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '0.85rem' };
const smallIconBtn: React.CSSProperties = { width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--border-faint)', background: 'rgba(255,255,255,0.05)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' };
