import React from 'react'
import {axisTop,axisBottom,axisRight,axisLeft,select} from 'd3'

export const TAxis = function(props) {
  const id='t'+ Math.random();
  select(id).call(axisTop(props.scale)
  .tickSize(props.tickSize)
  .tickFormat(props.tickFormat))
  return (<g id={id} transform={props.transform} ></g>);
}

// export const TSimpleAxis = function(props) {
//   const axis = axisTop(props.scale).tickSize(props.tickSize).tickFormat(props.tickFormat);
//   return ({axis});
// }

export const BAxis = function(props) {
  const id='t'+ Math.random();
  select(id).call(axisBottom(props.scale)
  .tickSize(props.tickSize)
  .tickFormat(props.tickFormat))
  return (<g id={id} transform={props.transform} ></g>);
}
export const RAxis = function(props) {
  const id='t'+ Math.random();
  select(id).call(axisRight(props.scale)
  .tickSize(props.tickSize)
  .tickFormat(props.tickFormat))
  return (<g id={id} transform={props.transform} ></g>);
}
export const LAxis = function(props) {
  const id='t'+ Math.random();
  select(id).call(axisLeft(props.scale)
  .tickSize(props.tickSize)
  .tickFormat(props.tickFormat))
  return (<g id={id} transform={props.transform} ></g>);
}
