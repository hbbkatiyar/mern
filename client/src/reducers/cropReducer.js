import { FETCH_CROPS, FETCH_CROP, DELETE_CROP } from '../actions/types';

const initialState = {
    previous: true,
    later: true
};
let _state;

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CROPS:
            _state = Object.assign([], state);
            return action.payload;

        case FETCH_CROP:
            _state = Object.assign({}, state);
            return action.payload;

        case DELETE_CROP:
            _state = Object.assign([], state);
            return action.payload;

        default:
            return state;
    }
}