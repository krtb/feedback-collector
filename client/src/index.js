// doesn't matter where you import CSS min file
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // start setup of redux. Provider makes store accessible to every component in the app
import { createStore, applyMiddleware } from 'redux'; // then pass store to provider to connect react & redux 

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware()) // next create a new instance of redux STORE. first arg of createStore is all reducers

// fourth step, to wrap app in provider, add store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);