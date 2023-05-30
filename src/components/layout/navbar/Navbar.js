// Imports
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import logoBlue from '../../../assets/img/logo/vh_logo_blue.png';
import logoWhite from '../../../assets/img/logo/vh_logo_white.png';
import TranslationDropdown from '../translation-dropdown/TranslationDropdown';
import Button from '../form/button/Button';

// Component
function Navbar() {
    // Declarations
    const { t } = useTranslation();
    const [stateImg, setStateImg] = useState(logoBlue);
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
                        onMouseOut={() => setStateImg(logoBlue)}
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
                        <Link to='/skills'>{t('Skills')}</Link>
                    </li>
                    <li className='item'>
                        <Link to='/projects'>{t('Projects')}</Link>
                    </li>
                </ul>
                <div className='displayFlex'>
                    <TranslationDropdown/>
                    <div className='btnMenu'>
                        <Button handleOnClick={() => setShowNavList(!showNavList)}>
                            <FaBars/>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

// Exportation
export default Navbar;