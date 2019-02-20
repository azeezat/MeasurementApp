import firebase from 'firebase';
import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,
LOGIN_USER } from './types';
import {Actions} from 'react-native-router-flux';

//with redux thunk, an action creator now returns a function
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({type:LOGIN_USER})
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user)
            })
            .catch((error)=>{
                console.log(error)
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user=>{
                    loginUserSuccess(dispatch, user)
                })
                .catch((error)=>{
                    loginUserFail(dispatch, error)
                })
            })
    }
}

const loginUserSuccess=(dispatch, user)=>{
    dispatch ({
        type: LOGIN_USER_SUCCESS, 
        payload:user 
    })
    //Navigate to the employee List Page
    Actions.main()
}

const loginUserFail=(dispatch, error)=>{
    dispatch ({
        type: LOGIN_USER_FAIL, 
        payload: error
    })
}