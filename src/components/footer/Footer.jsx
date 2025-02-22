import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.copyright}>
                    © {currentYear} Aleksandrs Pirags
                </p>
            </div>
        </footer>
    );
};

export default Footer;