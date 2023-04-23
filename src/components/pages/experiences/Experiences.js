// Imports
import './Experiences.css';
import { useTranslation } from 'react-i18next';
import experiencesJson from '../../../db/experiences.json';
// import projectsJson from '../../../db/projects.json';
// import skillsJson from '../../../db/skills.json';

// Component
function Experiences() {
    // Declarations
    const { t } = useTranslation();
    const jobs = experiencesJson.experiences.jobs;
    // const customers = experiencesJson.experiences.customers;
    // const projects = projectsJson.projects;
    // const technologies = skillsJson.skills.technologies;

    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Experiences')}</h1>
            <div className="container">
                <div className="row">
                    {
                        jobs.length > 0 && jobs.map((job) => (
                            <div id={job.code} key={job.code} className="card cardLong">
                                {
                                    job.imgIcon &&
                                    <img
                                        className="card-img-top imgIcon"
                                        src={require(`../../../assets/img/${job.imgIcon}`)}
                                        alt={job.name}
                                    />
                                }
                                <div className="card-body">
                                    <h5 className="card-title">{job.companyName}</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

// Exportation
export default Experiences;