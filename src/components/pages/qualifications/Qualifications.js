// Imports
import { useTranslation } from 'react-i18next';

// Component
function Qualifications() {
    const { t } = useTranslation();
    return (
        <div>{t('Qualifications')}</div>
    );
}

// Exportation
export default Qualifications;