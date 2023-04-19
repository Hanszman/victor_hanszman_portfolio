// Imports
import { useTranslation } from 'react-i18next';

// Component
function Skills() {
    // Declarations
    const { t } = useTranslation();

    // TODO: Listar qualificações de acordo com o json
    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Skills')}</h1>
        </div>
    );
}

// Exportation
export default Skills;