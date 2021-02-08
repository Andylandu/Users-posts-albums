import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './UserScreen.module.css';

// Load components
import Users from '../../components/users/Users';
import Spinner from '../../utils/spinner/Spinner';

// Load action creator
import { getUsers } from '../../actions/userActions';

const UserSreen = () => {
    const { users, loading, error } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);    
    
    return (        
        <div className={classes.users__screen}>
            { loading ? <Spinner /> : error ? (<p>{error}</p>) : (
                <Fragment>
                    <h2>Список всех пользователей</h2>
                    <Users users={users} />
                </Fragment>
            )}
        </div>
    );
};

export default UserSreen;