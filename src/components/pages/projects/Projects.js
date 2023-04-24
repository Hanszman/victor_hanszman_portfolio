// Imports
import './Projects.css';
import { useState, useEffect } from 'react';
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
    const [technologiesGroups, setTechnologiesGroups] = useState([]);

    useEffect(() => {
        setTechnologiesGroups(groupByList(technologiesGroups));
    }, []);

    function groupByList(list) {
        list = [];
        list.push({name: 'technologies', class: 'cardGroupList', object: 'technologies', compare: technologies});
        return list;
    }

    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Projects')}</h1>
            <CardGroup
                arrayObject={projects}
                arrayDetails={['description']}
                arrayLists={technologiesGroups}
                arrayListsTitle='technologies'
                classCard='cardLong'
                classImg='cardimgPrint'
            >
            </CardGroup>
        </div>
    );
}

// Exportation
export default Projects;