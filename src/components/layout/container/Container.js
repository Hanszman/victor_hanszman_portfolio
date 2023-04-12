// Imports
import './Container.css';

// Component
function Container(props) {
    return (
        <div className='container'>
            {props.children}
        </div>
    );
}

// Exportation
export default Container;