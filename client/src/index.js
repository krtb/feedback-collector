import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // start setup of redux
import { createStore, applyMiddleware } from 'redux'; // then pass store to provider to connect react & redux 

import App from './components/App'

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);