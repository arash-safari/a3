import * as d3 from "d3";

class Chart{
    
    render(){
        return (<svg width='100%' height='100%'>
        {React.Children.map(this.props.children, (element, idx) => {
            return React.cloneElement(element, { ref: idx });
          })}
        </svg>)
    }
}

export default Chart;