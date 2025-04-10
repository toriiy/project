import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navbar.module.css'


const Navbar = () => {
    return (
        <div className={styles.navDiv}>
            <ul className={styles.nav}>
                <li>
                    <Link to={'/'} className={styles.navLink}>Головна</Link>
                </li>
                <li>
                    <Link to={'contacts'} className={styles.navLink}>Контакти</Link>
                </li>
                <li>
                    <Link to={'filter'} className={styles.navLink}>Фільтрувати</Link>
                </li>
                <li>
                    <Link to={'sign-in'} className={styles.navLink}>Вхід</Link>
                </li>
                <li>
                    <Link to={'my-account'} className={styles.navLink}>Особистий кабінет</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;