import React, { Component } from 'react'
import * as d3 from "d3";

class Chart extends Component {

    render() {

        // const svg = d3.select(this.props.root).append('svg');
        // svg.append('g').attr('transorm', this.props.transform)
        // console.log(d3.select(this.props.root))

        return (
            <div style={{padding:this.props.margin,width:'100%',height:'100%'}}>
            <svg id="arash-chart" width={`calc(100% - ${(this.props.margin?2*this.props.margin:0)+'px'})`} 
            height={`calc(100% -  ${(this.props.margin?2*this.props.margin:0)+'px'})`}>
                {React.Children.map(this.props.children, (element, idx) => {
                    return React.cloneElement(element, { ref: idx });
                })}
            </svg>
            </div>
        )
    }
}

export default Chart;