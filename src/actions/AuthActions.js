import firebase from 'firebase';
import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,
START_REQUEST, END_REQUEST } from '../constants/types';
import{Actions}from 'react-native-router-flux'
import {NavigationActions } from 'react-navigation';

//with redux thunk, an action creator now returns a function
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({type:START_REQUEST})
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user)
                dispatch({type:END_REQUEST})
            })
            .catch((error)=>{
                console.log(error)
                loginUserFail(dispatch, error)
                dispatch({type:END_REQUEST})
            })
    }
}

const loginUserSuccess=(dispatch, user)=>{
    dispatch ({
        type: LOGIN_USER_SUCCESS, 
        payload:user
    })
    //Navigate to another page
    Actions.main()
}

const loginUserFail=(dispatch, error)=>{
    dispatch ({
        type: LOGIN_USER_FAIL, 
        payload: error
    })
    Actions.main()
    // NavigationActions.navigate({ routeName:'Main'})
}