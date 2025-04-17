import * as React from "react"
import { colors } from "@/styles/theme"

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ?? 30}
        height={props.height ?? 16}
        fill="none"
        {...props}
    >
        <path stroke={props.color || colors.main} strokeWidth={2} d="M0 1h30M4.5 8H30m-20 7h20" />
    </svg>
)

export default SvgComponent