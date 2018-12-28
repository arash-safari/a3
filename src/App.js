import React, { Component } from 'react';
import './App.css';
import * as a3 from './chart'

class App extends Component {
  render() {
    const axis = a3.axis;
    return (
      <div className="App">      
        <div id="axis" style={{width:400,height:400,background:"#F5F5F5"}}>

        </div>
        
      </div>
    );
  }
}
export default App;
