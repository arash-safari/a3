import React from 'react'
import Chart from './chart/Chart';
import { BAxis, LAxis } from './chart/Axis';
import { SimpleRect } from './chart/SimpleElements';
import * as d3 from 'd3'
export default function test() {
    const margin = 50;
    const originWidth = 1000;
    const originHeight = 600;
    const width = originWidth - 2 * margin;
    const height = originHeight - 2 * margin;
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
            <Chart transform={`translate(${margin}, ${margin})`}>
                <BAxis scale={xScale} transform={`translate(0, ${height})`} />
                <LAxis scale={yScale} />
                {data.map(d => <SimpleRect
                    x={d.value}
                    y={d.value}
                    width={xScale.bandwidth()}
                    height={height - yScale(d.value)} />)}
            </Chart>
        </div>
    )
}
