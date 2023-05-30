// Imports
import './Skills.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CardGroup from '../../layout/card/card-group/CardGroup';
import Input from '../../layout/form/input/Input';
import Select from '../../layout/form/select/Select';
import Button from '../../layout/form/button/Button';
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
    const [technologiesFilter, setTechnologiesFilter] = useState(technologies);
    const technologiesArrayDetails = [
        { type: 'string', detail: 'level' },
        { type: 'string', detail: 'type' },
        { type: 'string', detail: 'stack' },
        { type: 'interval', detail: 'intervalExperiencie' },
    ];
    const [nameFilter, setNameFilter] = useState('');
    const levelOptions = optionsJson.options.level.filter(e => e.type === 'skills');
    const [levelFilter, setLevelFilter] = useState('');
    const typeOptions = optionsJson.options.type;
    const [typeFilter, setTypeFilter] = useState('');
    const stackOptions = optionsJson.options.stack;
    const [stackFilter, setStackFilter] = useState('');

    // Functions
    function filterTechnology() {
        let filter = technologies;
        console.log('technologies', technologies);
        console.log('name', nameFilter);
        console.log('level', levelFilter);
        console.log('type', typeFilter);
        console.log('stack', stackFilter);
        if (nameFilter)
            filter = filter.filter(obj => obj.name.toLowerCase().includes(nameFilter.toLowerCase()));
        if (levelFilter)
            filter = filter.filter(obj => obj.level.toLowerCase().includes(levelFilter.toLowerCase()));
        if (typeFilter)
            filter = filter.filter(obj => obj.type.toLowerCase().includes(typeFilter.toLowerCase()));
        if (stackFilter)
            filter = filter.filter(obj => obj.stack.toLowerCase().includes(stackFilter.toLowerCase()));
        console.log('filter', filter);
        setTechnologiesFilter(filter);
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
                arrayObject={technologiesFilter}
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
                        handleOnChange={e => setNameFilter(e.target.value)}
                    />
                    <Select
                        text={t('level')}
                        name='technologyLevel'
                        options={levelOptions}
                        handleOnChange={e => setLevelFilter(e.target.value)}
                    />
                    <Select
                        text={t('type')}
                        name='technologyType'
                        options={typeOptions}
                        handleOnChange={e => setTypeFilter(e.target.value)}
                    />
                    <Select
                        text={t('stack')}
                        name='technologyStack'
                        options={stackOptions}
                        handleOnChange={e => setStackFilter(e.target.value)}
                    />
                    <div className='btnFilter'>
                        <Button handleOnClick={() => filterTechnology()}>
                            {t('Search')}
                        </Button>
                    </div>
                </div>
            </CardGroup>
        </div>
    );
}

// Exportation
export default Skills;