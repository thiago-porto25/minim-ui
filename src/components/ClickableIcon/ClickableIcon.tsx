import styled, { css } from "styled-components"

import { ClickableIconProps } from "."
import {
	parseColorHelper,
	resolveSizeOverload,
	simpleTransitionHelper,
} from "../../helpers"

export const ClickableIcon = styled.div<ClickableIconProps>`
	${({
		theme,
		bgColor = "transparent",
		hoverBgColor = "gray20",
		activeBgColor = "gray30",
		size = { sm: "xs", md: "xs", lg: "xs" },
	}) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: ${theme.base.spacing[resolveSizeOverload(size).sm]};
		height: ${theme.base.spacing[resolveSizeOverload(size).sm]};
		padding: ${theme.base.spacing.qk};
		background-color: ${parseColorHelper(bgColor)};
		border-radius: ${theme.base.borderRadius.round};
		cursor: pointer;

		&:hover {
			background-color: ${parseColorHelper(hoverBgColor)};
		}

		&:active {
			background-color: ${parseColorHelper(activeBgColor)};
		}

		svg {
			width: 100%;
			height: 100%;
			margin: ${theme.base.spacing.none};
			padding: ${theme.base.spacing.none};
		}

		${simpleTransitionHelper("background-color")}

		@media (min-width: ${theme.base.breakpoints.md}) {
			height: ${theme.base.spacing[resolveSizeOverload(size).md]};
			width: ${theme.base.spacing[resolveSizeOverload(size).md]};
		}

		@media (min-width: ${theme.base.breakpoints.lg}) {
			height: ${theme.base.spacing[resolveSizeOverload(size).lg]};
			width: ${theme.base.spacing[resolveSizeOverload(size).lg]};
		}
	`}
`
