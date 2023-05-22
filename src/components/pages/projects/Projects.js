// Imports
import './Projects.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { groupByList } from '../../../utils/Utils';
import CardGroup from '../../layout/card/card-group/CardGroup';
import projectsJson from '../../../db/projects.json';
import skillsJson from '../../../db/skills.json';

// Component
function Projects() {
    // Declarations
    const { t } = useTranslation();
    const projects = projectsJson.projects;
    const projectsArrayDetails = [
        { type: 'string', detail: 'description' },
        { type: 'date', detail: 'startDate' },
        { type: 'date', detail: 'endDate' }
    ];
    const technologies = skillsJson.skills.technologies;
    const [technologiesGroups, setTechnologiesGroups] = useState([]);

    useEffect(() => {
        setTechnologiesGroups(groupByList('technologies', technologies, 'stack', 'technologies', 'cardGroupList'));
    }, []);

    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Projects')}</h1>
            <CardGroup
                arrayObject={projects}
                arrayDetails={projectsArrayDetails}
                arrayLists={technologiesGroups}
                classCard='cardLong'
                classImg='cardimgPrint'
            >
            </CardGroup>
        </div>
    );
}

// Exportation
export default Projects;