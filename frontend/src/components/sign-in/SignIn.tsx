import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import styles from './SignIn.module.css'
import {useForm} from "react-hook-form";
import {ISignIn} from "../../models/ISignIn";
import {apiService} from "../../services/api.service";

const SignIn = () => {

    const {register, handleSubmit} = useForm<ISignIn>();
    const navigate = useNavigate();

    const customHandler = (formData: ISignIn) => {
        apiService.authService.signIn(formData).then(() => navigate('/my-account'))
    }

    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <h2>To sign in, fill in the fields below:</h2>
                <form className={styles.container} onSubmit={handleSubmit(customHandler)}>
                    <input type="text" placeholder={'email@gmail.com'} {...register('email')} className={styles.input}/>
                    <input type="text" placeholder={'password'} {...register('password')} className={styles.input}/>

                    <button className={styles.sendButton}>Sign In</button>
                </form>
                <div className={styles.linkDiv}>
                    <Link to={'/sign-up'}>Don't have an account? Click here to sign up!</Link>
                    <Link to={'/forgot-password'}>Forgot your password? Click here!</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
