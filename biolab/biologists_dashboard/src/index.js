import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

// State Management: React Redux reducers and thunk:
import { Provider } from 'react-redux';
import reducers from './api/state_management/reducers';
//import thunk from 'redux-thunk';
//import { configureStore, compose, applyMiddleware} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit'

// Create the Redux store:
//const store = configureStore({reducer:reducers}, compose(applyMiddleware(thunk)));
const store = configureStore({reducer:reducers});
    
ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    ), 
    document.getElementById('root')
);
