import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './AlbumScreen.module.css';

// Load components
import Albums from '../../components/albums/Albums';
import Spinner from '../../utils/spinner/Spinner';

// Load action creators
import { getAlbums } from '../../actions/albumActions';
import { getUsers } from '../../actions/userActions';
import { getAllPhotos } from '../../actions/photoActions';

const AlbumSreen = () => {
    const { albums, loading, error } = useSelector(state => state.albums);
    const { photos } = useSelector((state) => state.photos);
    const { users } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbums());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);    
    
    useEffect(() => {
        dispatch(getAllPhotos());
    }, [dispatch]);
    
    return (        
        <div className={classes.albums__screen}>
            { loading ? <Spinner /> : error ? <p>{error}</p> : (
                <Fragment>
                    <h2>Список всех альбомов</h2>
                    <Albums users={users} albums={albums} photos={photos} />
                </Fragment>
            )}
        </div>
    );
};

export default AlbumSreen;