import styled, { css } from "styled-components"
import { SpacerProps } from "."

import { resolveSizeOverload } from "../../helpers"

export const Spacer = styled.div.attrs({ "aria-hidden": true })<SpacerProps>`
	${({ theme, size, variant }) => css`
		${variant === "inline" &&
		css`
			width: ${theme.base.spacing[resolveSizeOverload(size).sm]};

			@media (min-width: ${theme.base.breakpoints.md}) {
				width: ${theme.base.spacing[resolveSizeOverload(size).md]};
			}

			@media (min-width: ${theme.base.breakpoints.lg}) {
				width: ${theme.base.spacing[resolveSizeOverload(size).lg]};
			}
		`}

		${variant === "stack" &&
		css`
			height: ${theme.base.spacing[resolveSizeOverload(size).sm]};

			@media (min-width: ${theme.base.breakpoints.md}) {
				height: ${theme.base.spacing[resolveSizeOverload(size).md]};
			}

			@media (min-width: ${theme.base.breakpoints.lg}) {
				height: ${theme.base.spacing[resolveSizeOverload(size).lg]};
			}
		`}
	`}
`
