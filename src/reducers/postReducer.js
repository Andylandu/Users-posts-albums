import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    loading: true,
    error: null
};

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.POST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.POST_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case actionTypes.POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }; 
        case actionTypes.ADD_POST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.ADD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: [...state.posts, action.payload]
           }  ;
        case actionTypes.ADD_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };   
        default: 
            return state;
    };
};

export default postReducer;