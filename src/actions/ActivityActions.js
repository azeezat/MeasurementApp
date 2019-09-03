import {FIELD_UPDATE, START_REQUEST, END_REQUEST, ONLINE, OFFLINE} from '../constants/types';

//update a form field
export const handleChange = ({ prop, value }) => {
    return {
        type: FIELD_UPDATE,
        payload: { prop, value }
    };
}

//start Api request
export const startRequest = () => {
    return {
        type: START_REQUEST,
    };
}

//start Api request
export const endRequest = () => {
    return {
        type: END_REQUEST,
    };
}

//online
export const onOnline= () => {
    return (dispatch) => {
        window.addEventListener('online', function() {
            dispatch({
                type: ONLINE
            });
        });
    };
}

//oFFline
onoffline= () => {
    return (dispatch) => {
        window.addEventListener('offline', function() {
            dispatch({
                type: OFFLINE
            });
        });
    };
}