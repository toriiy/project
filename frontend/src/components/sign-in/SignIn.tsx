import React from 'react';
import {Link} from "react-router-dom";
import styles from './SignIn.module.css'

const SignIn = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <h2>Щоб увійти заповніть ці комірки:</h2>
                <form className={styles.container}>
                    <input type="text" placeholder={'email@gmail.com'} className={styles.input}/>
                    <input type="text" placeholder={'пароль'} className={styles.input}/>

                    <button className={styles.sendButton}>Увійти</button>
                </form>
                <div className={styles.linkDiv}>
                    <Link to={'/sign-up'}>Не маєте акаунту? Клікніть сюди, щоб зареєструватись!</Link>
                    <Link to={'/forgot-password'}>Забули пароль? Клікніть сюди!</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;