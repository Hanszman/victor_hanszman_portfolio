// Imports
import styles from './TranslationDropdown.module.css';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import { FaGlobe } from 'react-icons/fa';

// Component
function TranslationDropdown() {
    // Variables
    const { t } = useTranslation();
    const languages = [
        {
            code: 'en',
            name: 'English',
            country_code: 'us'
        },
        {
            code: 'pt',
            name: 'Português',
            country_code: 'br'
        }
    ];

    return (
        <div className='dropdown'>
            <button
                className={`btn btn-secondary dropdown-toggle ${styles.btnTranslation}`}
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
            >
                <FaGlobe/>
            </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
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
    );
}

// Exportation
export default TranslationDropdown;