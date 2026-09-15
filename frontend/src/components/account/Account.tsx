import React, {useEffect, useState} from 'react';
import {ClipLoader} from "react-spinners";
import {IUser} from "../../models/IUser";
import {apiService} from "../../services/api.service";
import styles from './Account.module.css'
import {Link} from "react-router-dom";

const Account = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiService.userService.getUsers()
            .then(value => setUsers(value))
            .finally(() => setIsLoading(false))
    }, []);


    return (
        <div className={styles.mainBlock}>

            <div className={styles.bcgBlock}>

                <div className={styles.wrapBlock}>

                    <img src="https://www.iconpacks.net/icons/2/free-opened-book-icon-3163-thumb.png" alt="book"
                         className={styles.image}/>

                    {isLoading && <div className="statusBlock"><ClipLoader size={50}/></div>}

                    {!isLoading && users.length === 0 &&
                        <p className="statusBlock">Дані не знайдено</p>}

                    <div className={styles.wrapBlock}>{users.map(user => <div key={user._id}>

                        <div className={styles.innerBlock}>

                            <div className={styles.infoBlock}>
                                <p className={styles.grayText}>Ім'я користувача:</p>
                                <p>{user.username}</p>
                            </div>
                            <hr/>

                            <div className={styles.infoBlock}>
                                <p className={styles.grayText}>Ім'я:</p>
                                <p>{user.firstName}</p>
                            </div>
                            <hr/>

                            <div className={styles.infoBlock}>
                                <p className={styles.grayText}>Прізвище: </p>
                                <p>{user.lastName}</p>
                            </div>
                            <hr/>

                            <div className={styles.infoBlock}>
                                <p className={styles.grayText}>Вік: </p>
                                <p>{user.age}</p>
                            </div>
                            <hr/>

                            <div className={styles.infoBlock}>
                                <p className={styles.grayText}>Емейл: </p>
                                <p>{user.email}</p>
                            </div>

                        </div>

                    </div>)}

                    </div>

                    <div className={styles.buttonBlock}>
                        <div className={styles.innerButtonBlock}>
                            <Link to={'/my-account/update-user'} className={styles.button}>Редагувати дані</Link>
                            <Link to={'/my-account/change-password'} className={styles.button}>Змінити пароль</Link>
                        </div>

                        <div className={styles.innerButtonBlock}>
                            <Link to={'/my-account/cart'} className={styles.button}>Корзина</Link>
                            <Link to={'/my-account/favorite'} className={styles.button}>Улюблені товари</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Account;