// Imports
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import { FaGlobe } from 'react-icons/fa';
import Container from '../container/Container';
import logo from '../../../assets/img/logo/vh_logo_purple.png';

// Component
function Navbar() {
    // Variables
    const { t } = useTranslation();
    const languages = [
        {
            code: 'pt',
            name: 'Português',
            country_code: 'br'
        },
        {
            code: 'en',
            name: 'English',
            country_code: 'us'
        }
    ];

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img className={styles.imgLogo} src={logo} alt='Victor Hanszman'/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>{t('Home')}</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/experiences'>{t('Experiences')}</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/qualifications'>{t('Qualifications')}</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/projects'>{t('Projects')}</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contact'>{t('Contact')}</Link>
                    </li>
                </ul>
                <div className='dropdown'>
                    <button
                        className='btn btn-secondary dropdown-toggle'
                        type='button'
                        id='dropdownMenuButton1'
                        data-bs-toggle='dropdown'
                        aria-expansed='false'
                    >
                        <FaGlobe/>
                    </button>
                    <ul className='dropdown-menu' aria-labeledby='dropdownMenuButton1'>
                        {
                            languages.map(({code, name, country_code}) => (
                                <li key={country_code}>
                                    <button
                                        className='dropdown-item'
                                        onClick={() => changeLanguage(code)}
                                    >
                                        <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                                        {name}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

// Exportation
export default Navbar;