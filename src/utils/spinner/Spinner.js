import React from 'react';
import classes from './Spinner.module.css';

const Spinner = () => (
    <div className={classes.spinner__container}>
        <div className={classes.lds__hourglass}></div>
    </div>
)

export default Spinner;
