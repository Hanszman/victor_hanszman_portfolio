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
            <br/>
            <select
                name={props.name}
                id={props.name}
                onChange={props.handleOnChange}
            >
                <option value=''>{t('SelectOption')}</option>
                {
                    props.options.map((option) => (
                        <option value={option.code} key={option.code}>
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