// Navbar.js

import React, { useState } from 'react';
import Link from 'next/link';
import { BiDonateHeart } from 'react-icons/bi';
import { HiOutlineUserCircle } from 'react-icons/hi';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navBar}>
            {/* Navigation Links for Mobile */}
            <div className={styles.leftNav}>
                <ul>
                    <Link style={{ textDecoration: 'none' }} href="/"><li>Home</li></Link>
                    <Link style={{ textDecoration: 'none' }} href="/about"><li>About</li></Link>
                    <Link style={{ textDecoration: 'none' }} href="/courses/learn"><li>Learn</li></Link>
                    <Link style={{ textDecoration: 'none' }} href="/auth/donate"><li>Donate</li></Link>
                    <Link style={{ textDecoration: 'none' }} href="/auth/contact"><li>Contact</li></Link>
                </ul>
            </div>

            {/* Other Desktop Navigation Elements */}
            <div className={styles.rightNav}>
                <input type="search" name="search" className={styles.searchBar} />
                <Link style={{ textDecoration: 'none' }} href="/auth/donate"><BiDonateHeart size={30} color="white" /></Link>
                <Link style={{ textDecoration: 'none' }} href="/auth/contact"><HiOutlineUserCircle size={30} color="white" /></Link>
            </div>
        </nav>
    );
};

export default Navbar;
