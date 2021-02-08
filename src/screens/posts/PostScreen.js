import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './PostScreen.module.css';

// Load components
import Posts from '../../components/posts/Posts';
import Spinner from '../../utils/spinner/Spinner';
import AddPost from '../../components/addPost/AddPost';

// Load action creator
import { getPosts } from '../../actions/postActions';
import { getUsers } from '../../actions/userActions';

const PostSreen = () => {
    const [display, setDisplay] = useState({ show: false });
    let { posts, loading, error } = useSelector(state => state.posts);
    const { users } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]); 
    
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    
    return (        
        <div className={classes.posts__screen}>
            { loading ? <Spinner /> : error ? <p>{error}</p> : (
                <Fragment>
                    <h2>Список всех постов с информацией о пользователе</h2>
                    <div className={classes.btn} onClick={() => setDisplay((prevState) => ({ show: !prevState.show}))}>
                        Добавить новый пост
                    </div>
                    {display.show && <AddPost show={() => setDisplay({ show: false})} />}
                    <Posts posts={posts} users={users} />
                </Fragment>
            )}
        </div>
    );
};

export default PostSreen;