import styles from '../styles/Navbar.module.css'; 
import logo from '../assets/logo.png'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [isToggled, setIsToggled] = useState(false);
    const linksClassName = isToggled ? styles.toggledMenu : styles.notToggledMenu;

    const handleMenu = () => {
        setIsToggled(!isToggled);
    };

    return (
        <nav>
            <Link to='/'><img className={styles.logo} src={logo} alt="TeaCozy" /></Link>

            <div className={styles.toggleContainer}>
                <button className={styles.navButton} onClick={handleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu">
                        <path d="M4 5h16" />
                        <path d="M4 12h16" />
                        <path d="M4 19h16" />
                    </svg>
                </button>

                <ul className={linksClassName}>
                    <Link className={styles.link} to='/Hero'>Our Mission</Link>
                    <Link className={styles.link} to='/Tea'>Featured Tea</Link>
                    <Link className={styles.link} to='/Locations'>Locations</Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

