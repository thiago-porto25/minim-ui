/* eslint-disable indent */
import styled, { css } from "styled-components"
import { ButtonProps } from "."
import {
	parseColorHelper,
	shapedByParentHelper,
	simpleTransitionHelper,
} from "../../helpers"

export const Button = styled.button<ButtonProps>`
	${({
		theme,
		large = false,
		h = large ? "md" : "sm",
		w = "o",
		py = "nn",
		px = "nn",
		radius = "md",
		bgColor = "blue50",
		hoverBgColor = "blue40",
		activeBgColor = "blue40",
		disabledBgColor = "blue50",
		shapedByParent = false,
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

		${large ? theme.textStyles.buttonLg : theme.textStyles.buttonSm}
		${simpleTransitionHelper("background-color")}
		${shapedByParentHelper(shapedByParent)}
	`};
`
