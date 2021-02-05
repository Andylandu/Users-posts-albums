import axios from 'axios';

import * as actionsTypes from './actionTypes';

export const getAlbums = () => async (dispatch) => {
    dispatch({
        type: actionsTypes.ALBUM_REQUEST_START
    })

    try {
        const { data } = await axios.get('/albums');

        dispatch({
            type: actionsTypes.ALBUM_REQUEST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionsTypes.ALBUM_REQUEST_FAIL,
            payload: error.response.data
        })
    };
};