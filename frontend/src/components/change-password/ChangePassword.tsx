import React from 'react';
import {useForm} from "react-hook-form";
import {IChangePassword} from "../../models/IChangePassword";
import {apiService} from "../../services/api.service";
import styles from './ChangePassword.module.css'

const ChangePassword = () => {

    const {register, handleSubmit} = useForm<IChangePassword>();

    const customHandler = (formData: IChangePassword) => {
        console.log(formData)
        apiService.authService.changePassword(formData).then()
    }

    return (
        <div className={styles.mainBlock}>
            <div className={styles.innerBlock}>
                <h2>Щоб змінити пароль, заповніть ці комірки: </h2>
                <form onSubmit={handleSubmit(customHandler)} className={styles.innerBlock}>
                    <input type="text" placeholder={'введіть старий пароль'} {...register('oldPassword')}
                           className={styles.input}/>
                    <input type="text" placeholder={'введіть новий пароль'} {...register('newPassword')}
                           className={styles.input}/>

                    <button className={styles.sendButton}>Надіслати</button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;