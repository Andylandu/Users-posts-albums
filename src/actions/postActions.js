import axios from 'axios';

import * as actionsTypes from './actionTypes';

export const getPosts = () => async (dispatch) => {
    dispatch({
        type: actionsTypes.POST_REQUEST_START
    })

    try {
        const { data } = await axios.get('/posts');
        
        dispatch({
            type: actionsTypes.POST_REQUEST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionsTypes.POST_REQUEST_FAIL,
            payload: error.response.data
        })
    };
};

export const addPost = (postData) => async (dispatch) => {
    dispatch({
        type: actionsTypes.ADD_POST_REQUEST_START
    });

    try {
        const { data } = await axios.post('/posts', postData);

        dispatch({
            type: actionsTypes.ADD_POST_REQUEST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionsTypes.ADD_POST_REQUEST_FAIL,
            payload: error.response.data
        });
    };
};