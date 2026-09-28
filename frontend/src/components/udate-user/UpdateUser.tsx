import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {IUpdateUser} from "../../models/IUpdateUser";
import styles from './UpdateUser.module.css'
import {apiService} from "../../services/api.service";
import {IUser} from "../../models/IUser";
import {ClipLoader} from "react-spinners";
import {useNavigate} from "react-router-dom";

const UpdateUser = () => {

    const {register, handleSubmit, reset} = useForm<IUpdateUser>();
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        apiService.userService.getUser()
            .then((user: IUser) => reset({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                email: user.email,
            }))
            .catch(() => setError('Could not load your data'))
            .finally(() => setIsLoading(false));
    }, [reset]);

    const customHandler = async (formData: IUpdateUser) => {
        setError('');
        setIsSaving(true);
        try {
            await apiService.userService.updateUser(formData);
            navigate('/my-account');
        } catch {
            setError('Could not update your data');
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.innerBlock}>
                <h2>To update your user data, fill in the fields you want to change:</h2>
                {isLoading && <div className="statusBlock"><ClipLoader size={36}/></div>}
                {error && <p className={styles.error}>{error}</p>}
                {!isLoading && <form onSubmit={handleSubmit(customHandler)} className={styles.form}>
                    <input type="text" placeholder={'username'} {...register('username')}
                           className={styles.input}/>
                    <input type="text" placeholder={'first name'} {...register('firstName')} className={styles.input}/>
                    <input type="text" placeholder={'last name'} {...register('lastName')} className={styles.input}/>
                    <input type="number" placeholder={'age'} {...register('age', {valueAsNumber: true})} className={styles.input}/>
                    <input type="text" placeholder={'email@gmail.com'} {...register('email')} className={styles.input}/>

                    <button className={styles.sendButton} disabled={isSaving}>
                        {isSaving ? 'Saving...' : 'Save changes'}
                    </button>
                </form>}
            </div>
        </div>
    );
};

export default UpdateUser;
