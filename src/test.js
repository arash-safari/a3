import React from 'react'
import Chart from './chart/Chart';
import { BAxis, LAxis } from './chart/Axis';
import { SimpleRect } from './chart/SimpleElements';
import * as d3 from 'd3'
export default function Test() {
    const margin = 50;
    const originWidth = 1000;
    const originHeight = 600;
    const padding =30;
    const width = originWidth - 2 * margin - 2*padding;
    const height = originHeight - 2 * margin - 2*padding;
    const data = [{ value: 1, key: 1 }, { value: 2, key: 2 }];
    const xScale = d3.scaleBand()
        .range([0, width])
        .domain(data.map((s) => s.key))
        .padding(0.4)

    const yScale = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data.map(d => d.value))]);

    return (
        <div style={{ width: originWidth, height: originHeight, background: "#BDBDBD" }}>
            <Chart margin={margin}>
                <BAxis scale={xScale} x={padding} y={height+padding} />
                <LAxis scale={yScale} x={padding} y={padding}/>  
            </Chart>
        </div>
    )
}
