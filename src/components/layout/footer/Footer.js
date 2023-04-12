// Imports
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Component
function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li>
                    <a href='https://wa.me/5531994533811' target='_blank' rel="noreferrer">
                        <FaWhatsapp/>
                    </a>
                </li>
                <li>
                    <a href='https://www.facebook.com/victor.hanszman' target='_blank' rel="noreferrer">
                        <FaFacebook/>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/hanszman/' target='_blank' rel="noreferrer">
                        <FaInstagram/>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/victor-hanszman-b1362215b/' target='_blank' rel="noreferrer">
                        <FaLinkedin/>
                    </a>
                </li>
            </ul>
            <p className={styles.copyRight}>
                <Link to='/'>
                    <span>Victor Hanszman</span>
                </Link>
                &nbsp;&copy; 2023
            </p>
        </footer>
    );
}

// Exportation
export default Footer;