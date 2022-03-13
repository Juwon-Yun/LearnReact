import './App.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useState, useContext } from 'react';
import Data from './data.js'
import { Link, Route, Switch} from 'react-router-dom'
import Detail from './Detail.js'
import axios from 'axios'
import React from 'react'

export let StockContext = React.createContext();

function App() {

  let [shose, setShose] = useState(Data);
  let [stock, setStock] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* react router를 이용한 버튼 만들기 */}
              {/* a 태그 안에 a 태그가 있어서 에러 해결을 위해 as 문법을 추가한다 */}
              <Nav.Link as={Link}to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link}to={"/detail"}>Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
      <Route exact path={"/"}>
          <div className="container">
            
            {/* context API로 stock을 해당 감싸진 컴포넌트 안에서 공유한다 */}
            <StockContext.Provider value={stock}>
              <div className="row">
                {
                  shose.map((el, i) => {
                    return <Shose data={shose[i]} i={i} key={i}></Shose>  
                  })
                }
              {/* <Shose data={shose}/> */}
              </div>
            </StockContext.Provider>

          <button className='btn btn-primary' onClick={() => { 
            // 로딩중 UI block
            axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((res) => {
                // 로딩중 UI none
                setShose( [...shose, ...res.data])
              })
              .catch(() => {
                // 로딩중 UI none
                console.log('실패')
              })
              .finally()
            }}>더보기
            </button>
        </div>        
        </Route>
        
      {/* :(콜론) 기호 => URL Parameter */}
      <Route path={"/detail/:id"}>
          <Detail data={shose} stock={stock} setStock={setStock}/>
      </Route>
      {/* <Route path={"/ww"} component={Navbar}></Route>     */}

      {/* react-router는 매칭이되는것을 모두 다 보여주기 때문에 보임 */}
      <Route path={"/:id"}>
        <div>아무거나 적었을 때 이거보여주셈</div>
      </Route>

      {/* Route 중복을 허용하지 않는 문법 => Switch  ex) "/"가 매칭되어 중복되어 Route가 보일 때 */}
    </Switch>
    </div>

  );

  function Shose(props) {

    // props 없이 값 공유하기
    let stock = useContext(StockContext);

    return (
       <div className="col-md-4">
          <img src={`https://codingapple1.github.io/shop/shoes${+props.i + 1}.jpg`} alt="" width="100%" />
          <h4> {props.data.title}</h4>
          <p> {props.data.content}</p>
        </div>
      ) 
  }
}

export default App;
 