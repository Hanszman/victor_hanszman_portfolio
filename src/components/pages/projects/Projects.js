// Imports
import './Projects.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { formatList } from '../../../utils/Utils';
import CardGroup from '../../layout/card/card-group/CardGroup';
import Input from '../../layout/form/input/Input';
import Select from '../../layout/form/select/Select';
import Button from '../../layout/form/button/Button';
import projectsJson from '../../../db/projects.json';
import skillsJson from '../../../db/skills.json';
import experiencesJson from '../../../db/experiences.json';

// Component
function Projects() {
    // Declarations
    const { t } = useTranslation();
    const projects = projectsJson.projects;
    const [projectsFilter, setProjectsFilter] = useState(projects);
    const projectsArrayDetails = [
        { type: 'string', detail: 'description' },
        { type: 'date', detail: 'startDate' },
        { type: 'date', detail: 'endDate' }
    ];
    const customers = experiencesJson.experiences.customers;
    const [customersGroups, setCustomersGroups] = useState([]);
    const technologies = skillsJson.skills.technologies;
    const [technologiesGroups, setTechnologiesGroups] = useState([]);
    const [nameFilter, setNameFilter] = useState('');
    const [startDateFilter, setStartDateFilter] = useState('');
    const [endDateFilter, setEndDateFilter] = useState('');
    const [technologyFilter, setTechnologyFilter] = useState('');
    const technologyOptions = skillsJson.skills.technologies;

    useEffect(() => {
        setCustomersGroups(formatList('customers', customers, '', 'customers', 'cardGroupList'));
        setTechnologiesGroups(formatList('technologies', technologies, 'stack', 'technologies', 'cardGroupList'));
    }, [customers, technologies]);

    // Functions
    function filterProject(e) {
        e.preventDefault();
        let filter = projects;
        if (nameFilter)
            filter = filter.filter(obj => obj.name.toLowerCase().includes(nameFilter.toLowerCase()));
        console.log(startDateFilter);
        console.log(endDateFilter);
        if (technologyFilter)
            filter = filter.filter(obj => obj.technologies.find(tec => tec.toLowerCase() === technologyFilter.toLowerCase()));
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
                classImg='cardimgPrint'
            >
                <form className='displayFlex flexWrap' onSubmit={(e) => filterProject(e)}>
                    <Input
                        type='text'
                        text={t('project')}
                        name='projectName'
                        placeholder={t('project')}
                        handleOnChange={e => setNameFilter(e.target.value)}
                    />
                    <Input
                        type='date'
                        text={t('startDate')}
                        name='projectStartDate'
                        handleOnChange={e => setStartDateFilter(e.target.value)}
                    />
                    <Input
                        type='date'
                        text={t('endDate')}
                        name='projectEndDate'
                        handleOnChange={e => setEndDateFilter(e.target.value)}
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
            </CardGroup>
        </div>
    );
}

// Exportation
export default Projects;