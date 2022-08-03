import styled, { css } from "styled-components"
import { ButtonProps } from "."
import {
	parseColorHelper,
	shapedByParentHelper,
	simpleTransitionHelper,
} from "../../helpers"
import { rippleHelper } from "../../helpers"

export const Button = styled.button<ButtonProps>`
	${({
		theme,
		variant = "primary",
		large = false,
		h = large ? "md" : "sm",
		w = "o",
		py = "nn",
		px = "nn",
		radius = "md",
		bgColor = variant === "secondary" ? "gray100" : "blue50",
		hoverBgColor = variant === "secondary" ? "gray80" : "blue40",
		activeBgColor = variant === "secondary" ? "gray70" : "blue30",
		disabledBgColor = variant === "secondary" ? "gray100" : "blue50",
		shapedByParent = false,
		ripple = false,
	}) => css`
		height: ${theme.base.spacing[h]};
		width: ${theme.base.spacing[w]};
		border-radius: ${theme.base.borderRadius[radius]};
		background-color: ${parseColorHelper(bgColor)};
		padding: ${theme.base.spacing[py]} ${theme.base.spacing[px]};
		box-sizing: border-box;
		border: none;
		cursor: pointer;

		&:hover {
			background-color: ${parseColorHelper(hoverBgColor)};
		}

		&:active {
			background-color: ${parseColorHelper(activeBgColor)};
		}

		&:disabled {
			background-color: ${parseColorHelper(disabledBgColor)}66;
			pointer-events: none;
			cursor: auto;
		}

		${simpleTransitionHelper("background-color")}
		${shapedByParentHelper(shapedByParent)}
		${large ? theme.textStyles.buttonLg : theme.textStyles.buttonSm}
		${ripple
			? rippleHelper(
					parseColorHelper(hoverBgColor),
					parseColorHelper(activeBgColor)
			  )
			: ""}
	`};
`
