import axios from 'axios';

import * as actionsTypes from './actionTypes';

export const getUsers = () => async (dispatch) => {
    dispatch({
        type: actionsTypes.USER_REQUEST_START
    })

    try {
        const { data } = await axios.get('/users');

        dispatch({
            type: actionsTypes.USER_REQUEST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionsTypes.USER_REQUEST_FAIL,
            payload: error.response.data
        })
    };
};