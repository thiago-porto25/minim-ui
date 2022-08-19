import React from "react"
import styled, { css } from "styled-components"
import { ButtonProps } from "."
import {
	parseColorHelper,
	shapedByParentHelper,
	simpleTransitionHelper,
} from "../../helpers"
import { rippleHelper } from "../../helpers"
import { Spinner } from "../Spinner"

export const Button = styled.button.attrs((props: ButtonProps) => ({
	children: props.isLoading ? <Spinner /> : props.children,
}))<ButtonProps>`
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
		isLoading = false,
	}) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		height: ${theme.base.spacing[h]};
		width: ${theme.base.spacing[w]};
		border-radius: ${theme.base.borderRadius[radius]};
		background-color: ${parseColorHelper(bgColor)};
		padding: ${theme.base.spacing[py]} ${theme.base.spacing[px]};
		box-sizing: border-box;
		border: none;
		cursor: pointer;
		pointer-events: ${isLoading ? "none" : "auto"};

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
