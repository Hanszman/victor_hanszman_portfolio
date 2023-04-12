// Imports
import { useTranslation } from 'react-i18next';

// Component
function Qualifications() {
    // Variables
    const { t } = useTranslation();

    return (
        <div>
            <h1 className='highText'>{t('Qualifications')}</h1>
        </div>
    );
}

// Exportation
export default Qualifications;