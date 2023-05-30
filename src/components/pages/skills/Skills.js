// Imports
import './Skills.css';
import { useState, useEffect } from 'react';
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

    useEffect(() => {
        setTechnologiesFilter(filterTechnology());
    }, [technologies]);

    // Functions
    function filterTechnology() {
        let filter = technologies;
        const name = nameFilter?.target?.value;
        const level = levelFilter?.target?.value;
        const type = typeFilter?.target?.value;
        const stack = stackFilter?.target?.value;
        console.log('technologies', technologies);
        console.log('name', name);
        console.log('level', level);
        console.log('type', type);
        console.log('stack', stack);
        if (name)
            filter = filter.filter(obj => obj.name.toLowerCase().includes(name.toLowerCase()));
        if (level)
            filter = filter.filter(obj => obj.level.toLowerCase().includes(level.toLowerCase()));
        if (type)
            filter = filter.filter(obj => obj.type.toLowerCase().includes(type.toLowerCase()));
        if (stack)
            filter = filter.filter(obj => obj.stack.toLowerCase().includes(stack.toLowerCase()));
        console.log('filter', filter);
        return filter;
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
                        handleOnChange={setNameFilter}
                    />
                    <Select
                        text={t('level')}
                        name='technologyLevel'
                        options={levelOptions}
                        handleOnChange={setLevelFilter}
                    />
                    <Select
                        text={t('type')}
                        name='technologyType'
                        options={typeOptions}
                        handleOnChange={setTypeFilter}
                    />
                    <Select
                        text={t('stack')}
                        name='technologyStack'
                        options={stackOptions}
                        handleOnChange={setStackFilter}
                    />
                </div>
            </CardGroup>
        </div>
    );
}

// Exportation
export default Skills;