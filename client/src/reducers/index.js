import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import entityReducer from './entityReducer';
import cropReducer from './cropReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    entities: entityReducer,
    crops: cropReducer
});