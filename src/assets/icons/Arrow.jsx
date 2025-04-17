import * as React from "react";
import { colors } from "../../styles/theme";
const SVGComponent = (props) => (
  <svg
    width={props.width ?? 15}
    height={props.height ?? 12}
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 6H14M14 6L9 11M14 6L9 1" stroke={props.color || colors.main} />
  </svg>
);
export default SVGComponent;
