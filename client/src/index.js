import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // start setup of redux
import { createStore, applyMiddleware } from 'redux'; // then pass store to provider to connect react & redux 

import App from './components/App'

const store = createStore(()=> [], {}) // next create a new instance of redux STORE. first arg of createStore is all reducers

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);