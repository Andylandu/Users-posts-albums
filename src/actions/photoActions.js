import axios from 'axios';

import * as actionsTypes from './actionTypes';

export const getAllPhotos = () => async (dispatch) => {
    dispatch({
        type: actionsTypes.PHOTOS_REQUEST
    });

    try {
        const { data } = await axios.get('/photos');

        dispatch({
            type: actionsTypes.PHOTOS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionsTypes.PHOTOS_FAIL,
            payload: error.response.data ? error.response.data : error.message
        });
    };
};