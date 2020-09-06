import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore , compose, applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import promisse from 'redux-promise'

import { BrowserRouter} from 'react-router-dom'

import reducers from './main/reducers'

import AuthOrApp from './main/authOrApp';


const store = applyMiddleware(promisse, thunk)(createStore)(reducers)

ReactDOM.render(
  
  <Provider store={store}>
    <BrowserRouter>
    <AuthOrApp/>
    </BrowserRouter>
  </Provider>
    
  ,
  document.getElementById('root')
);


