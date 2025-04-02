import React, {useEffect, useState} from 'react';
import axios from "axios";

const HomePage = () => {

    interface IUser {
        _id: string;
        username: string;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        role: string;
        isDeleted: boolean;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }

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

export default HomePage;
