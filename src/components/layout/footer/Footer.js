// Imports
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Component
function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href='https://www.facebook.com/victor.hanszman' target='_blank'>
                        <FaFacebook/>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/hanszman/' target='_blank'>
                        <FaInstagram/>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/victor-hanszman-b1362215b/' target='_blank'>
                        <FaLinkedin/>
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <Link to='/'>
                    <span>Victor Hanszman</span>
                </Link>
                &nbsp;&copy; 2022
            </p>
        </footer>
    );
}

// Exportation
export default Footer;