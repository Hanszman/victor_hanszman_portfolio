// Imports
import { useTranslation } from 'react-i18next';

// Component
function Projects() {
    // Declarations
    const { t } = useTranslation();

    // TODO: Listar projetos de acordo com o json
    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Projects')}</h1>
        </div>
    );
}

// Exportation
export default Projects;