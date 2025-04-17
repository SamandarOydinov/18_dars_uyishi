import * as React from 'react'

const SvgComponent = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width ?? 25}
            height={props.height ?? 16}
            fill="none"
            {...props}
        >
            <path stroke={props.color || "#fff"} strokeWidth={2} d="M0 1h25M0 8h18M0 15h25" />
        </svg>
    )
}

export default SvgComponent
