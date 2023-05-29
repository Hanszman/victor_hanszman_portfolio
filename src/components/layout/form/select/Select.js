// Imports
import './Select.css';
import { useTranslation } from 'react-i18next';

// Component
function Select(props) {
    // Declarations
    const { t } = useTranslation();

    return (
        <div className='formSelect'>
            <label htmlFor={props.name}>{props.text}:</label>
            <select
                name={props.name}
                id={props.name}
                onChange={props.handleOnChange}
                value={props.value || ''}
            >
                <option value=''>{t('SelectOption')}</option>
                {
                    props.options.map((option) => (
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}

// Exportation
export default Select;