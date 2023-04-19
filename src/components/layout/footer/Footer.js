// Imports
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

// Component
function Footer() {
    return (
        <footer className='footer'>
            <ul className='socialList'>
                <li>
                    <a href='https://github.com/Hanszman' target='_blank' rel="noreferrer">
                        <FaGithub/>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/victor-hanszman-b1362215b/' target='_blank' rel="noreferrer">
                        <FaLinkedin/>
                    </a>
                </li>
                <li>
                    <a href='https://wa.me/5531994533811' target='_blank' rel="noreferrer">
                        <FaWhatsapp/>
                    </a>
                </li>
            </ul>
            <p className='copyRight'>
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