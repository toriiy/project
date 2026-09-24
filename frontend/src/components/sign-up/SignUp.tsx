import React from 'react';
import {useNavigate} from "react-router-dom";
import styles from './SignUp.module.css'
import {useForm} from "react-hook-form";
import {ISignUp} from "../../models/ISignUp";
import {apiService} from "../../services/api.service";

const SignUp = () => {

    const {register, handleSubmit} = useForm<ISignUp>();
    const navigate = useNavigate();

    const customHandler = (formData: ISignUp) => {
        console.log(formData)
        apiService.authService.signUp(formData).then(() => navigate('/my-account'))
    }

    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <h2>To sign up, fill in the fields below:</h2>
                <form className={styles.container} onSubmit={handleSubmit(customHandler)}>
                    <input type="text" placeholder={'username'} {...register('username')}
                           className={styles.input}/>
                    <input type="text" placeholder={'first name'} {...register('firstName')} className={styles.input}/>
                    <input type="text" placeholder={'last name'} {...register('lastName')} className={styles.input}/>
                    <input type="number" placeholder={'age'} {...register('age')} className={styles.input}/>
                    <input type="text" placeholder={'email@gmail.com'} {...register('email')} className={styles.input}/>
                    <input type="text" placeholder={'password'} {...register('password')} className={styles.input}/>

                    <button className={styles.sendButton}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;