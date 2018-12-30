import {axisTop} from 'd3'
import {axisTop,axisBottom,axisRight,axisLeft} from 'd3'

export const TAxis = function(props) {
  const axis = axisTop(props.scale).tickSize(props.tickSize).tickFormat(props.tickFormat);
  return ({axis});
}
// export const TSimpleAxis = function(props) {
//   const axis = axisTop(props.scale).tickSize(props.tickSize).tickFormat(props.tickFormat);
//   return ({axis});
// }

export const BAxis = function(props) {
  const axis = axisBottom(props.scale).tickSize(props.tickSize).tickFormat(props.tickFormat);
  return ({axis});
}
export const RAxis = function(props) {
  const axis = axisRight(props.scale).tickSize(props.tickSize).tickFormat(props.tickFormat);
  return ({axis});
}
export const LAxis = function(props) {
  const axis = axisLeft(props.scale).tickSize(props.tickSize).tickFormat(props.tickFormat);
  return ({axis});
}
