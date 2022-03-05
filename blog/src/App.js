/* never used 같은 거안뜸 vue에서 쓰는것처럼 eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {

  // es6 destructuring 문법
  // react 내장 함수 useState [p1, p2]
  let [title, setTitle] = useState({
    a : '남자 코트 추천',
    b : '여자 코트 추천',
    c : '남녀 공용 추천'
  })
  
  let [likeNum, increaseNum] = useState(0)

  // date 객체는 왜안될까 
  let date = new Date()


  let posts = '강남 고기 맛집'
  // let posts = {color : 'green', fontSize : '30px'}

  function name(params) {
    return 100
  }


  return (
    <div className="App">
      {/* JSX 문법 */}
      <div className='black-nav'>
        {/* inline style => camelCase */}
        {/* <div style={{color : 'green', fontSize : '30px'}}>개발 blog</div> */}
        <div>개발 blog</div>
      </div>
      <div className='list'> 
        <h3> {title.a} <span style={ {cursor : 'pointer'}} onClick={() => { increaseNum(likeNum += 1) }}>👍</span> {likeNum} </h3>
        <p>3월 4일 발행</p>
        <hr/>
      </div>
      <div className='list'> 
        <h3> {title.b} </h3>
        <p>3월 4일 발행</p>
        <hr/>
      </div>
      <div className='list'> 
        <h3> {title.c} </h3>
        <p>3월 4일 발행</p>
        <hr/>
      </div>
      <div className='list'> 
        <h3> {posts} </h3>
        <p>3월 4일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
