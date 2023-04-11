// Imports
import styles from './Container.module.css';

// Component
function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    );
}

// Exportation
export default Container;