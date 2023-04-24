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
        setTechnologiesGroups(groupByList(technologies, 'stack', 'technologies'));
    }, []);

    // Functions
    function groupByList(list, group, nameObject) {
        const newObject = {};
        const newList = [];
        for (let i = 0; i < list.length; i++) {
            if (!newObject.hasOwnProperty(list[i][group])) {
                newObject[list[i][group]] = [];
            }
            newObject[list[i][group]].push(list[i]);
        }
        Object.keys(newObject).forEach((item) => {
            if (newObject[item] && newObject[item].length > 0) {
                newList.push({
                    name: item,
                    class: 'cardGroupList',
                    object: nameObject,
                    compare: newObject[item]
                });
            }
        });
        return newList;
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