import React from 'react';

import classes from './HomeScreen.module.css';


export default function HomeScreen() {
    return (
        <div className={classes.home__screen}>
            <div className={classes.jumbotron}>
                <h2>Welcome To My SPA</h2>
                <p>Make yourself at home</p>
            </div>
        </div>
    )
}


