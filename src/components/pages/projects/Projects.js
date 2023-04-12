// Imports
import { useTranslation } from 'react-i18next';

// Component
function Projects() {
    // Variables
    const { t } = useTranslation();

    return (
        <div>
            <h1 className='highText'>{t('Projects')}</h1>
        </div>
    );
}

// Exportation
export default Projects;