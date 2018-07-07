import { FETCH_ENTITIES, DELETE_ENTITY, FETCH_ENTITY } from '../actions/types';
const initialState = {
    previous: true,
    later: true
};
let _state;

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ENTITIES:
            _state = Object.assign([], state);
            //_state[action.use] = !state[action.use];
            return action.payload;

        case DELETE_ENTITY:
            _state = Object.assign([], state);
            //_state[action.use] = !state[action.use];
            return action.payload;

        case FETCH_ENTITY:
            _state = Object.assign({}, state);
           // _state[action.use] = !state[action.use];
            return action.payload;

        default:
            return state;
    }
}