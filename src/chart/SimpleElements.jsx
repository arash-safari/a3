import React from 'react'
const color = {
    blue: '#2196F3'
}

export const SimpleRect = function (props) {
    return (
        <g transform={props.transform}>
            <rect width={props.width}
                height={props.height}
                x={props.x}
                y={props.y}
                className='simple-rect'
                onMouseEnter={props.onMouseEnter}>
                onMouseEnter={props.onMouseEnter}>
                onClick={props.onClick}
            </rect>
        </g>
    )
}
