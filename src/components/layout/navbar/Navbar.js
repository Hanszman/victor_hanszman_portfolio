// Imports
import styles from './Navbar.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo_purple from '../../../assets/img/logo/vh_logo_purple.png';
import logo_white from '../../../assets/img/logo/vh_logo_white.png';
import TranslationDropdown from '../translation-dropdown/TranslationDropdown';

// Component
function Navbar() {
    // Variables
    const { t } = useTranslation();
    const [stateImg, setStateImg] = useState(logo_purple);

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link to='/'>
                    <img
                        className={styles.imgLogo}
                        alt='Logo VH'
                        src={stateImg}
                        onMouseEnter={() => {setStateImg(logo_white)}}
                        onMouseOut={() => {setStateImg(logo_purple)}}
                    />
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
            </nav>
        </header>
    );
}

// Exportation
export default Navbar;