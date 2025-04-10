import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import axios from "axios";

const Account = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        axios.get('/api/users').then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <h1>Users:</h1>
            {users.map(user => <div key={user._id}>{JSON.stringify(user)}</div>)}
        </div>
    );
};

export default Account;