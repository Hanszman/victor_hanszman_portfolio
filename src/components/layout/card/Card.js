// Imports
import './Card.css';

// Component
function Card(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

// Exportation
export default Card;