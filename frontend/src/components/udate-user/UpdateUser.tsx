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
                <h2>To update your user data, fill in the fields you want to change:</h2>
                <form onSubmit={handleSubmit(customHandler)} className={styles.innerBlock}>
                    <input type="text" placeholder={'username'} {...register('username')}
                           className={styles.input}/>
                    <input type="text" placeholder={'first name'} {...register('firstName')} className={styles.input}/>
                    <input type="text" placeholder={'last name'} {...register('lastName')} className={styles.input}/>
                    <input type="number" placeholder={'age'} {...register('age')} className={styles.input}/>
                    <input type="text" placeholder={'email@gmail.com'} {...register('email')} className={styles.input}/>

                    <button className={styles.sendButton}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;