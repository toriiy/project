import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {apiService} from "../../services/api.service";

const Account = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        apiService.userService.getUsers().then(value => setUsers(value))
    }, []);

    return (
        <div>
            <h1>User:</h1>
            <p>{users[0].username}</p>
            <div>
                <p>{users[0].firstName}</p>
                <p>{users[0].lastName}</p>
            </div>
            <p>{users[0].age}</p>
            <p>{users[0].email}</p>
            <button>Корзина</button>
            <button>Улюблені товари</button>
        </div>
    );
};

export default Account;