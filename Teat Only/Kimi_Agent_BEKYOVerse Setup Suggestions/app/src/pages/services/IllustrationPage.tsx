import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { illustrationData } from '../../data/services/illustration';
import {
    ServiceHero,
    SectionTitle,
    PackageGrid,
    PackageCard,
    WorkflowGrid,
    WorkflowStep,
    RevisionTable,
    PolicyGrid,
    FAQList,
    InfoNote,
    ContactCTA,
    FactorsGrid,
    SurchargeGrid,
    WhatIMake
} from '../../components/ServiceUI';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function IllustrationPage() {
    const { language } = useLanguage();
    const content = illustrationData[language];

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = content.meta.title;
    }, [language, content.meta.title]);

    return (
        <div className="service-page illustration-page">
            <Navbar />

            <ServiceHero
                title={content.hero.title}
                subtitle={content.hero.subtitle}
                className="illustration-hero"
            />

            <div className="details-container">
                {/* Pricing Section */}
                <SectionTitle icon="fas fa-palette" title={content.pricing.title} />
                <PackageGrid>
                    <PackageCard
                        name={content.pricing.personal.title}
                        price={content.pricing.personal.priceRange}
                        mmk={content.pricing.personal.mmkRange}
                        features={content.pricing.personal.features}
                        subName={content.pricing.personal.subName}
                    />
                    <PackageCard
                        name={content.pricing.commercial.title}
                        price={content.pricing.commercial.priceRange}
                        mmk={content.pricing.commercial.mmkRange}
                        features={content.pricing.commercial.features}
                        subName={content.pricing.commercial.subName}
                        featured={true}
                        badge={content.pricing.commercial.badge}
                    />
                </PackageGrid>
                {/* Factors */}
                <SectionTitle icon="fas fa-paint-brush" title={content.whatIMake.title} />
                <WhatIMake items={content.whatIMake.items} />
                {content.whatIMake.note && <InfoNote>{content.whatIMake.note}</InfoNote>}

                {/* Factors */}
                <SectionTitle icon="fas fa-sliders-h" title={content.factors.title} />
                <FactorsGrid items={content.factors.items} />

                {/* Surcharges */}
                {content.surcharges && (
                    <>
                        <SectionTitle icon="fas fa-plus-circle" title={content.surcharges.title} />
                        <SurchargeGrid items={content.surcharges.items} />
                    </>
                )}

                {/* Workflow */}
                <SectionTitle icon="fas fa-route" title={content.workflow.title} />
                <WorkflowGrid>
                    {content.workflow.steps.map((step, index) => (
                        <WorkflowStep
                            key={index}
                            {...step}
                        />
                    ))}
                </WorkflowGrid>
                {content.workflow.note && <InfoNote>{content.workflow.note}</InfoNote>}

                {/* Revision */}
                <SectionTitle icon="fas fa-edit" title={content.revision.title} />
                <RevisionTable items={content.revision.items} />
                {content.revision.note && <InfoNote>{content.revision.note}</InfoNote>}

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
        </div>
    );
}
