// Imports
import './Experiences.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { formatList } from '../../../utils/Utils';
import CardGroup from '../../layout/card/card-group/CardGroup';
import experiencesJson from '../../../db/experiences.json';
import projectsJson from '../../../db/projects.json';
import skillsJson from '../../../db/skills.json';

// Component
function Experiences() {
    // Declarations
    const { t } = useTranslation();
    const jobs = experiencesJson.experiences.jobs;
    const jobsArrayDetails = [
        { type: 'date', detail: 'startDate' },
        { type: 'date', detail: 'endDate' }
    ];
    const customers = experiencesJson.experiences.customers;
    const [customersGroups, setCustomersGroups] = useState([]);
    const projects = projectsJson.projects;
    const [projectsGroups, setProjectsGroups] = useState([]);
    const technologies = skillsJson.skills.technologies;
    const [technologiesGroups, setTechnologiesGroups] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setCustomersGroups(formatList('customers', customers, '', 'customers', 'cardGroupList'));
        setProjectsGroups(formatList('projects', projects, '', 'projects', 'cardGroupList breakLine'));
        setTechnologiesGroups(formatList('technologies', technologies, 'stack', 'technologies', 'cardGroupList'));
    }, [customers, projects, technologies]);

    return (
        <div className='container'>
            <h1 className='highText centerText boldText'>{t('Experiences')}</h1>
            <CardGroup
                arrayObject={jobs}
                arrayDetails={jobsArrayDetails}
                arrayLists={[customersGroups, projectsGroups, technologiesGroups]}
                classCard='cardLong'
                classImg='cardImgIcon'
            >
            </CardGroup>
        </div>
    );
}

// Exportation
export default Experiences;