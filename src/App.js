import React, { Component } from 'react';
import './App.css';
import Test from './Test'

class App extends Component {
  render() {
    return (
      <div className="App">  
        <div id='chart'>
        <Test root="root"/>
        </div>    
      </div>
    );
  }
}
export default App;
