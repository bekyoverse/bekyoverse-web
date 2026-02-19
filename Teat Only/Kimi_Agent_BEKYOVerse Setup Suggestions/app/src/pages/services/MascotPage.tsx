import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { mascotData } from '../../data/services/mascot';
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
    ContactCTA
} from '../../components/ServiceUI';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function MascotPage() {
    const { language } = useLanguage();
    const content = mascotData[language as keyof typeof mascotData];

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = content.meta.title;
    }, [language, content.meta.title]);

    return (
        <div className="service-page mascot-page">
            <Navbar />

            <ServiceHero
                title={content.hero.title}
                subtitle={content.hero.subtitle}
                className="mascot-hero"
            />

            <div className="details-container">
                {/* Pricing Section */}
                <SectionTitle icon="fas fa-mask" title={content.pricing.title} />
                <PackageGrid>
                    {content.pricing.packages.map((pkg, index) => (
                        <PackageCard
                            key={index}
                            {...pkg}
                        />
                    ))}
                </PackageGrid>
                {content.pricing.note && (
                    <InfoNote icon="fas fa-info-circle">
                        {content.pricing.note}
                    </InfoNote>
                )}

                {/* Addons Section */}
                <SectionTitle icon="fas fa-plus-circle" title={content.addons.title} />
                <AddonsTable items={content.addons.items} />

                {/* Workflow Section */}
                <SectionTitle icon="fas fa-route" title={content.workflow.title} />
                <WorkflowGrid>
                    {content.workflow.steps.map((step, index) => (
                        <WorkflowStep
                            key={index}
                            {...step}
                        />
                    ))}
                </WorkflowGrid>
                {content.workflow.note && (
                    <InfoNote icon="fas fa-info-circle">
                        {content.workflow.note}
                    </InfoNote>
                )}

                {/* Revision Policy */}
                <SectionTitle icon="fas fa-edit" title={content.revision.title} />
                <RevisionTable items={content.revision.items} />
                {content.revision.note && (
                    <InfoNote icon="fas fa-info-circle">
                        {content.revision.note}
                    </InfoNote>
                )}

                {/* Payment Terms */}
                <SectionTitle icon="fas fa-wallet" title={content.payment.title} />
                <PolicyGrid items={content.payment.policies} />

                {/* FAQ Section */}
                <SectionTitle icon="fas fa-question-circle" title={content.faq.title} />
                <FAQList items={content.faq.items} />

                {/* CTA */}
                <ContactCTA />
            </div>

            <Footer />
        </div>
    );
}
