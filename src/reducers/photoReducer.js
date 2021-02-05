import * as actionTypes from '../actions/actionTypes';

const initialState = {
    photos: [],
    loading: true,
    error: null
};

const photoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PHOTO_REQUEST_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PHOTO_REQUEST_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                loading: false
            };
        case actionTypes.PHOTO_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };        
        default: 
            return state;
    };
};

export default photoReducer;