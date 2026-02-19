import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { comicData } from '../../data/services/comic';
import {
    ServiceHero,
    SectionTitle,
    TierCard,
    IncludedBox,
    AddonsTable,
    WorkflowGrid,
    RevisionTable,
    PolicyGrid,
    FAQList,
    InfoNote,
    ContactCTA
} from '../../components/ServiceUI';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function ComicPage() {
    const { language } = useLanguage();
    const content = comicData[language as keyof typeof comicData];

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = content.meta.title;
    }, [language, content.meta.title]);

    return (
        <div className="service-page comic-page">
            <Navbar />

            <ServiceHero
                title={content.hero.title}
                subtitle={content.hero.subtitle}
                className="comic-hero"
            />

            <div className="details-container">
                {/* Pricing Section (Tiers) */}
                <SectionTitle icon="fas fa-book-open" title={content.pricing.title} />
                <div className="tier-grid">
                    {content.pricing.tiers.map((tier: any, index: any) => (
                        <TierCard
                            key={index}
                            {...tier}
                        />
                    ))}
                </div>

                {/* Note */}
                {content.pricing.note && (
                    <InfoNote>{content.pricing.note}</InfoNote>
                )}

                {/* Included Items */}
                <div style={{ marginTop: '3rem' }}>
                    <IncludedBox title={content.included.title} items={content.included.items} />
                </div>

                {/* Addons */}
                <SectionTitle icon="fas fa-plus-circle" title={content.addons.title} />
                <AddonsTable items={content.addons.items} />

                {/* Workflow */}
                <SectionTitle icon="fas fa-route" title={content.workflow.title} />
                <WorkflowGrid items={content.workflow.steps} />
                {content.workflow.note && (
                    <InfoNote icon="fas fa-info-circle">
                        {content.workflow.note}
                    </InfoNote>
                )}

                {/* Revision */}
                <SectionTitle icon="fas fa-edit" title={content.revision.title} />
                <RevisionTable items={content.revision.items} />
                {content.revision.note && (
                    <InfoNote icon="fas fa-info-circle">
                        {content.revision.note}
                    </InfoNote>
                )}

                {/* Payment */}
                <SectionTitle icon="fas fa-wallet" title={content.payment.title} />
                <PolicyGrid items={content.payment.policies} />

                {/* FAQ */}
                <SectionTitle icon="fas fa-question-circle" title={content.faq.title} />
                <FAQList items={content.faq.items} />

                {/* CTA */}
                <ContactCTA />
            </div>

            <Footer />
        </div >
    );
}
