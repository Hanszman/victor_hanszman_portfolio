// Imports
import './Skills.css';
import { useTranslation } from 'react-i18next';
import CardGroup from '../../layout/card-group/CardGroup';
import skillsJson from '../../../db/skills.json';
// import projectsJson from '../../../db/projects.json';

// Component
function Skills() {
    // Declarations
    const { t } = useTranslation();
    const technologies = skillsJson.skills.technologies;
    const languages = skillsJson.skills.languages;
    const formations = skillsJson.skills.formations;
    // const projects = projectsJson.projects;

    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Skills')}</h1>
            <h2 className='text boldText'>{t('formations')}:</h2>
            <CardGroup
                arrayObject={formations}
                arrayDetails={['title','level','institution', 'startDate', 'endDate']}
                classCard='cardLong'
                classImg='cardImgIcon'
            >
            </CardGroup>
            <h2 className='text boldText'>{t('languages')}:</h2>
            <CardGroup
                arrayObject={languages}
                arrayDetails={['level']}
                classCard='cardShort'
                classImg='cardImgIcon'
            >
            </CardGroup>
            <h2 className='text boldText'>{t('technologies')}:</h2>
            <CardGroup
                arrayObject={technologies}
                arrayDetails={['level','type','stack']}
                classCard='cardShort'
                classImg='cardImgIcon'
            >
            </CardGroup>
        </div>
    );
}

// Exportation
export default Skills;