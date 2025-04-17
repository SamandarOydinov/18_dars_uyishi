import * as React from "react"
import { colors } from "../../styles/theme"

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ?? 20}
        height={props.height ?? 20}
        fill="none"
        {...props}
    >
        <path stroke={props.color || colors.main} d="m1 1 9 9m9 9-9-9m0 0-9 9L19 1" />
    </svg>
)
export default SvgComponent
