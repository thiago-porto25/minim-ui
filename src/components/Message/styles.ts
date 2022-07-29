import styled, { css } from "styled-components"
import { Typography } from "../Typography"
import { MessageProps } from "."
import { parseColorHelper } from "../../helpers"

export const MessageContainer = styled.div<
	Pick<MessageProps, "bgColor" | "sent">
>`
	${({ theme, bgColor, sent }) => css`
		position: absolute;
		display: flex;
		align-items: center;
		max-width: 80%;
		min-width: ${theme.base.spacing.sl};
		width: fit-content;
		padding: ${theme.base.spacing.xxs} ${theme.base.spacing.xxxs};
		border-radius: ${theme.base.borderRadius.md};
		${theme.base.boxShadow.light};

		${sent
			? css`
					background-color: ${parseColorHelper(bgColor)};
					border-bottom-right-radius: ${theme.base.borderRadius.none};
					right: ${theme.base.spacing.xxxs};
			  `
			: css`
					background-color: ${parseColorHelper("white")};
					border-bottom-left-radius: ${theme.base.borderRadius.none};
					left: ${theme.base.spacing.xxxs};
			  `}

		@media (min-width: ${theme.base.breakpoints.md}) {
			max-width: 60%;
		}
	`}
`

export const MessageText = styled(Typography)``

export const MessageTimestamp = styled(Typography)`
	position: absolute;
	right: ${({ theme }) => theme.base.spacing.qk};
	bottom: ${({ theme }) => theme.base.spacing.qk};
	pointer-events: none;
`

export const MessageTail = styled.div<Pick<MessageProps, "sent" | "bgColor">>`
	${({ theme, sent, bgColor }) => css`
		position: absolute;
		height: 0;
		width: 0;
		bottom: calc(-${theme.base.spacing.qk} - ${theme.base.spacing.qk} / 8);
		border-left: ${theme.base.spacing.qk} solid transparent;
		border-right: ${theme.base.spacing.qk} solid transparent;

		${sent
			? css`
					right: calc(-${theme.base.spacing.nn} + ${theme.base.spacing.qk} / 4);
					transform: rotate(115deg);
					border-bottom: ${theme.base.spacing.xxxs} solid
						${parseColorHelper(bgColor)};
			  `
			: css`
					left: calc(-${theme.base.spacing.nn} + ${theme.base.spacing.qk} / 4);
					transform: rotate(-115deg);
					border-bottom: ${theme.base.spacing.xxxs} solid
						${parseColorHelper("white")};
			  `};
	`}
`
