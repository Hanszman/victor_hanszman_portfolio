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
                id={props.name}
                name={props.name}
                onChange={props.handleOnChange}
            >
                {
                    !props.hideAll &&
                    <option
                        id='All'
                        key='All'
                        value=''
                    >
                        {t('All')}
                    </option>
                }
                {
                    props.options.map((option) => (
                        <option
                            key={option.code}
                            id={option.code}
                            value={option.code}
                        >
                            {t(option.name)}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}

// Exportation
export default Select;