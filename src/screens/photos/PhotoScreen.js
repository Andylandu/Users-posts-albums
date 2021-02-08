import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './PhotoScreen.module.css';

// Load components
import Photos from '../../components/photos/Photos';
import Spinner from '../../utils/spinner/Spinner';

const PhotoSreen = ({ match, location }) => {
    const [albumTitle, setAlbumTitle] = useState('');
    const [albumId, setAlbumId] = useState('');

    const { photos, loading, error } = useSelector(state => state.photos);
    const filteredPhotos = photos.filter((photo) => photo.albumId.toString() === albumId)

    useEffect(() => {        
        if (location.search) {
            const album = location.search.split('=')[1];

            setAlbumTitle(album);
        };  
        
        if (match.params.id) {
            setAlbumId(match.params.id)
        }
    }, [match, location]);    
    
    return (        
        <div className={classes.photo__screen}>            
            { loading ? <Spinner /> : error ? <p>{error}</p> : (
                <Fragment>
                    <div className={classes.go__back}>
                        <Link to="/albums" className={classes.link}>Go Back</Link>
                    </div>
                    <h2>Список первых десяти фото в {albumTitle} альбоме</h2>
                    <Photos 
                        photos={filteredPhotos}
                    />
                </Fragment>
            )}
        </div>
    );
};

export default PhotoSreen;