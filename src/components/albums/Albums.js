import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Albums.module.css';

import AlbumItem from './albumItem/AlbumItem';

const Albums = ({ users, albums, photos }) => {
    const displayUsersAlbums = users.map((user) => (
        <div key={user.id} className={classes.card}>
                <h2>{user.name} Альбомы</h2>
                <div className={classes.card__body}> 
                    {albums.map((album) => album.userId === user.id 
                        ? (
                            <Link to={`/photos/${album.id}?album=${album.title}`} key={album.id} className={classes.item}>
                                <AlbumItem 
                                    album={album} 
                                    photos={photos.filter((photo) => photo.albumId === album.id)} 
                                />
                            </Link>
                        ) 
                        : null
                    )}
                </div>
            </div>
    ));
    return (
        <div className={classes.content}>
            {displayUsersAlbums}
        </div>
    );
};

export default Albums;