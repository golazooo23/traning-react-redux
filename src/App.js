import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="text">bar</label>
        <input type="text" onClick={() =>{console.log("OK")}} />
      </React.Fragment>
    )
  }
}

export default App;
