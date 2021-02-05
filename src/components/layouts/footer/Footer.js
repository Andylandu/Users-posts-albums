import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.mainFooter}>
            <div className={classes.para}>Share</div>
            <div className={classes.social__icon}>
                <i className="fab fa-youtube-square"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-twitter-square"></i>
            </div>
            <div className={classes.copy__right}>Copyright &copy; Landuandy2@gmail.com</div>
        </footer>
    );
};

export default Footer;
