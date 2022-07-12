import styled, { css } from "styled-components"
import { ButtonProps } from "."
import { shapedByParentHelper, simpleTransitionHelper } from "../../helpers"

export const Button = styled.button<ButtonProps>`
	${({
		theme,
		h = "sm",
		w = "o",
		py = "auto",
		px = "auto",
		radius = "md",
		// bgColor = "blue50",
		// hoverBgColor = "blue40",
		// activeBgColor = "blue40",
		// disabledBgColor = "blue20",
		shapedByParent = false,
	}) => css`
		height: ${theme.base.spacing[h]};
		width: ${theme.base.spacing[w]};
		border-radius: ${theme.base.borderRadius[radius]};
		background-color: ${theme.colors.action.blue50};
		padding: ${theme.base.spacing[py]} ${theme.base.spacing[px]};
		box-sizing: border-box;
		border: none;
		cursor: pointer;

		&:hover {
			background-color: ${theme.colors.action.blue40};
		}

		&:active {
			background-color: ${theme.colors.action.blue40};
		}

		&:disabled {
			background-color: ${theme.colors.action.blue50}66;
			pointer-events: none;
			cursor: auto;
		}

		${simpleTransitionHelper("background-color")}
		${theme.textStyles.buttonSm}

		${shapedByParentHelper(shapedByParent)}
	`};
`
