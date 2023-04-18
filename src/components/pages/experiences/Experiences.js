// Imports
import { useTranslation } from 'react-i18next';

// Component
function Experiences() {
    // Declarations
    const { t } = useTranslation();

    // Listar experiências de acordo com o json
    return (
        <div>
            <h1 className='highText'>{t('Experiences')}</h1>
        </div>
    );
}

// Exportation
export default Experiences;