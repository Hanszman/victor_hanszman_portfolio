// Imports
import './Home.css';
import { useTranslation } from 'react-i18next';
import profilePic from '../../../assets/img/profile/vh_profile.jpeg';
import { formatDateString } from '../../../utils/Utils';

// Component
function Home() {
    // Declarations
    const { t } = useTranslation();

    // Functions
    function getAge(dateString) {
        const today = new Date();
        const date = new Date(dateString);
        let birthDate = new Date(date.toISOString().slice(0, -1));
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

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
                        {getAge('1996-11-09')} {t('YearsOld')}
                    </p>
                    {formatDateString('1996-11-09')}
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
        </div>
    );
}

// Exportation
export default Home;