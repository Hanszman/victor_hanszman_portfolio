// Imports
import { useTranslation } from 'react-i18next';

// Component
function Home() {
    // Variables
    const { t } = useTranslation();

    return (
        <div>
            <h1 className='highText'>{t('Home')}</h1>
        </div>
    );
}

// Exportation
export default Home;