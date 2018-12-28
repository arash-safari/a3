import * as d3 from 'd3'

export const top = 1,
    right = 2,
    bottom = 3,
    left = 4,


const defaultFomrat = {
    tickValues = null,
    tickFormat = null,
    tickSizeInner = 6,
    tickSizeOuter = 6,
    tickPadding = 3,
}

function axis(scale, direction) {
    let maxis;
    switch (direction) {
        case top:
            maxis = d3.axisTop(scale);
            break;
        case right:
            maxis = d3.axisRight(scale);
            break;
        case left:
            maxis = d3.axisLeft(scale);
            break;
        case bottom:
            maxis = d3.axisBottom(scale);
            break;
        default:
            maxis = d3.axisBottom(scale);
            break;
    }
    applyFormat()
    return maxis;
}
export const axis;