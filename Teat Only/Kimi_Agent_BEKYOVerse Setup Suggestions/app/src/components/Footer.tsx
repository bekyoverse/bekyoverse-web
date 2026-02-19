import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <p>© 2025 BEKYOVerse. {t('All rights reserved.', 'မူပိုင်ခွင့်အားလုံးရှိသည်။')}</p>
            <a href="#" className="back-to-top" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Back to Top ↑</a>
        </footer>
    );
}
