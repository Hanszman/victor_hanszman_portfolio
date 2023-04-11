// Imports
import { useTranslation } from 'react-i18next';

// Component
function Experiences() {
    // Variables
    const { t } = useTranslation();

    return (
        <div>{t('Experiences')}</div>
    );
}

// Exportation
export default Experiences;