import React from 'react';
import {useForm} from "react-hook-form";
import {ISetForgotPassword} from "../../models/ISetForgotPassword";
import {apiService} from "../../services/api.service";
import styles from './SetForgotPassword.module.css'

const SetForgotPassword = () => {

    const {register, handleSubmit} = useForm<ISetForgotPassword>();

    const customHandler = (formData: ISetForgotPassword) => {
        console.log(formData)
        apiService.authService.setForgotPassword(formData).then()
    }
    return (
        <div className={styles.mainBlock}>
            <form className={styles.container} onSubmit={handleSubmit(customHandler)}>
                <input type="text" placeholder={'enter new password'} {...register('newPassword')} className={styles.input}/>
                <button className={styles.sendButton}>Send</button>
            </form>
        </div>
    );
};

export default SetForgotPassword;