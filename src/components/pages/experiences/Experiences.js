// Imports
import { useTranslation } from 'react-i18next';

// Component
function Experiences() {
    // Variables
    const { t } = useTranslation();

    return (
        <div>
            <h1 className='highText'>{t('Experiences')}</h1>
        </div>
    );
}

// Exportation
export default Experiences;