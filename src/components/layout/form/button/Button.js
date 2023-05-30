// Imports
import './Button.css';

// Component
function Button(props) {
    return (
        <button
            type='button'
            className='formButton'
            onClick={props.handleOnClick}
        >
            {props.children}
        </button>
    );
}

// Exportation
export default Button;