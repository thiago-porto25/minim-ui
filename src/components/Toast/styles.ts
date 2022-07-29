import styled, { css } from "styled-components"
import { Typography } from "../Typography"
import { ToastContainerProps } from "."
import { animationHelper, simpleTransitionHelper } from "../../helpers"

export const ToastContainer = styled.div<ToastContainerProps>`
	${({
		theme,
		animationOptions,
		horizontalPosition,
		verticalPosition,
		type,
	}) => css`
		position: fixed;
		z-index: 999;
		width: ${theme.base.spacing.o};
		padding: ${theme.base.spacing.nn};
		display: flex;
		flex-direction: column;
		background-color: ${theme.foundations.alert[type]}ee;
		border-radius: ${theme.base.borderRadius.lg};
		animation: ${animationHelper[animationOptions.type]}
			${animationOptions.duration}ms ${animationOptions.easing};

		${() => {
			switch (verticalPosition) {
				case "top":
					return css`
						top: ${theme.base.spacing.xxs};
					`
				case "bottom":
					return css`
						bottom: ${theme.base.spacing.xxs};
					`
				case "center":
					return css`
						top: 45%;
					`
				default:
					return css`
						top: 45%;
					`
			}
		}}

		${() => {
			switch (horizontalPosition) {
				case "left":
					return css`
						left: ${theme.base.spacing.xxs};
					`
				case "right":
					return css`
						right: ${theme.base.spacing.xxs};
					`
				case "center":
					return css`
						left: calc(50% - ${theme.base.spacing.o} / 2);
					`
				default:
					return css`
						left: calc(50% - ${theme.base.spacing.o} / 2);
					`
			}
		}}
	`}
`

export const ToastTitle = styled(Typography).attrs({
	textStyle: "subHeading2",
	as: "h3",
})`
	${({ theme }) => css`
		color: ${theme.colors.pure.white};
		font-weight: ${theme.typography.fontWeight.bold};
	`}
`

export const ToastMessage = styled(Typography).attrs({
	textStyle: "error",
	as: "p",
})`
	${({ theme }) => css`
		color: ${theme.colors.pure.white};
	`}
`

export const ToastClose = styled.div`
	${({ theme }) => css`
		position: absolute;
		right: ${theme.base.spacing.nn};
		top: ${theme.base.spacing.nn};

		svg {
			width: 12px;
			height: 12px;
			cursor: pointer;

			&:hover {
				path {
					fill: ${theme.colors.brand.gray20};
					${simpleTransitionHelper("fill")}
				}
			}
		}
	`}
`
