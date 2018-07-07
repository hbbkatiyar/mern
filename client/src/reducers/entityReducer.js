import { FETCH_ENTITIES, DELETE_ENTITY, FETCH_ENTITY } from '../actions/types';
const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ENTITIES:
            Object.assign([], state);
            return action.payload;

        case FETCH_ENTITY:
            Object.assign({}, state);
            return action.payload;

        case DELETE_ENTITY:
            Object.assign([], state);
            return action.payload;

        default:
            return state;
    }
}