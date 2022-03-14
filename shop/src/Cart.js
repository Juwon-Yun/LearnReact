import React from 'react'
import {Table} from 'react-bootstrap'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

function Cart(props){
    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>1</td>
                        <td>{ props.state[0].name }</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr> */}
                    {
                        props.state.map((el, i) => { 
                            return (
                                <tr key={i}>
                                    <td>{ el.id }</td>
                                    <td>{ el.name }</td>
                                    <td>{ el.quan }</td>
                                    <td>
                                        <Button variant="info" onClick={() => { props.dispatch({type : 'increase'}) }}>+</Button>
                                        <Button variant="danger" onClick={() => { props.dispatch({ type : 'decrease'}) }}>-</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

// store에 있는 데이터를 전부 가져와서 Props처럼 만들어주는 redux 구문
function getStore(state) {
    return {
        // content : state[0].name
        state : state
    }
}

// redux 사용법
export default connect(getStore)(Cart)

// export default Cart