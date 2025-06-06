import React from 'react';
import styles from './ForgotPassword.module.css'
import {useForm} from "react-hook-form";
import {IForgotPassword} from "../../models/IForgotPassword";
import {apiService} from "../../services/api.service";

const ForgotPassword = () => {

    const {register, handleSubmit} = useForm<IForgotPassword>();

    const customHandler = (formData: IForgotPassword) => {
        console.log(formData)
        apiService.authService.forgotPassword(formData).then()
    }

    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <h2>Щоб відновити пароль введіть свою електронну пошту</h2>
                <form className={styles.container} onSubmit={handleSubmit(customHandler)}>
                    <input type="text" placeholder={'email@gmail.com'} {...register('email')} className={styles.input}/>

                    <button className={styles.sendButton}>Відновити пароль</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;