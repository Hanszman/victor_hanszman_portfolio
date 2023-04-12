// Imports
import { useTranslation } from 'react-i18next';

// Component
function Contact() {
    // Variables
    const { t } = useTranslation();

    return (
        <div>
            <h1 className='highText'>{t('Contact')}</h1>
        </div>
    );
}

// Exportation
export default Contact;