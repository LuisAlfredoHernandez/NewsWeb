import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
import reportWebVitals from './reportWebVitals';


const store = createStore(combineReducers({
  ...reducers, 
  form: formReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
