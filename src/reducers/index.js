import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ActivityReducer from './ActivityReducer';
import SignUpReducer from './SignUpReducer';

export default combineReducers({
    auth : AuthReducer,
    activity: ActivityReducer,
    signUp:SignUpReducer
})