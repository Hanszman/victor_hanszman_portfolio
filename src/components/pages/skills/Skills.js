// Imports
import './Skills.css';
import { useTranslation } from 'react-i18next';
import CardGroup from '../../layout/card/card-group/CardGroup';
import Input from '../../layout/form/input/Input'
import Select from '../../layout/form/select/Select'
import skillsJson from '../../../db/skills.json';
import optionsJson from '../../../db/options.json';

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
        { type: 'string', detail: 'stack' },
        { type: 'interval', detail: 'intervalExperiencie' },
    ];
    const levelOptions = optionsJson.options.level;
    const typeOptions = optionsJson.options.type;
    const stackOptions = optionsJson.options.stack;

    // Functions
    function filterInput(text) {
        console.log(text);
    }

    function filterSelect(option) {
        console.log(option);
    }

    return (
        <div className='container'>
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
                <div className='displayFlex flexWrap'>
                    <Input
                        type='text'
                        text={t('technology')}
                        name='technologyName'
                        placeholder={t('technology')}
                        handleOnChange={filterInput}
                    />
                    <Select
                        text={t('level')}
                        name='technologyLevel'
                        options={levelOptions}
                        handleOnChange={filterSelect}
                    />
                    <Select
                        text={t('type')}
                        name='technologyType'
                        options={typeOptions}
                        handleOnChange={filterSelect}
                    />
                    <Select
                        text={t('stack')}
                        name='technologyStack'
                        options={stackOptions}
                        handleOnChange={filterSelect}
                    />
                </div>
            </CardGroup>
        </div>
    );
}

// Exportation
export default Skills;