import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './PhotoScreen.module.css';

import Spinner from '../../utils/spinner/Spinner';

// Load action creators
import { getPhotos } from '../../actions/photoActions';
import { getUsers } from '../../actions/userActions';

export default function PhotoSreen(props) {
    const [album, setAlbum] = useState('');

    const { photos, loading, error } = useSelector(state => state.photos);
    const { users } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.location.search) {
            const album = props.location.search.split('=')[1];

            setAlbum(album);
        }
        
        if (props.match.params.id) {
            dispatch(getPhotos(props.match.params.id));
        }        

        if (photos.length > 0) {
            dispatch(getUsers());
        };
    }, [dispatch, photos.length, getUsers, getPhotos]);

    let displayUsersPhotos = null;


    if (photos.length > 0) {
        displayUsersPhotos = photos.slice(0, 10).map((photo) => {
            return (
                <div key={photo.id} className={classes.card}>
                    <img src={photo.url} />
                    <div className={classes.card__content}>
                        <h3>Photo {photo.id}</h3>
                        <p>{photo.title}</p>
                    </div>
                </div>
            );
        });
    };
    
    return (        
        <div className={classes.photo__screen}>
            <h2>Список всех фото в {album} альбоме</h2>
            { loading && <Spinner />}
            <div className={classes.content}>
                {displayUsersPhotos}
            </div>
            {error && <p>{error}</p>}
        </div>
    )
}
