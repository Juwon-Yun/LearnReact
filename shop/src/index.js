import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

// HashRouter( /#/이 추가됨 쿼리스트링이 안넘어감 ) vs BrowserRouter 

import {Provider} from 'react-redux'
import { createStore } from 'redux';

let store = createStore(() => {
  return [
    {
      id: 0,
      name: '멋진신발',
      quan: 2
    },
    {
      id: 1,
      name: '안멋진신발',
      quan : 1,
    }
  ]
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
