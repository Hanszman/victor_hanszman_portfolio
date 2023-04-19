// Imports
import { useTranslation } from 'react-i18next';

// Component
function Experiences() {
    // Declarations
    const { t } = useTranslation();

    // TODO: Listar experiências de acordo com o json
    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Experiences')}</h1>
        </div>
    );
}

// Exportation
export default Experiences;