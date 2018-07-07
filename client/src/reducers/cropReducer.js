import { FETCH_CROPS, FETCH_CROP, DELETE_CROP } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_CROPS:
            Object.assign([], state);
            return action.payload;

        case FETCH_CROP:
            Object.assign({}, state);
            return action.payload;

        case DELETE_CROP:
            Object.assign([], state);
            return action.payload;

        default:
            return state;
    }
}