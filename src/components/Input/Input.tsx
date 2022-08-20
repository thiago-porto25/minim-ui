import styled, { css } from "styled-components"
import { InputProps } from "."
import {
	parseColorHelper,
	shapedByParentHelper,
	simpleTransitionHelper,
} from "../../helpers"

export const Input = styled.input<InputProps>`
	${({
		theme,
		error,
		shapedByParent = true,
		radius = "sm",
		w = "auto",
		h = "sm",
		py = "nn",
		px = "xxxs",
		bgColor = "white",
		borderColor = "gray30",
		hoverBgColor = "white",
		hoverBorderColor = "gray40",
		focusBgColor = "gray10",
		focusBorderColor = "blue50",
		errorBorderColor = "red",
		disabledBgColor = "white",
		disabledBorderColor = "gray30",
	}) => css`
		width: ${theme.base.spacing[w]};
		height: ${theme.base.spacing[h]};
		padding: ${theme.base.spacing[py]} ${theme.base.spacing[px]};
		border-radius: ${theme.base.borderRadius[radius]};
		background-color: ${parseColorHelper(bgColor)};
		border: 1px solid ${parseColorHelper(borderColor)};
		outline: none;
		${theme.textStyles.text}

		&::placeholder {
			${theme.textStyles.placeholder}
		}

		&:hover {
			background-color: ${parseColorHelper(hoverBgColor)};
			border-color: ${parseColorHelper(hoverBorderColor)};
		}

		&:focus {
			background-color: ${parseColorHelper(focusBgColor)};
			border-color: ${parseColorHelper(focusBorderColor)};
		}

		&:disabled {
			background-color: ${parseColorHelper(disabledBgColor)};
			border-color: ${parseColorHelper(disabledBorderColor)};
			opacity: 0.8;
		}

		${error &&
		css`
			border-color: ${parseColorHelper(errorBorderColor)};
		`}

		${simpleTransitionHelper("background-color", "border")}
		${shapedByParentHelper(shapedByParent)};
	`}
`
