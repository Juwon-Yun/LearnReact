import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

// HashRouter( /#/이 추가됨 쿼리스트링이 안넘어감 ) vs BrowserRouter 

import { combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux'
import tableData from './tableData.js'
import data from './data';

// redux에선 state 데이터의 수정방법을 미리 정의한다. default parameter
// action : payload, type 데이터를 가지고있다. Object type
const reducer = (state = tableData, action) => {
  // increase라는 데이터 수정 밥법을 정의한 것
  const copy = [...state]
  if (action.type === 'addContent') { 
    
    let found = state.findIndex(( data ) => +data.id === action.payload.id)
    // 없으면 -1 리턴
    if (found >= 0) {
      copy[found].quan++
      return copy
    } else { 
      copy.push(action.payload)
      return copy
    }
  } else if (action.type === 'increase') {
    copy[action.payload.id].quan++
    return copy
  } else if (action.type === 'decrease') { 
    // if (copy[0].quan <= 0) return
    copy[action.payload.id].quan--
    return copy
  } else { 
    return state
  }

}

// Cart.js에서만 사용하는 데이터이기 때문에 공통 데이터로 쓸 필요가 없다.
// 즉 이런것은 useState로 사용해야함
const reducer2 = (state = true, action) => { 
  if (action.type === 'close') {
    let copy = state = false
    return copy
  } else { 
    return state
  }
}

// let store = createStore(reducer)
let store = createStore(combineReducers({reducer, reducer2}))

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
