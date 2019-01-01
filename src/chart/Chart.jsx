import React from 'react'
import * as d3 from "d3";

class Chart{
    
    render(){
        return (<svg width='100%' height='100%'>
        <g transform={this.props.transform}>
        {React.Children.map(this.props.children, (element, idx) => {
            console.log(React.cloneElement(element,{ref:idx}));
            return React.cloneElement(element, { ref: idx });
          })}
          </g>
        </svg>)
    }
}

export default Chart;