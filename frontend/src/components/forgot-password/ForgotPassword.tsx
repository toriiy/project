import React from 'react';
import styles from './ForgotPassword.module.css'

const ForgotPassword = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <h2>Щоб відновити пароль введіть свою електронну пошту</h2>
                <form className={styles.container}>
                    <input type="text" placeholder={'email@gmail.com'} className={styles.input}/>

                    <button className={styles.sendButton}>Відновити пароль</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;