import React,{Component} from 'react'
import {axisBottom,axisLeft,select} from 'd3'
import * as d3 from 'd3'

// export const TSimpleAxis = function(props) {
//   const axis = axisTop(props.scale).tickSize(props.tickSize).tickFormat(props.tickFormat);
//   return ({axis});
// }

export class BAxis extends Component {
  state={
    id:"",
  }
  constructor(props){
    super(props);
    this.id = 'b'+Math.floor((Math.random() * 1000) + 1);
  }
  componentDidMount(porps){
    d3.select('#'+this.id)
    .attr('transform', `translate(${this.props.x?this.props.x:0}, ${this.props.y?this.props.y:0})`)
    .call(axisBottom(this.props.scale))
  }
  render(){
    return <g id={this.id} ></g>;
  }
}
export class LAxis extends Component {
  state={
    id:"",
  }
  constructor(props){
    super(props);
    this.id = 'b'+Math.floor((Math.random() * 1000) + 1);
  }
  componentDidMount(porps){
    d3.select('#'+this.id)
    .attr('transform', `translate(${this.props.x?this.props.x:0}, ${this.props.y?this.props.y:0})`)
    .call(axisLeft(this.props.scale))
  }
  render(){
    return <g id={this.id} ></g>;
  }
}
