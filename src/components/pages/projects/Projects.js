// Imports
import './Projects.css';
import { useTranslation } from 'react-i18next';
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
            <div className="container">
                <div className="row">
                    {
                        projects.length > 0 && projects.map((project) => (
                            <div id={project.code} key={project.code} className="card cardLong">
                                {
                                    project.imgIcon &&
                                    <img
                                        className="card-img-top imgPrint"
                                        src={require(`../../../assets/img/${project.imgIcon}`)}
                                        alt={project.name}
                                    />
                                }
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text">{t(project.description)}</p>
                                    {
                                        project.technologies.length > 0 && project.technologies.map((projectTechnology) => (
                                            technologies.length > 0 && technologies.map((technology) => (
                                                technology.code === projectTechnology &&
                                                <span id={technology.code} key={technology.code} title={technology.name}>
                                                    {
                                                        technology.imgIcon &&
                                                        <img
                                                            className='imgIcon'
                                                            src={require(`../../../assets/img/${technology.imgIcon}`)}
                                                            alt={technology.name}
                                                        />
                                                    }
                                                </span>
                                            ))
                                        ))
                                    }
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
export default Projects;