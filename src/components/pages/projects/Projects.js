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
                classCard='cardLong'
                classImg='cardimgPrint'
                classChildren=''
            >
                {
                    // project.technologies.length > 0 && project.technologies.map((projectTechnology) => (
                    //     technologies.length > 0 && technologies.map((technology) => (
                    //         technology.code === projectTechnology &&
                    //         <span id={technology.code} key={technology.code} title={technology.name}>
                    //             {
                    //                 technology.imgIcon &&
                    //                 <img
                    //                     className='imgIcon'
                    //                     src={require(`../../../assets/img/${technology.imgIcon}`)}
                    //                     alt={technology.name}
                    //                 />
                    //             }
                    //         </span>
                    //     ))
                    // ))
                }
            </CardGroup>
        </div>
    );
}

// Exportation
export default Projects;