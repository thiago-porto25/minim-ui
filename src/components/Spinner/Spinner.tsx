import styled, { css } from "styled-components"
import { SpinnerProps } from "."

import { parseColorHelper, resolveSizeOverload } from "../../helpers"

export const Spinner = styled.div.attrs({
	children: "Loading...",
})<SpinnerProps>`
	${({
		theme,
		size = "xxxs",
		speed = 1100,
		thickness = 3,
		color = "gray20",
		emptyColor = "gray10",
	}) => css`
		&,
		&:after {
			border-radius: ${theme.base.borderRadius.round};
			width: ${theme.base.spacing[resolveSizeOverload(size).sm]};
			height: ${theme.base.spacing[resolveSizeOverload(size).sm]};

			@media (min-width: ${theme.base.breakpoints.md}) {
				width: ${theme.base.spacing[resolveSizeOverload(size).md]};
				height: ${theme.base.spacing[resolveSizeOverload(size).md]};
			}

			@media (min-width: ${theme.base.breakpoints.lg}) {
				width: ${theme.base.spacing[resolveSizeOverload(size).lg]};
				height: ${theme.base.spacing[resolveSizeOverload(size).lg]};
			}
		}

		margin: ${theme.base.spacing.none};
		font-size: ${theme.typography.fontSize.qk};
		position: relative;
		user-select: none;
		color: ${theme.colors.pure.transparent};
		border-top: ${thickness}px solid ${parseColorHelper(color)};
		border-right: ${thickness}px solid ${parseColorHelper(color)};
		border-bottom: ${thickness}px solid ${parseColorHelper(color)};
		border-left: ${thickness}px solid ${parseColorHelper(emptyColor)};
		transform: translateZ(0);
		animation: load8 ${speed}ms infinite linear;

		@keyframes load8 {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	`}
`
