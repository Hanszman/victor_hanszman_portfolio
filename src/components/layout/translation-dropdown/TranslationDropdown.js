// Imports
import './TranslationDropdown.css';
import { changeLanguage } from 'i18next';
import { FaGlobe } from 'react-icons/fa';

// Component
function TranslationDropdown() {
    // Declarations
    const languages = [
        {
            code: 'en',
            name: 'English (USA)',
            country_code: 'us'
        },
        {
            code: 'pt',
            name: 'Português (Brasil)',
            country_code: 'br'
        }
    ];

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
                    languages.map(({code, name, country_code}) => (
                        <li key={country_code}>
                            <button
                                className='dropdown-item itemTranslation'
                                type='button'
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