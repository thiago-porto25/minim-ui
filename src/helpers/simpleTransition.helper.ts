import { css, FlattenSimpleInterpolation } from "styled-components"

export const simpleTransitionHelper = (
	property: string
): FlattenSimpleInterpolation => {
	return css`
		transition: ${property} 0.3s ease-in-out;
	`
}
