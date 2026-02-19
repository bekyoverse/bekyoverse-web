import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { stickerData } from '../../data/services/stickers';
import {
    ServiceHero,
    SectionTitle,
    PackageGrid,
    PackageCard,
    AddonsTable,
    WorkflowGrid,
    WorkflowStep,
    RevisionTable,
    PolicyGrid,
    FAQList,
    InfoNote,
    ContactCTA,
    SurchargeGrid,
    QuantityTable
} from '../../components/ServiceUI';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function StickersPage() {
    const { language } = useLanguage();
    const content = stickerData[language as keyof typeof stickerData];

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = content.meta.title;
    }, [language, content.meta.title]);

    return (
        <div className="service-page stickers-page">
            <Navbar />

            <ServiceHero
                title={content.hero.title}
                subtitle={content.hero.subtitle}
                className="sticker-hero"
            />

            <div className="details-container">
                {/* Pricing Section */}
                <SectionTitle icon="fas fa-sticky-note" title={content.pricing.title} />
                <PackageGrid>
                    <PackageCard
                        name={content.pricing.static.title}
                        price={content.pricing.static.price}
                        mmk={content.pricing.static.mmk}
                        features={content.pricing.static.features}
                        subName={content.pricing.static.desc}
                    />
                    <PackageCard
                        name={content.pricing.animated.title}
                        price={content.pricing.animated.price}
                        mmk={content.pricing.animated.mmk}
                        features={content.pricing.animated.features}
                        subName={content.pricing.animated.desc}
                        featured={true}
                        badge="Popular"
                    />
                </PackageGrid>
                {content.pricing.note && (
                    <InfoNote icon="fas fa-info-circle">
                        {content.pricing.note}
                    </InfoNote>
                )}

                {/* Surcharges & Quantity */}
                <SectionTitle icon="fas fa-plus-circle" title={content.surcharges.title} />
                <SurchargeGrid items={content.surcharges.items} />

                <div className="quantity-section">
                    <h4>{content.quantity.title}</h4>
                    <QuantityTable rows={content.quantity.rows} />
                </div>

                {/* Addons Section */}
                <SectionTitle icon="fas fa-layer-group" title={content.addons.title} />
                <AddonsTable items={content.addons.items} />

                {/* Workflow */}
                <SectionTitle icon="fas fa-route" title={content.workflow.title} />
                <WorkflowGrid>
                    {content.workflow.steps.map((step: any, index: any) => (
                        <WorkflowStep key={index} {...step} />
                    ))}
                </WorkflowGrid>
                {/* Note: workflow.note missing in current type but handled if exists */}

                {/* Revision Policy */}
                <SectionTitle icon="fas fa-edit" title={content.revision.title} />
                <RevisionTable items={content.revision.items} />
                {content.revision.note && <InfoNote>{content.revision.note}</InfoNote>}

                {/* Payment Terms */}
                <SectionTitle icon="fas fa-wallet" title={content.payment.title} />
                <PolicyGrid items={content.payment.policies} />

                {/* FAQ Section */}
                <SectionTitle icon="fas fa-question-circle" title={content.faq.title} />
                <FAQList items={content.faq.items} />

                <ContactCTA />
            </div>

            <Footer />
        </div>
    );
}
