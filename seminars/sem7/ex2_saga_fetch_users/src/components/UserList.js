// components/UserList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../actions/userActions';

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.id}. {user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
