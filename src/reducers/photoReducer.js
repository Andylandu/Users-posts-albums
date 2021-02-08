import * as actionTypes from '../actions/actionTypes';

const initialState = {
    photos: [],
    loading: true,
    error: null
};

const photoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PHOTOS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                loading: false
            };
        case actionTypes.PHOTOS_FAIL:
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