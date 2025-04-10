import React from 'react';
import styles from './SignUp.module.css'

const SignUp = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <h2>Щоб зареєструватись заповніть ці комірки:</h2>
                <form className={styles.container}>
                    <input type="text" placeholder={'імя користувача'} className={styles.input}/>
                    <input type="text" placeholder={'імя'} className={styles.input}/>
                    <input type="text" placeholder={'прізвище'} className={styles.input}/>
                    <input type="number" placeholder={'вік'} className={styles.input}/>
                    <input type="text" placeholder={'email@gmail.com'} className={styles.input}/>
                    <input type="text" placeholder={'пароль'} className={styles.input}/>

                    <button className={styles.sendButton}>Зареєструватись</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;