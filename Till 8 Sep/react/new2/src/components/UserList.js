import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from '../store/actions';

const UserList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUsers = async () => {
            dispatch(fetchUsersRequest());
            try {
                const response = await fetch('https://reqres.in/api/users?page=2');
                const data = await response.json();
                dispatch(fetchUsersSuccess(data.data)); // Use data.data to get the user array
            } catch (error) {
                dispatch(fetchUsersFailure(error.message));
            }
        };

        fetchUsers();
    }, [dispatch]);

    return (
        <div>
            <h1>User List Page</h1>
            <p>User data is being fetched and stored in Redux...</p>
        </div>
    );
};

export default UserList;
