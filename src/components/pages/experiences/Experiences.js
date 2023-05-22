// Imports
import './Experiences.css';
import { useTranslation } from 'react-i18next';
import CardGroup from '../../layout/card/card-group/CardGroup';
import experiencesJson from '../../../db/experiences.json';
// import projectsJson from '../../../db/projects.json';
// import skillsJson from '../../../db/skills.json';

// Component
function Experiences() {
    // Declarations
    const { t } = useTranslation();
    const jobs = experiencesJson.experiences.jobs;
    const jobsArrayDetails = [];
    // const customers = experiencesJson.experiences.customers;
    // const projects = projectsJson.projects;
    // const technologies = skillsJson.skills.technologies;

    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Experiences')}</h1>
            <CardGroup
                arrayObject={jobs}
                arrayDetails={jobsArrayDetails}
                classCard='cardLong'
                classImg='cardImgIcon'
            >
            </CardGroup>
        </div>
    );
}

// Exportation
export default Experiences;