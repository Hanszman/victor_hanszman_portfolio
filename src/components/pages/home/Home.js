// Imports
import { useTranslation } from 'react-i18next';

// Component
function Home() {
    // Variables
    const { t } = useTranslation();

    return (
        <div>{t('Home')}</div>
    );
}

// Exportation
export default Home;