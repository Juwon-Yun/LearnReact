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
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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

      <Route exact path={"/"}>
        <div className="container">
          <div className="column">
            <Shose data={shose}/>
          </div>
        </div>        
      </Route>

      <Route path={"/detail"}>
        <Detail/>
      </Route>
      {/* <Route path={"/ww"} component={Navbar}></Route>     */}

      

    </div>


  );

  function Shose(props) {
      const temp = [...props.data]
      return temp.map( (el, i) => 
        <div className="col-md-4">
          <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} alt="" width="100%" />
          <h4> { el.title }</h4>
          <p> {el.content }</p>
        </div>
      )
  }
}

export default App;
