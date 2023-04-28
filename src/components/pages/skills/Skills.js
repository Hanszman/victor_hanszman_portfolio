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
    const formations = skillsJson.skills.formations;
    const formationsArrayDetails = [
        { type: 'string', detail: 'title' },
        { type: 'string', detail: 'level' },
        { type: 'string', detail: 'institution' },
        { type: 'date', detail: 'startDate' },
        { type: 'date', detail: 'endDate' }
    ];
    const languages = skillsJson.skills.languages;
    const languagesArrayDetails = [
        { type: 'string', detail: 'level' }
    ];
    const technologies = skillsJson.skills.technologies;
    const technologiesArrayDetails = [
        { type: 'string', detail: 'level' },
        { type: 'string', detail: 'type' },
        { type: 'string', detail: 'stack' }
    ];
    // const projects = projectsJson.projects;

    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Skills')}</h1>
            <h2 className='text boldText'>{t('formations')}:</h2>
            <CardGroup
                arrayObject={formations}
                arrayDetails={formationsArrayDetails}
                classCard='cardLong'
                classImg='cardImgIcon'
            >
            </CardGroup>
            <h2 className='text boldText'>{t('languages')}:</h2>
            <CardGroup
                arrayObject={languages}
                arrayDetails={languagesArrayDetails}
                classCard='cardShort'
                classImg='cardImgIcon'
            >
            </CardGroup>
            <h2 className='text boldText'>{t('technologies')}:</h2>
            <CardGroup
                arrayObject={technologies}
                arrayDetails={technologiesArrayDetails}
                classCard='cardShort'
                classImg='cardImgIcon'
            >
            </CardGroup>
        </div>
    );
}

// Exportation
export default Skills;