import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navbar.module.css'


const Navbar = () => {
    return (
        <div className={styles.navDiv}>
            <Link to={'/'} className={styles.brand}>Storyland</Link>
            <ul className={styles.nav}>
                <li>
                    <Link to={'/'} className={styles.navLink}>Home</Link>
                </li>
                <li>
                    <Link to={'contacts'} className={styles.navLink}>Contacts</Link>
                </li>
                <li>
                    <Link to={'filter'} className={styles.navLink}>Filter</Link>
                </li>
                <li>
                    <Link to={'sign-in'} className={styles.navLink}>Sign In</Link>
                </li>
                <li>
                    <Link to={'my-account'} className={styles.navLink}>My Account</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;