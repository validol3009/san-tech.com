import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className={styles.headerWrapper}>
                <header className={styles.header}>
                    <div className={styles.headerLogo}>
                        <a href='/' className={styles.headerLogoLink}>
                            <h3>SAN-TECH.com</h3>
                            <span>Plumbing service</span>
                        </a>
                    </div>
                    <info>
                        <p> Contact Us: +420776542660 </p>
                        <p> santech@gmail.com </p>
                    </info>
                </header>
            </div>
            <div className={styles.menuWrapper}>
                <nav className={styles.menu}>
                    <Link to = '/'>Main</Link>
                    <b>|</b>
                    <Link to = '/services'>Services</Link>
                    <b>|</b>
                    <Link to = '/aboutus'>About Us</Link>
                </nav>
            </div>
        </>
    )
}

export default Header;