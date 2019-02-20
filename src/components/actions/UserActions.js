import {FIELD_UPDATE} from './types';

export const handleChange = ({ prop, value }) => {
    return {
        type: FIELD_UPDATE,
        payload: { prop, value }
    };
}