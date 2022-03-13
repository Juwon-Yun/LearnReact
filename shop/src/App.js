import './App.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data.js'
import { Link, Route, Switch} from 'react-router-dom'
import Detail from './Detail.js'


function App() {

  let [shose, setShose] = useState(Data);
  
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
          <div className="column">
            <Shose data={shose}/>
          </div>
        </div>        
      </Route>
      {/* :(콜론) 기호 => URL Parameter */}
      <Route path={"/detail/:id"}>
        <Detail data={shose}/>
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
      const temp = [...props.data]
      return temp.map( (el, i) => 
        <div className="col-md-4" key={i}>
          <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} alt="" width="100%" />
          <h4> { el.title }</h4>
          <p> {el.content }</p>
        </div>
      )
  }
}

export default App;
