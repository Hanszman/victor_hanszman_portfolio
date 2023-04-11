// Imports
import { useTranslation } from 'react-i18next';

// Component
function Projects() {
    const { t } = useTranslation();
    return (
        <div>{t('Projects')}</div>
    );
}

// Exportation
export default Projects;