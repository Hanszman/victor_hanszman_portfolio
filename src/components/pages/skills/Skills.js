// Imports
import './Skills.css';
import { useTranslation } from 'react-i18next';
import CardGroup from '../../layout/card/card-group/CardGroup';
import Input from '../../layout/form/input/Input'
import Select from '../../layout/form/select/Select'
import skillsJson from '../../../db/skills.json';

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

    // Functions
    function filterName(text) {
        console.log(text);
    }

    function filterLevel(option) {
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
                <div className='displayFlex'>
                    <Input
                        type='text'
                        text='Tecnologia'
                        name='technologyName'
                        placeholder='Nome da Tecnologia'
                        handleOnChange={filterName}
                    />
                    <Select
                        text='Nível de Experiência'
                        name='technologyLevel'
                        options={[
                            {id: 1, name: 'teste1'},
                            {id: 2, name: 'teste2'}
                        ]}
                        handleOnChange={filterLevel}
                    />
                </div>
            </CardGroup>
        </div>
    );
}

// Exportation
export default Skills;