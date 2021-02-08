import React from 'react';

import classes from './Photos.module.css';

const Photos = ({ photos }) => {
    const displayUsersPhotos = photos.slice(0, 10).map((photo) => (
        <div key={photo.id} className={classes.card}>
                <div className={classes.image}><img src={photo.url} alt={photo.title} /></div>
                <div className={classes.card__content}>
                    <h3>Photo {photo.id}</h3>
                    <p>{photo.title}</p>
                </div>
            </div>
    ));

    return (
        <div className={classes.content}>
            {displayUsersPhotos}
        </div>
    );
};

export default Photos;
