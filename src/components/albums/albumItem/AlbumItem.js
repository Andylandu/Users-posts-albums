import React from 'react';

import classes from './AlbumItem.module.css';

const AlbumItem = ({ album, photos }) => {
    const displayUsersPhotos = photos.slice(0, 6).map((photo) => (
        <div key={photo.id} className={classes.card}>
            <div className={classes.image}><img src={photo.url} alt={photo.title} /></div>
            <div>Photo {photo.id}</div>
        </div>
    ));
    
    return (
        <div className={classes.content}>
            <h3>{album.title.length > 20 ? `${album.title.slice(0, 20)}...` : album.title}</h3>
            <div className={classes.row}>
                {displayUsersPhotos}
            </div>
        </div>
    );
};

export default AlbumItem;