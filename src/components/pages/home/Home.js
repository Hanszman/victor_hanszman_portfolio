// Imports
import './Home.css';
import { useTranslation } from 'react-i18next';
import { getAge, formatDateString } from '../../../utils/Utils';
import BarChart from '../../layout/chart/bar-chart/BarChart';
import LineChart from '../../layout/chart/line-chart/LineChart';
import PieChart from '../../layout/chart/pie-chart/PieChart';
import profilePic from '../../../assets/img/profile/vh_profile.jpeg';

// Component
function Home() {
    // Declarations
    const { t } = useTranslation();

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
            {/* <div className='container'>
                <div className='row charts'>
                    <BarChart
                        title={'TechnologiesByProjects'}
                        arrayLabels={['Mon', 'Tue', 'Wed']}
                        arrayDataSets={
                            [
                                {
                                    label: '369',
                                    data: [3, 6, 9]
                                },
                                {
                                    label: '333',
                                    data: [1, 2, 5]
                                },
                            ]
                        }
                    ></BarChart>
                    <PieChart
                        title={'ProjectsByEnvironment'}
                        arrayLabels={['One', 'Two', 'Three']}
                        arrayDataSets={
                            [
                                {
                                    data: [3, 6, 9]
                                }
                            ]
                        }
                    ></PieChart>
                    <LineChart
                        title={'TechnologiesByExperience'}
                        arrayLabels={['Mon', 'Tue', 'Wed']}
                        arrayDataSets={
                            [
                                {
                                    label: 'Sales of the Week',
                                    data: [6, 3, 9],
                                    tension: 0.4
                                }
                            ]
                        }
                    ></LineChart>
                    <PieChart
                        title={'TechnologiesByStack'}
                        arrayLabels={['One', 'Two', 'Three']}
                        arrayDataSets={
                            [
                                {
                                    data: [3, 6, 9]
                                }
                            ]
                        }
                    ></PieChart>
                    <BarChart
                        title={'TechnologiesByType'}
                        arrayLabels={['Mon', 'Tue', 'Wed']}
                        arrayDataSets={
                            [
                                {
                                    label: '369',
                                    data: [3, 6, 9]
                                },
                                {
                                    label: '333',
                                    data: [1, 2, 5]
                                },
                            ]
                        }
                    ></BarChart>
                    <PieChart
                        title={'TechnologiesByLevel'}
                        arrayLabels={['One', 'Two', 'Three']}
                        arrayDataSets={
                            [
                                {
                                    data: [3, 6, 9]
                                }
                            ]
                        }
                    ></PieChart>
                </div>
            </div> */}
            <div className='space'></div>
        </div>
    );
}

// Exportation
export default Home;