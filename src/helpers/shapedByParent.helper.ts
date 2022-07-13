import { css, FlattenSimpleInterpolation } from "styled-components"

export const shapedByParentHelper = (
	condition: boolean
): FlattenSimpleInterpolation | null => {
	return condition
		? css`
				height: 100%;
				width: 100%;
		  `
		: null
}
