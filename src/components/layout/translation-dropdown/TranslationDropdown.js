// Imports
import './TranslationDropdown.css';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import { FaGlobe } from 'react-icons/fa';
import languagesJson from '../../../db/languages.json';

// Component
function TranslationDropdown() {
    // Declarations
    const { t } = useTranslation();
    const languages = languagesJson.languages;

    return (
        <div className='dropdown dropdownTranslation'>
            <button
                className='dropdown-toggle btnTranslation'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
            >
                <FaGlobe/>
            </button>
            <ul
                className='dropdown-menu menuTranslation'
                aria-labelledby='dropdownMenuButton1'
            >
                {
                    languages.map(({code, language_name, country_name, country_code}) => (
                        <li key={country_code}>
                            <button
                                className='dropdown-item itemTranslation'
                                type='button'
                                onClick={() => changeLanguage(code)}
                            >
                                <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                                {t(language_name)} ({t(country_name)})
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