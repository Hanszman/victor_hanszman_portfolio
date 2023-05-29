// Imports
import './Projects.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { formatList } from '../../../utils/Utils';
import CardGroup from '../../layout/card/card-group/CardGroup';
import projectsJson from '../../../db/projects.json';
import skillsJson from '../../../db/skills.json';
import experiencesJson from '../../../db/experiences.json';

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
    const customers = experiencesJson.experiences.customers;
    const [customersGroups, setCustomersGroups] = useState([]);
    const technologies = skillsJson.skills.technologies;
    const [technologiesGroups, setTechnologiesGroups] = useState([]);

    useEffect(() => {
        setCustomersGroups(formatList('customers', customers, '', 'customers', 'cardGroupList'));
        setTechnologiesGroups(formatList('technologies', technologies, 'stack', 'technologies', 'cardGroupList'));
    }, [customers, technologies]);

    return (
        <div className='container'>
            <h1 className='highText centerText boldText'>{t('Projects')}</h1>
            <CardGroup
                arrayObject={projects}
                arrayDetails={projectsArrayDetails}
                arrayLists={[customersGroups, technologiesGroups]}
                classCard='cardLong'
                classImg='cardimgPrint'
            >
                {/* FILTERS */}
            </CardGroup>
        </div>
    );
}

// Exportation
export default Projects;