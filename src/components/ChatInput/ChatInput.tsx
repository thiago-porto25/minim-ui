import styled, { css } from "styled-components"
import { ChatInputProps } from "."
import {
	parseColorHelper,
	shapedByParentHelper,
	simpleTransitionHelper,
} from "../../helpers"
import { removeScrollbarHelper } from "../../helpers"

export const ChatInput = styled.textarea<ChatInputProps>`
	${({
		theme,
		bgColor = "gray10",
		focusBgColor = "gray20",
		hoverBgColor = "gray20",
		disabledBgColor = "gray10",
		radius = "md",
		w = "auto",
		h = "sm",
		py = "nn",
		px = "nn",
		shapedByParent = true,
	}) =>
		css`
			width: ${theme.base.spacing[w]};
			height: ${theme.base.spacing[h]};
			padding: ${theme.base.spacing[py]} ${theme.base.spacing[px]};
			border-radius: ${theme.base.borderRadius[radius]};
			background-color: ${parseColorHelper(bgColor)};
			border: none;
			outline: none;
			resize: none;
			${theme.textStyles.text}

			&::placeholder {
				${theme.textStyles.placeholder}
			}

			&:hover {
				background-color: ${parseColorHelper(hoverBgColor)};
			}

			&:focus {
				background-color: ${parseColorHelper(focusBgColor)};
			}

			&:disabled {
				background-color: ${parseColorHelper(disabledBgColor)};
				opacity: 0.6;
			}

			${simpleTransitionHelper("background-color")}
			${removeScrollbarHelper()}
			${shapedByParentHelper(shapedByParent)}
		`}
`
