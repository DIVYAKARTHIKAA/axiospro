/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from './functions';

class App extends Component {

render() {

        return (
   
      <div
        <button
aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
+
        </button>
        <span className={styles.value}>{count}</span>
        <button
aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
     
  )
}
};*/

export default App;
