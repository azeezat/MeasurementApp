import {START_REQUEST, END_REQUEST } from '../constants/types';

const INITIAL_STATE = { loading: false }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_REQUEST:
            return { ...state, loading: true }
        case END_REQUEST:
            return INITIAL_STATE
       
        default:
            return state
    }
}