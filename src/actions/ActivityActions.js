import {FIELD_UPDATE, START_REQUEST, END_REQUEST} from '../constants/types';
import { loadavg } from 'os';

//update a form field
export const handleChange = ({ prop, value }) => {
    return {
        type: FIELD_UPDATE,
        payload: { prop, value }
    };
}

//start Api request
export const startRequest = (loading) => {
    return {
        type: START_REQUEST,
        payload: loading
    };
}

//start Api request
export const endRequest = (loading) => {
    return {
        type: END_REQUEST,
        payload: loading
    };
}