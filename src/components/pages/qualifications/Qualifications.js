// Imports
import { useTranslation } from 'react-i18next';

// Component
function Qualifications() {
    // Declarations
    const { t } = useTranslation();

    // Listar qualificações de acordo com o arquivo do json
    return (
        <div>
            <h1 className='highText'>{t('Qualifications')}</h1>
        </div>
    );
}

// Exportation
export default Qualifications;