// Imports
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../container/Container';
import logo from '../../../assets/img/logo/vh_logo_purple.png';
import TranslationDropdown from '../translation-dropdown/TranslationDropdown';

// Component
function Navbar() {
    // Variables
    const { t } = useTranslation();

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
                <TranslationDropdown/>
            </Container>
        </nav>
    );
}

// Exportation
export default Navbar;