import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {apiService} from "../../services/api.service";
import styles from './Account.module.css'
import {Link} from "react-router-dom";

const Account = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        apiService.userService.getUsers().then(value => setUsers(value))
    }, []);


    return (
        <div className={styles.mainBlock}>
            <div className={styles.bcgBlock}>
                <div className={styles.wrapBlock}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2436/2436890.png" alt="bookreader"
                         className={styles.image}/>
                    <div className={styles.wrapBlock}>{users.map(user => <div>
                        <h2>{user.username}</h2>
                        <div className={styles.innerBlock}>
                            <p>{user.firstName}</p>
                            <p>{user.lastName}</p>
                        </div>
                        <p>{user.email}</p>
                    </div>)}
                    </div>
                    <Link to={'my-account/update-user'}>Редагувати дані</Link>
                    <Link to={'my-account/change-password'}>Змінити пароль</Link>
                    <Link to={'my-account/cart'}>Корзина</Link>
                    <Link to={'my-account/favorite'}>Улюблені товари</Link>
                </div>
            </div>
        </div>
    );
};

export default Account;