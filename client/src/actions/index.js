import axios from 'axios';
import { FETCH_USER, FETCH_ENTITIES, FETCH_ENTITY, DELETE_ENTITY, FETCH_CROPS, DELETE_CROP } from './types';

/**** Start User Actions ****/
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data});
}; 
/**** Start User Actions ****/


/**** Start Entity Actions ****/
export const submitEntity = (values, history, entityId) => async dispatch => {
    let url = null;
    let res;

    if (entityId) {
        url = `/api/entity/${entityId}`;
        res = await axios.put(url, values);
    } else {
        url = '/api/entity';
        res = await axios.post(url, values);
    }     

    history.push('/agriculture-entity');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchEntities = () => async dispatch => {
    const res = await axios.get('/api/entity');

    dispatch({ type: FETCH_ENTITIES, payload: res.data });
};

export const fetchEntity = (id) => async dispatch => {
    const res = await axios.get(`/api/entity/${id}`);

    dispatch({ type: FETCH_ENTITY, payload: res.data });
};

export const deleteEntity = (id, history) => async dispatch => {
    const res = await axios.delete(`/api/entity/${id}`);

    dispatch({ type: DELETE_ENTITY, payload: res.data });
};
/**** End Entity Actions ****/


/**** Start Crop Actions ****/
export const fetchCrops = () => async dispatch => {
    const res = await axios.get('/api/crop');

    dispatch({ type: FETCH_CROPS, payload: res.data });
};

export const submitCrop = (values, history) => async dispatch => {
    const res = await axios.post('/api/crop', values);

    history.push('/agriculture-crops');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteCrop = (id) => async dispatch => {
    const res = await axios.delete(`/api/crop/${id}`);

    dispatch({ type: DELETE_CROP, payload: res.data });
};
/**** End Crop Actions ****/