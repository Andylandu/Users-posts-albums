import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './PostScreen.module.css';

import Spinner from '../../utils/spinner/Spinner';
import AddPost from '../../components/addPost/AddPost';

// Load action creator
import { getPosts } from '../../actions/postActions';
import { getUsers } from '../../actions/userActions';

export default function PostSreen() {
    const [display, setDisplay] = useState({ show: false });
    const { posts, loading, error } = useSelector(state => state.posts);
    const { users } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());

        if (posts.length > 0) {
            dispatch(getUsers())
        };
    }, [dispatch, posts.lenght]);

    let displayPosts = null;

    
    if (posts.length > 0 && users.length > 0) {
        displayPosts = posts.map((post) => {
            return (
                <div key={post.id} className={classes.card}>
                    <div className={classes.card__title}>
                        {post.id}. <strong>{post.title}</strong>
                    </div>
                    <div className={classes.row}>
                        <h5>Заглавие:</h5>
                        <p>{post.title}</p>
                    </div>
                    <div className={classes.row}>
                        <h5>Тело:</h5>
                        <p>{post.body}</p>
                    </div>
                    <div className={classes.row}>
                        <h5>Автор:</h5>
                        {users.map((user) => user.id === post.userId 
                            ? (
                                <div key={user.id}>
                                    <strong >{user.name}</strong>
                                </div>
                            ) 
                            : null)}
                    </div>
                </div>
            );
        });
    };
    
    return (        
        <div className={classes.posts__screen}>
            <h2>Список всех постов с информацией о пользователе</h2>
            <div className={classes.btn} onClick={() => setDisplay((prevState) => ({ show: !prevState.show}))}>
                Добавить новый пост
            </div>
            {display.show && <AddPost show={() => setDisplay({ show: false})} />}
            { loading && <Spinner />}
            <div className={classes.content}>
                {displayPosts}
            </div>
            {error && <p>{error}</p>}
        </div>
    )
}
