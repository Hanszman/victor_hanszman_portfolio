// Imports
import './Skills.css';
import { useTranslation } from 'react-i18next';
import skillsJson from '../../../db/skills.json';

// Component
function Skills() {
    // Declarations
    const { t } = useTranslation();
    const technologies = skillsJson.skills.technologies;
    const languages = skillsJson.skills.languages;
    const formations = skillsJson.skills.formations;

    return (
        <div>
            <h1 className='highText centerText boldText'>{t('Skills')}</h1>
        </div>
    );
}

// Exportation
export default Skills;