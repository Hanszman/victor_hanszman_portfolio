// Imports
import './Skills.css';
import { useTranslation } from 'react-i18next';
import skillsJson from '../../../db/skills.json';
// import projectsJson from '../../../db/projects.json';

// Component
function Skills() {
    // Declarations
    const { t } = useTranslation();
    const technologies = skillsJson.skills.technologies;
    // const languages = skillsJson.skills.languages;
    // const formations = skillsJson.skills.formations;
    // const projects = projectsJson.projects;

    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Skills')}</h1>
            <div className="container">
                <div className="row">
                    {
                        technologies.length > 0 && technologies.map((technology) => (
                            <div id={technology.code} key={technology.code} title={technology.name} className="card cardShort">
                                {
                                    technology.imgIcon &&
                                    <img
                                        className="card-img-top imgIcon"
                                        src={require(`../../../assets/img/${technology.imgIcon}`)}
                                        alt={technology.name}
                                    />
                                }
                                <div className="card-body">
                                    <h5 className="card-title">{technology.name}</h5>
                                    <p className="card-text">{t(technology.level)}</p>
                                    <p className="card-text">{t(technology.type)}</p>
                                    <p className="card-text">{t(technology.stack)}</p>
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
export default Skills;