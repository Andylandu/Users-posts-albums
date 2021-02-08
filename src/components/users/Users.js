import React, { Fragment } from 'react';
import classes from './Users.module.css';

const Users = ({ users }) => {
    const displayUsers = users.map((user) => (
        <div key={user.id} className={classes.row}>
             <p className={classes.col}>{user.name}</p> 
             <p className={classes.col}>{user.email}</p> 
             <p className={classes.col}>{user.address.city}</p>
        </div>
    ))

    return (
        <Fragment>
            <div className={classes.content}>
                <div className={classes.row}>
                    <p className={classes.col}>Имя</p> 
                    <p className={classes.col}>Электронная почта</p>  
                    <p className={classes.col}>Город</p>
                </div>
                {displayUsers}
            </div>
        </Fragment>
    )
}

export default Users;
