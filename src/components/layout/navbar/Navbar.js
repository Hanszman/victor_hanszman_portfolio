// Imports
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Container from '../container/Container';
import logo from '../../../img/logo/vh_logo_purple.png';

// Component
function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img className={styles.imgLogo} src={logo} alt='Victor Hanszman'/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Início</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/experiences'>Experiências</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/qualifications'>Qualificações</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/projects'>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contact'>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

// Exportation
export default Navbar;