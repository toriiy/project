import React from 'react';
import styles from './SignUp.module.css'
import {useForm} from "react-hook-form";
import {ISignUp} from "../../models/ISignUp";
import {apiService} from "../../services/api.service";

const SignUp = () => {

    const {register, handleSubmit} = useForm<ISignUp>();

    const customHandler = (formData: ISignUp) => {
        console.log(formData)
        apiService.authService.signUp(formData).then()
    }

    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <h2>Щоб зареєструватись заповніть ці комірки:</h2>
                <form className={styles.container} onSubmit={handleSubmit(customHandler)}>
                    <input type="text" placeholder={'імя користувача'} {...register('username')}
                           className={styles.input}/>
                    <input type="text" placeholder={'імя'} {...register('firstName')} className={styles.input}/>
                    <input type="text" placeholder={'прізвище'} {...register('lastName')} className={styles.input}/>
                    <input type="number" placeholder={'вік'} {...register('age')} className={styles.input}/>
                    <input type="text" placeholder={'email@gmail.com'} {...register('email')} className={styles.input}/>
                    <input type="text" placeholder={'пароль'} {...register('password')} className={styles.input}/>

                    <button className={styles.sendButton}>Зареєструватись</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;