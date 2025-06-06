import React from 'react';
import {useForm} from "react-hook-form";
import {ISetForgotPassword} from "../../models/ISetForgotPassword";
import {apiService} from "../../services/api.service";

const SetForgotPassword = () => {

    const {register, handleSubmit} = useForm<ISetForgotPassword>();

    const customHandler = (formData: ISetForgotPassword) => {
        console.log(formData)
        apiService.authService.setForgotPassword(formData).then()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type="text" placeholder={'введіть новий пароль'} {...register('newPassword')}/>
                <button>Надіслати</button>
            </form>
        </div>
    );
};

export default SetForgotPassword;