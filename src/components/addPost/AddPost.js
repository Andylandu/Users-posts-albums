import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './AddPost.module.css';

// Load action creator
import { addPost } from '../../actions/postActions';

const AddPostScreen = (props) => {
    const [state, setState] = useState({
        author: '',
        title: '',
        body: ''
    });

    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        props.show();

        const postData = {
            author: state.author,
            title: state.title,
            body: state.body
        };

        dispatch(addPost(postData));
    };

    return (
        <div className={classes.jumbotron}>
            <form onSubmit={onSubmitHandler}>
                <div className={classes.row}>
                    <label htmlFor="author">Автор:</label>
                    <input 
                        type="text"
                        id="author" 
                        value={state.author} 
                        name="author" 
                        onChange={onChangeHandler} 
                        placeholder=" Автор" 
                        required
                    />
                </div>
                <div className={classes.row}>
                    <label htmlFor="title">Заглавие:</label>
                    <input 
                        type="text" 
                        id="title"
                        value={state.title} 
                        name="title" 
                        onChange={onChangeHandler} 
                        placeholder=" Заглавие" 
                        required
                    />
                </div>
                <div className={classes.row}>
                    <label htmlFor="body">Тело:</label>
                    <textarea 
                        type="text" 
                        id="body"
                        value={state.body} 
                        name="body" 
                        onChange={onChangeHandler} 
                        placeholder=" Тело" 
                        required
                        rows="7"
                        cols="20"
                    />
                </div>
                <button>Добавить</button>
            </form>
        </div>
    );
};

export default AddPostScreen;
