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
  
  let [title2, setTitle2] = useState(['남자 코트 추천', '여자 코트 추천', '남녀 공용 추천'])

  let [title3, setTitle3] = useState([['남자 코트 추천', 0], ['여자 코트 추천', 0], ['남녀 공용 추천', 0]])

  let [likeNum, increaseNum] = useState(0)

  let [modalToggle, setModalToggle] = useState(false)

  let [selectedNum, setSelectedNum] = useState(0)

  let [inputValue, setInputValue] = useState('')

  let posts = '강남 고기 맛집'
  // let posts = {color : 'green', fontSize : '30px'}

  function name(params) {
    return 100
  }
  
  function setTitleBtn() {
    // setTitle( title.a = '여자 코트 추천')
    // if (typeof title === 'object') {
    // title.a = '여자 코트 추천'
    title2[0] = '여자 코트 추천 2'
    let newTitle = { ...title }
    
    newTitle.a = '여자 코트 추천'

    setTitle({ ...title, ...newTitle })

    // setTitle2([...title2, ...title2[0]])
    const duple = [[]];
    duple[0].push(title2)
    console.log(duple)
    console.log(title2)
    console.log(...[duple])
      
      // next.js로 터미널에서 값 확인가능함
      // console.log(typeof title2)
    // }
  }

  function setTitleLikeNum(params) {
    console.log(params)
  }

  function iterUI() {

    let arr = [];

    for (var i = 0; i < title3.length; i++) { 
      arr.push(
        <div className='list' key={i}>
          <h3 style={{ cursor: 'pointer' }}
              onClick={() => { setModalToggle(!modalToggle) }}> {title3[i][0]}
            <span style={{ cursor: 'pointer' }} onClick={() => { setTitleLikeNum() }}>👍 { title3[i][1] }</span> 
          </h3>
            <p>3월 4일 발행</p>
            <hr/>
        </div>
        
      )
    }

    return arr
  }

  function pushToTitle3(params) {
    let temp = title3
    temp.unshift([params, 0])
    setTitle2(...title3,...temp)
  }

  return (
    <div className="App">
      {/* JSX 문법 */}
      <div className='black-nav'>
        {/* inline style => camelCase */}
        {/* <div style={{color : 'green', fontSize : '30px'}}>개발 blog</div> */}
        <div>개발 blog</div>
      </div>
      <button onClick={() => { setTitleBtn() }}>버튼</button>

      {/* v-for의 key 디렉티브처럼 꼭 기재해야함 => for in, for of, for  */}
      {/* {
        title2.map((el, i) => { 
          return <div className='list' key={i}>
            <h3 style={{ cursor: 'pointer' }}
              onClick={() => {  setSelectedNum(i) }}> {el}
              <span style={{ cursor: 'pointer' }} onClick={() => {
                increaseNum (likeNum += 1) }}>👍</span> {likeNum} </h3>
            <p>3월 4일 발행</p>
            <hr/>
          </div>
        })
      } */}

      { iterUI() }
      
      <input onChange={(e) => { setInputValue(e.target.value) }} />
      <br/>
      {inputValue}
      <button onClick={() => { setModalToggle(!modalToggle) }}>열고닫기</button>
      
      <div className='publish'>
        <input onChange={(e) => { setInputValue(e.target.value) }} />
        <button onClick={ () => { pushToTitle3(inputValue)} }>저장</button>
      </div>

      {/* jsx v-if 대신 삼항연산자, props */}
      {
        modalToggle ? <Modal title2={title2} selectedNum={selectedNum}/> : null  
      }
    
    {/* return에 같은 depth의 div는 마크업할 수 없다. */}
    </div>
  );
}

// component 관습 
// 1. 첫글자는 대문자
// 2. return의 가장 바깥은 하나의 마크옵으로 
// 2번이 싫은 경우 fregment 문법 가능 <>, </>

function Modal(props) {
  return (
    
      <div className='modal'>
          <h2>{ props.title2[props.selectedNum] }</h2>
          <p>날짜</p>
          <p>상세내용</p>
      </div>
  ) 
}

export default App;
