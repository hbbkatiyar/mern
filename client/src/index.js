// webpack assumes .js extension if not mentioned
// If we do not specify any relative path then web pack assumes that you are trying to import a node module
// Here materializeCSS will not hold any thing so we can remove this
//import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'; //reduxThunk gives us the direct access to dispatch function 

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
// () => [] is dummy reducer

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.querySelector('#root')
);

//console.log('stripe key is ', process.env.REACT_APP_STRIPE_KEY);
//console.log('Environment is ', process.env.NODE_ENV);
