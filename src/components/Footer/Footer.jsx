import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <footer>
                <p>SAN-TECH.com plubming service</p>
                <p>All rights reserved &copy; 2023</p>
            </footer>
        </div>
    )
}

export default Footer;