import { LOGIN_USER_SUCCESS,LOGIN_USER_FAIL, FIELD_UPDATE} from '../constants/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return { ...state, INITIAL_STATE, user: action.payload }
        case LOGIN_USER_FAIL:
            return { ...state, password: '', error: action.payload.message }
        case FIELD_UPDATE:
            //action.payload==={prop:'email', value 'email@email.com}
            return { ...state, [action.payload.prop]: action.payload.value, error: '' }
        default:
            return state
    }
}