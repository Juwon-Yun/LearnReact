import React from 'react'
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

function Detail(props) {

  // useHistory hook 변수 선언
  let history = useHistory()

  // useParams hook 변수 선언
  let { id } = useParams()

  // find() method => 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다. 없으면 undefined 반환
  let findContent = props.data.find(content => content.id === +id)

  return (
    <div className="container">
      <Box>
        {/* props로 색상입히기 중괄호 생략 가능함 */}
        {/* <Title color={ 'white' }> Detail </Title> */}
        {/* <Title color='white'> Detail </Title> */}
        <Title className='red'> Detail </Title>
      </Box>
      <div className="my-alert">
        <p>재고가 얼마남지 않았습니다.</p>
      </div>
      <div className="row">
      <div className="col-md-6">
        <img src={`https://codingapple1.github.io/shop/shoes${findContent.id+1}.jpg`} width="100%" alt=''/>
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{findContent.title}</h4>
        <p>{findContent.content}</p>
        <p>{findContent.price}</p>
        <button className="btn btn-danger">주문하기</button> 
        <button className="btn btn-danger" onClick={ () => history.goBack()  }>뒤로가기</button> 
        {/* 특정 경로로 이동시키기 => history.push('/경로명') */}
      </div>
      
      </div>
    </div>
  )

}

export default Detail