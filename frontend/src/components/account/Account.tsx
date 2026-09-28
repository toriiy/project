import React, {useEffect, useState} from 'react';
import {ClipLoader} from "react-spinners";
import {IUser} from "../../models/IUser";
import {apiService} from "../../services/api.service";
import styles from './Account.module.css'
import {Link, useNavigate} from "react-router-dom";
import {Heart, LockKeyhole, LogOut, Pencil, ShoppingCart} from 'lucide-react';

const Account = () => {

    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        apiService.userService.getUser()
            .then(value => setUser(value))
            .finally(() => setIsLoading(false))
    }, []);

    const signOutHandler = () => {
        apiService.authService.signOut().finally(() => navigate('/sign-in'))
    }


    return (
        <div className={styles.mainBlock}>

            <div className={styles.card}>

                <div className={styles.header}>
                    <img src="https://www.iconpacks.net/icons/2/free-opened-book-icon-3163-thumb.png" alt="book"
                         className={styles.image}/>
                    {user && <h2 className={styles.username}>{user.username}</h2>}
                </div>

                {isLoading && <div className="statusBlock"><ClipLoader size={50}/></div>}

                {!isLoading && !user &&
                    <p className="statusBlock">Data not found</p>}

                {user && <div className={styles.infoList}>

                    <div className={styles.infoRow}>
                        <p className={styles.grayText}>Name</p>
                        <p className={styles.value}>{user.firstName} {user.lastName}</p>
                    </div>

                    <div className={styles.infoRow}>
                        <p className={styles.grayText}>Age</p>
                        <p className={styles.value}>{user.age}</p>
                    </div>

                    <div className={styles.infoRow}>
                        <p className={styles.grayText}>Email</p>
                        <p className={styles.value}>{user.email}</p>
                    </div>

                </div>}

                <div className={styles.actionsGrid}>
                    <Link to={'/my-account/update-user'} className={styles.actionButton}>
                        <Pencil className={styles.actionIcon}/>
                        Edit data
                    </Link>
                    <Link to={'/my-account/change-password'} className={styles.actionButton}>
                        <LockKeyhole className={styles.actionIcon}/>
                        Change password
                    </Link>
                    <Link to={'/my-account/cart'} className={styles.actionButton}>
                        <ShoppingCart className={styles.actionIcon}/>
                        Cart
                    </Link>
                    <Link to={'/my-account/favorite'} className={styles.actionButton}>
                        <Heart className={styles.actionIcon}/>
                        Favorite items
                    </Link>
                </div>

                <hr className={styles.divider}/>

                <button className={styles.signOutButton} onClick={signOutHandler}>
                    <LogOut className={styles.actionIcon}/>
                    Sign Out
                </button>

            </div>
        </div>
    );
};

export default Account;