// Imports
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import logoPurple from '../../../assets/img/logo/vh_logo_purple.png';
import logoWhite from '../../../assets/img/logo/vh_logo_white.png';
import TranslationDropdown from '../translation-dropdown/TranslationDropdown';

// Component
function Navbar() {
    // Declarations
    const { t } = useTranslation();
    const [stateImg, setStateImg] = useState(logoPurple);
    const [showNavList, setShowNavList] = useState(false);

    return (
        <header className='header'>
            <nav className='navbar'>
                <Link to='/'>
                    <img
                        className='imgLogo'
                        alt='Logo VH'
                        src={stateImg}
                        onMouseEnter={() => setStateImg(logoWhite)}
                        onMouseOut={() => setStateImg(logoPurple)}
                    />
                </Link>
                <ul className={showNavList ? 'list active' : 'list'}>
                    <li className='item'>
                        <Link to='/'>{t('Home')}</Link>
                    </li>
                    <li className='item'>
                        <Link to='/experiences'>{t('Experiences')}</Link>
                    </li>
                    <li className='item'>
                        <Link to='/qualifications'>{t('Qualifications')}</Link>
                    </li>
                    <li className='item'>
                        <Link to='/projects'>{t('Projects')}</Link>
                    </li>
                </ul>
                <div className='responsiveMenu'>
                    <TranslationDropdown/>
                    <button
                        className='btnMenu'
                        type='button'
                        onClick={() => setShowNavList(!showNavList)}
                    >
                        <FaBars/>
                    </button>
                </div>
            </nav>
        </header>
    );
}

// Exportation
export default Navbar;