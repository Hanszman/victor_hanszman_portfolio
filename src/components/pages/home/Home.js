// Imports
import './Home.css';
import { useTranslation } from 'react-i18next';
import { formatDateString, getAge, getChartObject } from '../../../utils/Utils';
import BarChart from '../../layout/chart/bar-chart/BarChart';
import LineChart from '../../layout/chart/line-chart/LineChart';
import PieChart from '../../layout/chart/pie-chart/PieChart';
import profilePic from '../../../assets/img/profile/vh_profile.jpeg';
import skillsJson from '../../../db/skills.json';
import projectsJson from '../../../db/projects.json';

// Component
function Home() {
    // Declarations
    const { t } = useTranslation();
    const technologies = skillsJson.skills.technologies;
    const projects = projectsJson.projects;

    return (
        <div>
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
                        title={'TechnologiesByProjects'}
                        data={getChartObject([t('technologies')], ['technologies'], technologies, projects)}
                    ></BarChart>
                    {/*
                    <PieChart
                        title={'ProjectsByEnvironment'}
                        data={{
                            labels: ['One', 'Two', 'Three'],
                            datasets: [
                                {
                                    data: [3, 6, 9]
                                }
                            ]
                        }}
                    ></PieChart>
                    <LineChart
                        title={'TechnologiesByExperience'}
                        data={{
                            labels: ['Mon', 'Tue', 'Wed'],
                            datasets: [
                                {
                                    label: 'Sales of the Week',
                                    data: [6, 3, 9],
                                    tension: 0.4
                                }
                            ]
                        }}
                    ></LineChart>
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
                    ></PieChart>
                    */}
                </div>
            </div>
        </div>
    );
}

// Exportation
export default Home;