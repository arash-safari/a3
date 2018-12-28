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
    const mAxis = changeAxis(scale,direction);
    
    

    function changeAxis(scale,direction) {
        switch (mDirection) {
            case top:
                return d3.axisTop(mScale);
            case right:
                return d3.axisRight(mScale);
            case left:
                return  d3.axisLeft(mScale);
            case bottom:
                return d3.axisBottom(mScale);
            default:
                return d3.axisBottom(mScale);
        }    
    };
    return mAxis;
}

export const axis;