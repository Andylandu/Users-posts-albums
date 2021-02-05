import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classes from './AlbumScreen.module.css';

import Spinner from '../../utils/spinner/Spinner';

// Load action creators
import { getAlbums } from '../../actions/albumActions';
import { getUsers } from '../../actions/userActions';

export default function AlbumSreen() {
    const { albums, loading, error } = useSelector(state => state.albums);
    const { users } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbums());
    }, [dispatch, getAlbums]);

    useEffect(() => {
        dispatch(getUsers());
    }, [getUsers])

    let displayUsersAlbums = null;

    if (albums.length > 0) {
        displayUsersAlbums = users.map((user) => {
            return (
                <div key={user.id} className={classes.card}>
                    <h2>{user.name} Альбомы</h2>
                    <ol className={classes.card__body}> 
                        {albums.map((album) => album.userId === user.id 
                            ? (<li key={album.id}>
                                    <Link 
                                        to={`/photos/${album.id}?album=${album.title}`}
                                        className={classes.link}>
                                        {album.title.length > 35 ? `${album.title.slice(0, 35)}...` : album.title}
                                    </Link>
                                </li>) 
                            : null
                        )}
                        
                    </ol>
                </div>
            );
        });
    };
    
    return (        
        <div className={classes.albums__screen}>
            <h2>Список всех альбомов</h2>
            { loading && <Spinner />}
            <div className={classes.content}>
                {displayUsersAlbums}
            </div>
            {error && <p>{error}</p>}
        </div>
    )
}
