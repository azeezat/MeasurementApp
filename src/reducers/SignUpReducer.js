import { CREATE_USER_SUCCESS,CREATE_USER_FAIL, FIELD_UPDATE} from '../constants/types';

const INITIAL_STATE = {  fullName: '',email: '', password: '', confirmPassword: '', error: ''}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_USER_SUCCESS:
            return { INITIAL_STATE, user: action.payload }
        case CREATE_USER_FAIL:
            return { ...state, password: '', error: action.payload.message }
        case FIELD_UPDATE:
            //action.payload==={prop:'email', value 'email@email.com}
            return { ...state, [action.payload.prop]: action.payload.value, error: '' }
        default:
            return state
    }
}