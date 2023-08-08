// Imports
import './Projects.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { formatList, transformDate } from '../../../utils/Utils';
import CardGroup from '../../layout/card/card-group/CardGroup';
import Input from '../../layout/form/input/Input';
import Select from '../../layout/form/select/Select';
import Button from '../../layout/form/button/Button';
import Message from '../../layout/message/Message';
import projectsJson from '../../../db/projects.json';
import skillsJson from '../../../db/skills.json';
import experiencesJson from '../../../db/experiences.json';
import optionsJson from '../../../db/options.json';

// Component
function Projects() {
    // Declarations
    const { t } = useTranslation();
    const projects = projectsJson.projects;
    const [projectsFilter, setProjectsFilter] = useState(projects);
    const projectsArrayDetails = [
        { type: 'string', detail: 'description' },
        { type: 'string', detail: 'environment' },
        { type: 'date', detail: 'startDate' },
        { type: 'date', detail: 'endDate' }
    ];
    const customers = experiencesJson.experiences.customers;
    const [customersGroups, setCustomersGroups] = useState([]);
    const technologies = skillsJson.skills.technologies;
    const [technologiesGroups, setTechnologiesGroups] = useState([]);
    const [nameFilter, setNameFilter] = useState('');
    const [environmentFilter, setEnvironmentFilter] = useState('');
    const environmentOptions = optionsJson.options.environment;
    const [fromDateFilter, setFromDateFilter] = useState('');
    const [toDateFilter, setToDateFilter] = useState('');
    const [technologyFilter, setTechnologyFilter] = useState('');
    const technologyOptions = skillsJson.skills.technologies;
    const [message, setMessage] = useState('');
    const [typeMessage, setTypeMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        setCustomersGroups(formatList('customers', customers, '', 'customers', 'cardGroupList'));
        setTechnologiesGroups(formatList('technologies', technologies, 'stack', 'technologies', 'cardGroupList'));
    }, [customers, technologies]);

    // Functions
    function filterProject(e) {
        e.preventDefault();
        setMessage('');
        setTypeMessage('');
        let fromDate;
        let toDate;
        if (fromDateFilter) {
            fromDate = transformDate(fromDateFilter);
        }
        if (toDateFilter) {
            toDate = transformDate(toDateFilter);
        }
        if (fromDate && toDate && fromDate > toDate) {
            setMessage('DateError');
            setTypeMessage('error');
            return;
        }

        let filter = projects;
        if (nameFilter)
            filter = filter.filter(obj => obj.name.toLowerCase().includes(nameFilter.toLowerCase()));
        if (environmentFilter)
            filter = filter.filter(obj => obj.environment.toLowerCase() === environmentFilter.toLowerCase());
        if (technologyFilter)
            filter = filter.filter(obj => obj.technologies.find(tec => tec.toLowerCase() === technologyFilter.toLowerCase()));
        if (fromDate && toDate) {
            filter = filter.filter(obj => (
                (
                    transformDate(obj.startDate) >= fromDate ||
                    transformDate(obj.endDate) >= fromDate
                )
                &&
                (
                    transformDate(obj.startDate) <= toDate ||
                    transformDate(obj.endDate) <= toDate
                )
            ));
        } else {
            if (fromDate)
                filter = filter.filter(obj => (
                    transformDate(obj.startDate) >= fromDate ||
                    transformDate(obj.endDate) >= fromDate
                ));
            if (toDate)
                filter = filter.filter(obj => (
                    transformDate(obj.startDate) <= toDate ||
                    transformDate(obj.endDate) <= toDate
                ));
        }

        if (filter.length <= 0) {
            setMessage('NoRecordFound');
            setTypeMessage('');
        }
        setProjectsFilter(filter);
    }

    return (
        <div className='container'>
            <h1 className='highText centerText boldText'>{t('Projects')}</h1>
            <CardGroup
                arrayObject={projectsFilter}
                arrayDetails={projectsArrayDetails}
                arrayLists={[customersGroups, technologiesGroups]}
                classCard='cardLong'
                classImg='cardImgPrint'
                // classPosition='horizontal'
            >
                <form className='displayFlex flexWrap' onSubmit={(e) => filterProject(e)}>
                    <Input
                        type='text'
                        text={t('project')}
                        name='projectName'
                        placeholder={t('project')}
                        handleOnChange={e => setNameFilter(e.target.value)}
                    />
                    <Select
                        text={t('environment')}
                        name='projectEnvironment'
                        options={environmentOptions}
                        handleOnChange={e => setEnvironmentFilter(e.target.value)}
                    />
                    <Input
                        type='date'
                        text={t('from')}
                        name='projectFromDate'
                        handleOnChange={e => setFromDateFilter(e.target.value)}
                    />
                    <Input
                        type='date'
                        text={t('to')}
                        name='projectToDate'
                        handleOnChange={e => setToDateFilter(e.target.value)}
                    />
                    <Select
                        text={t('technology')}
                        name='projectTechnology'
                        options={technologyOptions}
                        handleOnChange={e => setTechnologyFilter(e.target.value)}
                    />
                    <div className='btnFilter'>
                        <Button type='submit'>
                            {t('Search')}
                        </Button>
                    </div>
                </form>
                {
                    projectsFilter && projectsFilter.length > 0 &&
                    <div>{`${projectsFilter.length} ${t('projects')}`}</div>
                }
                {message && <Message type={typeMessage} msg={message}/>}
            </CardGroup>
        </div>
    );
}

// Exportation
export default Projects;