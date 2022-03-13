import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useHistory, useParams} from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
import './Detail.scss'

// styled-components의 사용법
let Box = styled.div`
  padding : 20px;
  background-color : gray;
  `

let Title = styled.h4`
  font-size : 25px;
  color : ${props => props.color};
  `

// Class Life Cycle Hook 
// class semple extends React.Component { 
//   componentDidMount() { }
//   componentWillUnmount() { }
// }

function Detail(props) {

  // useHistory hook 변수 선언
  let history = useHistory()

  // useParams hook 변수 선언
  let { id } = useParams()

  // find() method => 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다. 없으면 undefined 반환
  let findContent = props.data.find(content => content.id === +id)

  let [alertFlag, setAlertFlag] = useState(true)

  // useEffect hook은 적은 순서대로 사용
  // useEffect hook 3 여러가지 useEffect를 사용할 때 여러개 쓰면됨
  // useEffect hook 1, 컴포넌트가 렌더링될 때, mount
  useEffect(() => { 
    // setTimeout(() => {
    //   setAlertFlag(false)
    // }, 2000);
    // // input데이터가 바뀔때마다 계속나옴
    // console.log('updating')
  })

  // useEffect hook 2, 컴포넌트가 사라질 때, unmount
  useEffect(() => { 

    // Detail 컴포넌트 렌더링시
    axios.get()

    return function name(params) {
      
    }
    // 한번만
  }, [])

  // useEffect hook 4, useEffect가 실행 될 조건 ex) alerFlag의 state가 바뀔때만!
  // 조건이 빈간이면 [] => 해당 컴포넌트 ( 지금은 Detail )가 Update할 때도 실행안됨
  // 즉 페이지 로딩때 한번만 일어남
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlertFlag(false)
    }, 2000);
    console.log('updating')

    // settimeout 제거
    return () => { 
      clearTimeout(timer)
    }
   }, [alertFlag])

  let [input, setInput] = useState('')
  let [stock, setStock2] = useState(props.stock)

  return (
    <div className="container">
      <Box>
        {/* props로 색상입히기 중괄호 생략 가능함 */}
        {/* <Title color={ 'white' }> Detail </Title> */}
        {/* <Title color='white'> Detail </Title> */}
        <Title className='red'> Detail </Title>
      </Box>
      {/* 
        <div style={{'display' : alertFlage ? 'block': 'none'}} className="my-alert">
          <p>재고가 얼마남지 않았습니다.</p>
        </div> 
      */}
      
      { /* 좋은 관습적 답 */
        alertFlag ? 
          (<div className="my-alert">
            <p>재고가 얼마남지 않았습니다.</p>
          </div>)
        : null
      }
      {/* input data가 바뀌면 detail이 계속 재렌더링, 즉 계속 update된다. */}
      <input onChange={(e) => { setInput(e.target.value )}}/>
      <div>
        {input}
      </div>
      <div className="row">
      <div className="col-md-6">
        <img src={`https://codingapple1.github.io/shop/shoes${findContent.id+1}.jpg`} width="100%" alt=''/>
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{findContent.title}</h4>
        <p>{findContent.content}</p>
        <p>{findContent.price}</p>

          <Stock stock={props.stock}></Stock>
          <button className="btn btn-danger" onClick={() => { props.setStock( stock[0] - 1) }}>주문하기</button> 
        <button className="btn btn-danger" onClick={ () => history.goBack()  }>뒤로가기</button> 
        {/* 특정 경로로 이동시키기 => history.push('/경로명') */}
      </div>
      
      </div>
    </div>
  )
  function Stock(props) { 
    return (
      <p>재고 : {props.stock[0]}</p>
    )
  }
}

export default Detail