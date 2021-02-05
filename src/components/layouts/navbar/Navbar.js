import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';


const Navbar = () => {

    return (
        <div className={classes.navContent}>
            <nav className={classes.navbar}>
                <div className={classes.logo__container}><span className={classes.logo}>DevConnector</span></div>
                <input type="checkbox" id="navTog" className={classes.nav__tog} />
                <div className={classes.bar__menu}>
                    <label htmlFor="navTog">
                        <i className="fas fa-bars"></i>
                    </label>
                </div>
                <ul className={classes.nav__menu}>
                    <li className={classes.nav__item}>
                        <NavLink exact to="/" activeClassName={classes.active} className={classes.nav__link}>Home</NavLink>
                    </li>
                    <li className={classes.nav__item}>
                        <NavLink to="/users" activeClassName={classes.active} className={classes.nav__link}>Users</NavLink>
                    </li>
                    <li className={classes.nav__item}>
                        <NavLink to="/posts" activeClassName={classes.active} className={classes.nav__link}>Posts</NavLink>
                    </li>
                    <li className={classes.nav__item}>
                        <NavLink to="/albums" activeClassName={classes.active} className={classes.nav__link}>Albums</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};


export default Navbar;
