import { LOGIN_USER_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL, FIELD_UPDATE } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '' }

export default (state=INITIAL_STATE, action)=>{
switch (action.type) {
    case LOGIN_USER:
        return {...state, INITIAL_STATE}
    case LOGIN_USER_SUCCESS:
        return {...state, INITIAL_STATE, user: action.payload}
    case LOGIN_USER_FAIL:
        return {...state, password:'', error:'Authentication Failed'}
        case FIELD_UPDATE:
        //action.payload==={prop:'email', value 'email@email.com}
        return { ...state, [action.payload.prop]: action.payload.value }
        default:
        return state
}
}