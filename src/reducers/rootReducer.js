import { combineReducers } from 'redux';

// Load reducers
import userReducer from './userReducer';
import postReducer from './postReducer';
import albumReducer from './albumReducer';
import photoReducer from './photoReducer';

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    albums: albumReducer,
    photos: photoReducer
});

export default rootReducer;