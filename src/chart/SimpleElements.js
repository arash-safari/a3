const color = {
    blue: '#2196F3'
}

export const SimpleRect = function (props) {
    return <rect width={props.width}
        height={props.height}
        className='simple-rect'
        onMouseEnter={props.onMouseEnter}>
        onMouseEnter={props.onMouseEnter}>
        onClick={props.onClick}
    </rect>
}
