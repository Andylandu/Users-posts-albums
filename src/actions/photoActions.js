import axios from 'axios';

import * as actionsTypes from './actionTypes';

export const getPhotos = (albumId) => async (dispatch) => {
    dispatch({
        type: actionsTypes.PHOTO_REQUEST_START
    });

    try {
        const { data } = await axios.get(`/photos?albumId=${albumId}`);

        dispatch({
            type: actionsTypes.PHOTO_REQUEST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionsTypes.PHOTO_REQUEST_FAIL,
            payload: error.response.data
        });
    };
};