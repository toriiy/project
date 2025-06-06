import React from 'react';
import {useForm} from "react-hook-form";
import {IUpdateUser} from "../../models/IUpdateUser";

const UpdateUser = () => {

    const {register, handleSubmit} = useForm<IUpdateUser>();

    const customHandler = (formData: IUpdateUser) => {
        console.log(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type="text" placeholder={'імя користувача'} {...register('username')}/>
                <input type="text" placeholder={'імя'} {...register('firstName')}/>
                <input type="text" placeholder={'прізвище'} {...register('lastName')}/>
                <input type="number" placeholder={'вік'} {...register('age')}/>
                <input type="text" placeholder={'email@gmail.com'} {...register('email')}/>
                <button>Надіслати</button>
            </form>

        </div>
    );
};

export default UpdateUser;