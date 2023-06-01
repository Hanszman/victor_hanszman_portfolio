// Imports
import './Skills.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CardGroup from '../../layout/card/card-group/CardGroup';
import Input from '../../layout/form/input/Input';
import Select from '../../layout/form/select/Select';
import Button from '../../layout/form/button/Button';
import Message from '../../layout/message/Message';
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
    const [message, setMessage] = useState('');
    const [typeMessage, setTypeMessage] = useState('');

    // Functions
    function filterTechnology(e) {
        e.preventDefault();
        setMessage('');
        setTypeMessage('');
        let filter = technologies;
        if (nameFilter)
            filter = filter.filter(obj => obj.name.toLowerCase().includes(nameFilter.toLowerCase()));
        if (levelFilter)
            filter = filter.filter(obj => obj.level.toLowerCase() === levelFilter.toLowerCase());
        if (typeFilter)
            filter = filter.filter(obj => obj.type.toLowerCase() === typeFilter.toLowerCase());
        if (stackFilter)
            filter = filter.filter(obj => obj.stack.toLowerCase() === stackFilter.toLowerCase());
        if (filter.length <= 0) {
            setMessage('NoRecordFound');
            setTypeMessage('');
        }
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
                <form className='displayFlex flexWrap' onSubmit={(e) => filterTechnology(e)}>
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
                        <Button type='submit'>
                            {t('Search')}
                        </Button>
                    </div>
                </form>
                {
                    technologiesFilter && technologiesFilter.length > 0 &&
                    <div>{`${technologiesFilter.length} ${t('technologies')}`}</div>
                }
                {message && <Message type={typeMessage} msg={message}/>}
            </CardGroup>
        </div>
    );
}

// Exportation
export default Skills;