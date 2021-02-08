import * as actionTypes from '../actions/actionTypes';

const initialState = {
    albums: [],
    loading: true,
    error: null
};

const albumReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ALBUM_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.ALBUM_SUCCESS:
            return {
                ...state,
                albums: action.payload,
                loading: false
            };
        case actionTypes.ALBUM_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };        
        default: 
            return state;
    };
};

export default albumReducer;