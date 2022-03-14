import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

// HashRouter( /#/이 추가됨 쿼리스트링이 안넘어감 ) vs BrowserRouter 

import { createStore } from 'redux';
import {Provider} from 'react-redux'
import tableData from './tableData.js'


// redux에선 state 데이터의 수정방법을 미리 정의한다. default parameter
const reducer = (state = tableData, action) => {
  // increase라는 데이터 수정 밥법을 정의한 것
  if (action.type === 'increase') {
    const copy = [...state]
    copy[0].quan++
    return copy
  } else if (action.type === 'decrease') { 
    const copy = [...state]
    // if (copy[0].quan <= 0) return
    copy[0].quan--
    return copy
  } else { 
    return state
  }

}

let store = createStore(reducer)


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* 사용을 원하는 컴포넌트에 해당 store를 감싸서 사용한다.  */}
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
