// Imports
import './Projects.css';
import { useTranslation } from 'react-i18next';
import CardGroup from '../../layout/card-group/CardGroup';
import projectsJson from '../../../db/projects.json';
import skillsJson from '../../../db/skills.json';

// Component
function Projects() {
    // Declarations
    const { t } = useTranslation();
    const projects = projectsJson.projects;
    const technologies = skillsJson.skills.technologies;

    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Projects')}</h1>
            <CardGroup
                arrayObject={projects}
                arrayDetails={['description']}
                arrayLists={[
                    {name: 'Technologies', class: '', object: 'technologies', compare: technologies}
                ]}
                classCard='cardLong'
                classImg='cardimgPrint'
            >
            </CardGroup>
        </div>
    );
}

// Exportation
export default Projects;