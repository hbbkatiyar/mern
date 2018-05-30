import axios from 'axios';
import { FETCH_USER } from './types';

// export const fetchUser = () => {
//     const request = axios.get('/api/current_user');    
//     return {
//         type: FETCH_USER,
//         payload: request
//     };
// };

// export const fetchUser = () => {
//     return function(dispatch) {
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({ type: FETCH_USER, payload: res}))
//     }     
// };

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data});
};  


// export const fetchUser = () => async dispatch => 
//     dispatch({ type: FETCH_USER, payload: await axios.get('/api/current_user')});

// Re-factoring: Since this fetchUser function contains only a single statement, so we can remove curly braces & return statement
// Now remove function keywork and introduced arrow function
// Now remove parenthesis of dispatch since there is only a single argument
// Now place async keyword before dispatch
// Now use await keyword & assign this to a constant
// Now remove .then

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data});
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
};