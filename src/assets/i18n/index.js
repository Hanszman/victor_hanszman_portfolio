// Imports
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTBR from './locales/pt/pt-br.json'
import ENUS from './locales/en/en-us.json'

// Variables
const resources = {
    'pt': PTBR,
    'en': ENUS
};

// Translation
i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

// Exportation
export default i18n;