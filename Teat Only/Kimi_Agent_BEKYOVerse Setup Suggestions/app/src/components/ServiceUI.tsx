import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// ── Hero ──
interface ServiceHeroProps {
    title: string;
    subtitle: string;
    className: string; // e.g. "mascot-hero"
}
export function ServiceHero({ title, subtitle, className }: ServiceHeroProps) {
    return (
        <section className={`hero ${className} fade-in`}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </section>
    );
}

// ── Section Title ──
interface SectionTitleProps {
    title: string;
    icon?: string; // e.g. "fas fa-tag"
}
export function SectionTitle({ title, icon }: SectionTitleProps) {
    return (
        <h2 className="service-section-title fade-in">
            {icon && <i className={icon}></i>}
            {title}
        </h2>
    );
}

// ── Package Card ──
interface PackageCardProps {
    name: string;
    subName?: string;
    price: string; // e.g. "$45"
    mmk: string; // e.g. "180,000 MMK"
    timeline?: string;
    features: string[] | { style: string[], included: string[] };
    featured?: boolean;
    badge?: string; // "Best Value"
    minNote?: string;
}

export function PackageCard({ name, subName, price, mmk, timeline, features, featured, badge, minNote }: PackageCardProps) {
    const renderFeatures = () => {
        if (Array.isArray(features)) {
            return features.map((feat, idx) => (
                <li key={idx}>
                    <i className="fas fa-check"></i>
                    <span dangerouslySetInnerHTML={{ __html: feat }}></span>
                </li>
            ));
        } else {
            // Handle Animation style object
            return (
                <>
                    {features.style.length > 0 && (
                        <>
                            <li className="feature-header">Style:</li>
                            {features.style.map((feat, idx) => (
                                <li key={`s-${idx}`}>
                                    <i className="fas fa-check"></i>
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </>
                    )}
                    {features.included.length > 0 && (
                        <>
                            <li className="feature-header" style={{ marginTop: '0.5rem' }}>Included:</li>
                            {features.included.map((feat, idx) => (
                                <li key={`i-${idx}`}>
                                    <i className="fas fa-check"></i>
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </>
                    )}
                </>
            );
        }
    };

    return (
        <div className={`package-card fade-in ${featured ? 'featured' : ''}`}>
            <div>
                {badge && <span className="package-badge">{badge}</span>}
                <h3 className="package-name">{name}</h3>
                {subName && <p className="package-sub">{subName}</p>}
            </div>
            <ul className="package-features">
                {renderFeatures()}
            </ul>
            <div>
                <div className="package-price">
                    {price} <span className="mmk">{mmk}</span>
                    {minNote && <span className="min-note">{minNote}</span>}
                </div>
                {timeline && (
                    <div className="package-timeline">
                        <i className="far fa-clock"></i> {timeline}
                    </div>
                )}
            </div>
        </div>
    );
}

export function PackageGrid({ children }: { children: React.ReactNode }) {
    return <div className="package-grid">{children}</div>;
}

// ── Add-ons Table ──
interface AddOnItem {
    name: string;
    price: string;
    mmk: string;
}
interface AddonsTableProps {
    items: AddOnItem[];
}
export function AddonsTable({ items }: AddonsTableProps) {
    return (
        <table className="addons-table fade-in">
            <thead>
                <tr>
                    <th>Add-On</th>
                    <th>USD</th>
                    <th>MMK</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, idx) => (
                    <tr key={idx}>
                        <td>{item.name}</td>
                        <td className="addon-price">{item.price}</td>
                        <td className="addon-mmk">{item.mmk}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

// ── Workflow ──
interface WorkflowStepProps {
    num: string; // "01"
    title: string;
    icon: string; // "fas fa-comments"
    desc: string;
    depositTag?: string; // "50% Deposit"
    stepClass?: string;
}
export function WorkflowStep({ num, title, icon, desc, depositTag, stepClass }: WorkflowStepProps) {
    return (
        <div className={`workflow-step fade-in ${stepClass || ''}`} data-num={num}>
            <h4><i className={`${icon} step-icon`}></i>{title}</h4>
            <p>{desc}</p>
            {depositTag && <span className="deposit-tag">{depositTag}</span>}
        </div>
    );
}

export function WorkflowGrid({ children, items }: { children?: React.ReactNode, items?: any[] }) {
    if (items) {
        return (
            <div className="workflow-grid">
                {items.map((step, idx) => (
                    <WorkflowStep key={idx} {...step} />
                ))}
            </div>
        );
    }
    return <div className="workflow-grid">{children}</div>;
}

// ── Revision Table ──
interface RevisionItem {
    stage: string;
    allowed: string;
}
export function RevisionTable({ items }: { items: RevisionItem[] }) {
    return (
        <table className="revision-table fade-in">
            <thead>
                <tr>
                    <th>Stage</th>
                    <th>What's Allowed</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, idx) => (
                    <tr key={idx}>
                        <td className="stage">{item.stage}</td>
                        <td>{item.allowed}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

// ── FAQ ──
interface FAQItemProps {
    question: string;
    answer: string;
}
function FAQItem({ question, answer }: FAQItemProps) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`faq-item fade-in ${open ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => setOpen(!open)}>
                {question}
                <i className="fas fa-plus faq-icon"></i>
            </button>
            <div className="faq-answer">{answer}</div>
        </div>
    );
}

export function FAQList({ items }: { items: FAQItemProps[] }) {
    return (
        <div className="faq-list">
            {items.map((item, idx) => (
                <FAQItem key={idx} {...item} />
            ))}
        </div>
    );
}

// ── Info Note ──
export function InfoNote({ children, icon }: { children: React.ReactNode, icon?: string }) {
    return (
        <div className="info-note fade-in">
            <i className={icon || "fas fa-info-circle"}></i>
            {children}
        </div>
    );
}

// ── Policy Grid ──
interface PolicyItem {
    title: string;
    icon: string;
    content: string[]; // List items
}
export function PolicyGrid({ items }: { items: PolicyItem[] }) {
    return (
        <div className="policy-grid fade-in">
            {items.map((item, idx) => (
                <div className="policy-card" key={idx}>
                    <strong><i className={item.icon}></i> {item.title}</strong>
                    <ul>
                        {item.content.map((li, i) => (
                            <li key={i}>{li}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

// ------------- Specific Components --------------

// Sticker Surcharges

// Surcharge Grid (Supports both Card and Row layouts)
export function SurchargeGrid({ items }: { items: any[] }) {
    return (
        <div className={items[0]?.icon ? "surcharge-grid fade-in" : "surcharge-list fade-in"}>
            {items.map((item, idx) => {
                if (item.icon) {
                    return (
                        <div className="surcharge-card" key={idx}>
                            <h4><i className={item.icon}></i> {item.title || item.label}</h4>
                            <div className="s-price">{item.price}</div>
                            <div className="s-mmk">{item.mmk}</div>
                            <p>{item.desc || item.sub}</p>
                        </div>
                    );
                }
                return (
                    <SurchargeRow
                        key={idx}
                        label={item.label || item.title}
                        sub={item.sub || item.desc}
                        price={item.price}
                        mmk={item.mmk}
                    />
                );
            })}
        </div>
    );
}

// Sticker Quantity Table
export function QuantityTable({ rows }: { rows: { qty: string, discount: string, price: string, mmk: string, highlight?: boolean }[] }) {
    return (
        <table className="qty-table fade-in">
            <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Discount</th>
                    <th>Est. Unit Price</th>
                    <th>Unit MMK</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, idx) => (
                    <tr key={idx}>
                        <td className="bold">{row.qty}</td>
                        <td className={row.highlight ? "green" : ""}>{row.discount}</td>
                        <td>{row.price}</td>
                        <td>{row.mmk}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

// Calculation Box
export function CalcBox({ title, rows, total }: { title: string, rows: { label: string, val: string, isDiscount?: boolean }[], total: { label: string, val: string } }) {
    return (
        <div className="calc-box fade-in">
            <h4>{title}</h4>
            {rows.map((r, i) => (
                <div className="calc-row" key={i}>
                    <span>{r.label}</span>
                    <span className={r.isDiscount ? "discount" : ""}>{r.val}</span>
                </div>
            ))}
            <div className="calc-row total">
                <span>{total.label}</span>
                <span>{total.val}</span>
            </div>
        </div>
    );
}

// Factors Grid
export function FactorsGrid({ items }: { items: { icon: string, title: string, desc: string }[] }) {
    return (
        <div className="factors-grid fade-in">
            {items.map((item, idx) => (
                <div className="factor-card" key={idx}>
                    <i className={`${item.icon} f-icon`}></i>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    );
}

// Surcharge Row
export function SurchargeRow({ label, sub, price, mmk }: { label: string, sub: string, price: string, mmk: string }) {
    return (
        <div className="surcharge-row fade-in">
            <div className="s-label">
                {label} <span>{sub}</span>
            </div>
            <div>
                <div className="s-price">{price}</div>
                <div className="s-mmk">{mmk}</div>
            </div>
        </div>
    );
}



// What I Make
export function WhatIMake({ items }: { items: string[] }) {
    return (
        <div className="what-i-make fade-in">
            {items.map((item, idx) => (
                <span className="make-tag" key={idx}>{item}</span>
            ))}
        </div>
    );
}

// Comic Tier Card
interface TierCardProps {
    pages: string; // "1-3 Pages"
    range: string;
    price: string;
    mmk: string;
    example: string;
    save?: string;
    featured?: boolean;
    badge?: string;
    dataPages: string; // "pg"
}
export function TierCard({ pages, range, price, mmk, example, save, featured, badge, dataPages }: TierCardProps) {
    return (
        <div className={`tier-card fade-in ${featured ? 'featured' : ''}`} data-pages={dataPages}>
            <div>
                {badge && <span className="package-badge">{badge}</span>}
                <h3>{pages}</h3>
                <p className="tier-range">{range}</p>
            </div>
            <div>
                <div className="tier-price">{price} <span>/ page</span></div>
                <div className="tier-mmk">{mmk}</div>
                <div className="tier-example">{example}</div>
                {save && <span className="tier-save">{save}</span>}
            </div>
        </div>
    );
}

// Included Box
export function IncludedBox({ title, items }: { title: string, items: string[] }) {
    return (
        <div className="included-box fade-in">
            <h4>{title}</h4>
            <div className="included-grid">
                {items.map((item, idx) => (
                    <div className="included-item" key={idx}>
                        <i className="fas fa-check"></i> {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

// Minimum Box
export function MinimumBox({ icon, title, desc }: { icon: string, title: string, desc: string }) {
    return (
        <div className="minimum-box fade-in">
            <i className={`${icon} m-icon`}></i>
            <div>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    );
}
// Contact CTA
export function ContactCTA() {
    const { t } = useLanguage();
    return (
        <div className="contact-cta fade-in" style={{ textAlign: 'center', margin: '4rem 0', padding: '2rem', background: 'var(--card-bg)', borderRadius: 16 }}>
            <h3 style={{ marginBottom: '1rem' }}>{t('Ready to start a project?', 'ပရောဂျက်စဖို့ အဆင်သင့်ဖြစ်ပြီလား?')}</h3>
            <a href="#contact" className="btn-primary" onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.href = '/#contact';
            }}>
                {t('Contact Me', 'ဆက်သွယ်ရန်')}
            </a>
        </div>
    );
}
