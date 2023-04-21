// Imports
import './Projects.css';
import { useTranslation } from 'react-i18next';
import projectsJson from '../../../db/projects.json';

// Component
function Projects() {
    // Declarations
    const { t } = useTranslation();
    const projects = projectsJson.projects;

    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Projects')}</h1>
        </div>
    );
}

// Exportation
export default Projects;