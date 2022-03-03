import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // let posts = '강남 고기 맛집'
  let posts = {color : 'green', fontSize : '30px'}

  function name(params) {
    return 100
  }

  return (
    <div className="App">
      {/* JSX 문법 */}
      <div className='black-nav'>
        {/* inline style => camelCase */}
        {/* <div style={{color : 'green', fontSize : '30px'}}>개발 blog</div> */}
        <div style={ posts }>개발 blog</div>
      </div>
      <img src={ logo } />
      {/* <h4>{ posts }</h4> */}
      <h4>{ name() }</h4>
    </div>
  );
}

export default App;
