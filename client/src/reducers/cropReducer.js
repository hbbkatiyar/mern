import { FETCH_CROPS, DELETE_CROP } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CROPS:
            return action.payload;

        case DELETE_CROP:
            return action.payload;

        default:
            return state;
    }
}