import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
    loading: true,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case actionTypes.USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };        
        default: 
            return state;
    };
};

export default userReducer;