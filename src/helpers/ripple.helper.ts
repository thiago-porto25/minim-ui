import { css, FlattenSimpleInterpolation } from "styled-components"
import { Colors } from "../types/colors.interface"

export const rippleHelper = (
	hoverBgColor: Colors,
	activeBgColor: Colors
): FlattenSimpleInterpolation => css`
	background-position: center;
	transition: background 0.8s;

	&:hover {
		background: ${hoverBgColor}
			radial-gradient(circle, transparent 1%, ${hoverBgColor} 1%) center/15000%;
	}
	&:active {
		background-color: ${activeBgColor};
		background-size: 100%;
		transition: background 0s;
	}
`
