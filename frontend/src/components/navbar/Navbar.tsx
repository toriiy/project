import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navbar.module.css'


const Navbar = () => {
    return (
        <div>
            <ul className={styles.nav}>
                <li className={styles.navLink}>
                    <Link to={'/'}>Головна</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to={'/contacts'}>Контакти</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to={'/filter'}>Фільтрувати</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to={'/sign-in'}>Вхід</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;