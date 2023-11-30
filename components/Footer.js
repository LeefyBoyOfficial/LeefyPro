// Footer.js

import React from 'react';
import { FaGithub, FaTwitter, FaYoutube, FaSteam } from 'react-icons/fa';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <p className={styles.footerText}>&copy; 2023 Leefy Programming. All rights reserved.</p>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com/LeefyBoyOfficial" className={styles.icon} target='_blank'><FaGithub /></a>
                        <a href="https://twitter.com/StromXPlaysGOI" className={styles.icon} target='_blank'><FaTwitter /></a>
                        <a href="https://www.youtube.com/channel/UC0mU1ijg2by0o26VkK4Lrvg" className={styles.icon} target='_blank'><FaYoutube /></a>
                        <a href="https://steamcommunity.com/profiles/76561199558897954/" className={styles.icon} target='_blank'><FaSteam /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
