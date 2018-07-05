import { FETCH_ENTITIES, DELETE_ENTITY, FETCH_ENTITY } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_ENTITIES:
            return action.payload;

        case DELETE_ENTITY:
            return action.payload;

        case FETCH_ENTITY:
            return action.payload;

        default:
            return state;
    }
}