import React from 'react';
import {useForm} from "react-hook-form";
import {IUpdateUser} from "../../models/IUpdateUser";
import styles from './UpdateUser.module.css'

const UpdateUser = () => {

    const {register, handleSubmit} = useForm<IUpdateUser>();

    const customHandler = (formData: IUpdateUser) => {
        console.log(formData)
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.innerBlock}>
                <h2>Щоб змінити дані користувача, заповніть поля, які хочете змінити:</h2>
                <form onSubmit={handleSubmit(customHandler)} className={styles.innerBlock}>
                    <input type="text" placeholder={'імя користувача'} {...register('username')}
                           className={styles.input}/>
                    <input type="text" placeholder={'імя'} {...register('firstName')} className={styles.input}/>
                    <input type="text" placeholder={'прізвище'} {...register('lastName')} className={styles.input}/>
                    <input type="number" placeholder={'вік'} {...register('age')} className={styles.input}/>
                    <input type="text" placeholder={'email@gmail.com'} {...register('email')} className={styles.input}/>

                    <button className={styles.sendButton}>Надіслати</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;