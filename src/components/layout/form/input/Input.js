// Imports
import './Input.css';

// Component
function Input(props) {
    return (
        <div className='formInput'>
            <label htmlFor={props.name}>{props.text}:</label>
            <br/>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                onChange={props.handleOnChange}
            />
        </div>
    );
}

// Exportation
export default Input;