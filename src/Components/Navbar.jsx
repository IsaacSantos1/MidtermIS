import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {

    return(
        <nav>
            <Link to='/'><img className={styles.logo} src={logo} alt="TeaCozy" /></Link>
            <ul className={styles.router}>
                <Link className={styles.link} to='/Hero'>Our Mission</Link>
                <Link className={styles.link} to='/Tea'>Featured Tea</Link>
                <Link className={styles.link} to='/Locations'>Locations</Link>
            </ul>
        </nav>
    );
}

export default Navbar
