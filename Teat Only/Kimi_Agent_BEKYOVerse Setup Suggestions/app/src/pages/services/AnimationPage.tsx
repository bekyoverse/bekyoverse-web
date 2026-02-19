import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { animationData } from '../../data/services/animation';
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
    FactorsGrid,
    MinimumBox
} from '../../components/ServiceUI';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function AnimationPage() {
    const { language } = useLanguage();
    const content = animationData[language as keyof typeof animationData];

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = content.meta.title;
    }, [language, content.meta.title]);

    return (
        <div className="service-page animation-page">
            <Navbar />

            <ServiceHero
                title={content.hero.title}
                subtitle={content.hero.subtitle}
                className="animation-hero"
            />

            <div className="details-container">
                {/* Packages Section */}
                <SectionTitle icon="fas fa-film" title={content.packages.title} />
                <PackageGrid>
                    {content.packages.items.map((pkg, index) => (
                        <PackageCard
                            key={index}
                            {...pkg}
                        />
                    ))}
                </PackageGrid>

                {/* Minimum Order Note */}
                <MinimumBox
                    icon="fas fa-clock"
                    title={content.packages.minOrder.title}
                    desc={content.packages.minOrder.desc}
                />

                {/* Factors Affecting Quote */}
                <SectionTitle icon="fas fa-sliders-h" title={content.factors.title} />
                <FactorsGrid items={content.factors.items} />
                {content.factors.note && (
                    <InfoNote>
                        {content.factors.note}
                    </InfoNote>
                )}

                {/* Addons Section */}
                <SectionTitle icon="fas fa-plus-circle" title={content.addons.title} />
                <AddonsTable items={content.addons.items} />

                {/* Workflow Section */}
                <SectionTitle icon="fas fa-route" title={content.workflow.title} />
                <WorkflowGrid>
                    {content.workflow.steps.map((step: any, index: any) => (
                        <WorkflowStep
                            key={index}
                            {...step}
                        />
                    ))}
                </WorkflowGrid>
                {content.workflow.note && (
                    <InfoNote>
                        {content.workflow.note}
                    </InfoNote>
                )}

                {/* Revision Policy */}
                <SectionTitle icon="fas fa-edit" title={content.revision.title} />
                <RevisionTable items={content.revision.items} />
                {content.revision.note && (
                    <InfoNote>
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
