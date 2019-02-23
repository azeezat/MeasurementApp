import firebase from 'firebase';
import { CREATE_USER_SUCCESS, CREATE_USER_FAIL, START_REQUEST, END_REQUEST } from '../constants/types';
import {Actions} from 'react-native-router-flux';

//Create new user
export const createUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({type:START_REQUEST})
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user => {
                userCreateSuccess(dispatch, user)
                dispatch({type:END_REQUEST})
            })
            .catch((error)=>{
                console.log(error)
                createUserFail(dispatch, error)
                dispatch({type:END_REQUEST})
            })
    }
}

const userCreateSuccess=(dispatch, user)=>{
    dispatch ({
        type: CREATE_USER_SUCCESS, 
        payload:user 
    })
    //Navigate to the home page
    Actions.login()
}

const createUserFail=(dispatch, error)=>{
    dispatch ({
        type: CREATE_USER_FAIL, 
        payload: error
    })
}