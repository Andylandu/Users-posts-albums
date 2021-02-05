import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './UserScreen.module.css';

import Spinner from '../../utils/spinner/Spinner';

// Load action creator
import { getUsers } from '../../actions/userActions';

export default function UserSreen() {
    const { users, loading, error } = useSelector(state => state.users);
    const dispatch = useDispatch();
    console.log(users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    let displayUsers = null;
    
    if (users.length > 0) {
        displayUsers = users.map((user) => (
            <div key={user.id} className={classes.row}>
                 <p className={classes.col}>{user.name}</p> 
                 <p className={classes.col}>{user.email}</p> 
                 <p className={classes.col}>{user.address.city}</p>
            </div> 
        ))
    }
    return (        
        <div className={classes.users__screen}>
            <h2>Список всех пользователей</h2>
            <div />
            { loading && <Spinner />}
            <div className={classes.content}>
                <div className={classes.row}>
                    <p className={classes.col}>Имя</p> 
                    <p className={classes.col}>Электронная почта</p>  
                    <p className={classes.col}>Город</p>
                </div>
                {displayUsers}
            </div>
            {error && <p>{error}</p>}
        </div>
    )
}
