import React from 'react';
import {Link} from "react-router-dom";
import styles from './SignIn.module.css'
import {useForm} from "react-hook-form";
import {ISignIn} from "../../models/ISignIn";
import {apiService} from "../../services/api.service";

const SignIn = () => {

    const {register, handleSubmit} = useForm<ISignIn>();

    const customHandler = (formData: ISignIn) => {
        console.log(formData)
        apiService.authService.signIn(formData).then()
    }

    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <h2>Щоб увійти заповніть ці комірки:</h2>
                <form className={styles.container} onSubmit={handleSubmit(customHandler)}>
                    <input type="text" placeholder={'email@gmail.com'} {...register('email')} className={styles.input}/>
                    <input type="text" placeholder={'пароль'} {...register('password')} className={styles.input}/>

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