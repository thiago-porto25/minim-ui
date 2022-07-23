/* eslint-disable indent */
import styled, { css } from "styled-components"
import { ModalContainerProps } from "."
import { animationHelper, parseColorHelper } from "../../helpers"

export const ModalContainer = styled.div<ModalContainerProps>`
	${({ theme, animationOptions, backdropOptions }) => css`
		display: flex;
		justify-content: ${backdropOptions.justifyChildren};
		align-items: ${backdropOptions.alignChildren};
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${backdropOptions.visible === false
			? theme.colors.pure.transparent
			: parseColorHelper(backdropOptions.bgColor)};
		animation: ${animationHelper[animationOptions.type]}
			${animationOptions.duration}ms ${animationOptions.easing};
	`}
`

export const ModalContentContainer = styled.div``
