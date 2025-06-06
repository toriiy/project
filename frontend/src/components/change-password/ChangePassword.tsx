import React from 'react';
import {useForm} from "react-hook-form";
import {IChangePassword} from "../../models/IChangePassword";
import {apiService} from "../../services/api.service";

const ChangePassword = () => {

    const {register, handleSubmit} = useForm<IChangePassword>();

    const customHandler = (formData: IChangePassword) => {
        console.log(formData)
        apiService.authService.changePassword(formData).then()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type="text" placeholder={'введіть старий пароль'} {...register('oldPassword')}/>
                <input type="text" placeholder={'введіть новий пароль'} {...register('newPassword')}/>
                <button>Надіслати</button>
            </form>

        </div>
    );
};

export default ChangePassword;