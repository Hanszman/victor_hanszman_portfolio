// Imports
import { useTranslation } from 'react-i18next';

// Component
function Contact() {
    const { t } = useTranslation();
    return (
        <div>{t('Contact')}</div>
    );
}

// Exportation
export default Contact;