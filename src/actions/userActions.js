import axios from 'axios';

import * as actionsTypes from './actionTypes';

export const getUsers = () => async (dispatch) => {
    dispatch({
        type: actionsTypes.USER_REQUEST
    })

    try {
        const { data } = await axios.get('/users');

        dispatch({
            type: actionsTypes.USER_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionsTypes.USER_FAIL,
            payload: error.response.data ? error.response.data : error.message
        })
    };
};