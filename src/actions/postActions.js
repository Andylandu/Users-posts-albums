import axios from 'axios';

import * as actionsTypes from './actionTypes';

export const getPosts = () => async (dispatch) => {
    dispatch({
        type: actionsTypes.POST_REQUEST
    })

    try {
        const { data } = await axios.get('/posts');
        
        dispatch({
            type: actionsTypes.POST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionsTypes.POST_FAIL,
            payload: error.response.data ? error.response.data : error.message
        })
    };
};

export const addPost = (postData) => async (dispatch) => {
    dispatch({
        type: actionsTypes.ADD_POST_REQUEST
    });

    try {
        const { data } = await axios.post('/posts', postData);

        dispatch({
            type: actionsTypes.ADD_POST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionsTypes.ADD_POST_FAIL,
            payload: error.response.data ? error.response.data : error.message
        });
    };
};