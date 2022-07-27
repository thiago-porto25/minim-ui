import { css, FlattenSimpleInterpolation } from "styled-components"

export const removeScrollbarHelper = (): FlattenSimpleInterpolation => css`
	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	/* Hide scrollbar for Chrome, Safari and Opera */
	&::-webkit-scrollbar {
		display: none;
	}
`
