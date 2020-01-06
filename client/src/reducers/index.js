import { combineReducers } from 'redux';
import authReducer from './authReducer';

// whatever keys are passed to this object,
// will represent keys inside of state object
export default combineReducers({
    auth: authReducer
});