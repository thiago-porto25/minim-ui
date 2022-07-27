import styled, { css } from "styled-components"
import { animationHelper, simpleTransitionHelper } from "../../helpers"
import { StyledPopupProps } from "./Popup.interface"

export const StyledPopup = styled.div<StyledPopupProps>`
	${({ theme, animationOptions, x, y }) => css`
		position: absolute;
		top: ${theme.base.spacing[y]};
		left: ${theme.base.spacing[x]};

		animation: ${animationHelper[animationOptions.type]}
			${animationOptions.duration}ms ${animationOptions.easing};
	`}
`

export const StyledPopupItem = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.brand.gray10};
		padding: ${theme.base.spacing.nn};
		width: ${theme.base.spacing.sl};
		cursor: pointer;

		&:hover {
			background-color: ${theme.colors.brand.gray20};
		}

		span {
			user-select: none;
		}

		${simpleTransitionHelper("background-color")}
	`}
`
