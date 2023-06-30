// Imports
import './Home.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatDateString, getAge, getChartObject, getTranslatedObjectArrayNames } from '../../../utils/Utils';
import profilePic from '../../../assets/img/profile/vh_profile.jpeg';
import BarChart from '../../layout/chart/bar-chart/BarChart';
import PieChart from '../../layout/chart/pie-chart/PieChart';
import Select from '../../layout/form/select/Select';
import Button from '../../layout/form/button/Button';
import Message from '../../layout/message/Message';
import projectsJson from '../../../db/projects.json';
import skillsJson from '../../../db/skills.json';
import optionsJson from '../../../db/options.json';

// Component
function Home() {
    // Declarations
    const { t } = useTranslation();
    const projects = projectsJson.projects;
    const technologies = skillsJson.skills.technologies;
    const typeOptions = optionsJson.options.type;
    const environmentOptions = optionsJson.options.environment;
    const [typeFilter, setTypeFilter] = useState('ProgrammingLanguages');
    const [technologiesFilter, setTechnologiesFilter] = useState(technologies.filter(obj => obj.type === 'ProgrammingLanguages'));

    // Functions
    function filterTechnology(e) {
        e.preventDefault();
        let filter = technologies;
        if (typeFilter)
            filter = filter.filter(obj => obj.type.toLowerCase() === typeFilter.toLowerCase());
        setTechnologiesFilter(filter);
    }

    return (
        <div>
            {<Message type={'success'} msg={'ProjectStillInDevelopment'}/>}
            <br/>
            <h1 className='highText centerText boldText'>Victor Hanszman Drumond Gonçalves</h1>
            <p className='text centerText italicText'>{t('IntroText')}</p><br/>
            <div className='info'>
                <img
                    className='profilePicImg'
                    alt='Victor Hanszman Profile'
                    src={profilePic}
                />
                <div className='infoText'>
                    <p className='text'>
                        <span className='boldText'>{t('Age')}: </span>
                        {getAge({startDate: '1996-11-09'}).ageYears} {t('YearsOld')} ({formatDateString('1996-11-09')})
                    </p>
                    <p className='text'>
                        <span className='boldText'>{t('CivilStatus')}: </span>
                        {t('Married')}
                    </p>
                    <p className='text'>
                        <span className='boldText'>{t('Nationality')}: </span>
                        {t('Brazilian')}
                    </p>
                    <p className='text'>
                        <span className='boldText'>{t('PhoneNumber')}: </span>
                        +55 (31) 99453-3811
                    </p>
                    <p className='text'>
                        <span className='boldText'>E-mail: </span>
                        victor.hanszman@hotmail.com
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='row charts'>
                    <BarChart
                        title={'ProjectsByTypeOfTechnologies'}
                        data={getChartObject([t('technologies')], ['technologies'], technologiesFilter, projects, true)}
                    >
                        <form className='displayFlex flexWrap' onSubmit={(e) => filterTechnology(e)}>
                            <Select
                                text={t('type')}
                                name='technologyType'
                                options={typeOptions}
                                hideLabel={true}
                                hideAll={true}
                                handleOnChange={e => setTypeFilter(e.target.value)}
                            />
                            <div className='btnFilter'>
                                <Button type='submit'>
                                    {t('Search')}
                                </Button>
                            </div>
                        </form>
                    </BarChart>
                    <PieChart
                        title={'ProjectsByEnvironment'}
                        data={getChartObject(getTranslatedObjectArrayNames(environmentOptions), ['environment'], environmentOptions, projects, false, true)}
                    ></PieChart>
                    {/* <BarChart
                        title={'TechnologiesByExperience'}
                        data={{
                            labels: ['Mon', 'Tue', 'Wed'],
                            datasets: [
                                {
                                    label: '369',
                                    data: [3, 6, 9]
                                },
                                {
                                    label: '333',
                                    data: [1, 2, 5]
                                },
                            ]
                        }}
                    ></BarChart>
                    <PieChart
                        title={'TechnologiesByStack'}
                        data={{
                            labels: ['One', 'Two', 'Three'],
                            datasets: [
                                {
                                    data: [3, 6, 9]
                                }
                            ]
                        }}
                    ></PieChart>
                    <BarChart
                        title={'TechnologiesByType'}
                        data={{
                            labels: ['Mon', 'Tue', 'Wed'],
                            datasets: [
                                {
                                    label: '369',
                                    data: [3, 6, 9]
                                },
                                {
                                    label: '333',
                                    data: [1, 2, 5]
                                },
                            ]
                        }}
                    ></BarChart>
                    <PieChart
                        title={'TechnologiesByLevel'}
                        data={{
                            labels: ['One', 'Two', 'Three'],
                            datasets: [
                                {
                                    data: [3, 6, 9]
                                }
                            ]
                        }}
                    ></PieChart> */}
                </div>
            </div>
        </div>
    );
}

// Exportation
export default Home;