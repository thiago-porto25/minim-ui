import styled, { css } from "styled-components"
import { resolveSizeOverload, simpleTransitionHelper } from "../../helpers"
import { LogoProps } from "./Logo.interface"

export const LogoContainer = styled.div.attrs({
	role: "img",
})<Pick<LogoProps, "size">>`
	${({ theme, size = { sm: "sm", md: "sm", lg: "sm" } }) => css`
		width: ${theme.base.spacing[resolveSizeOverload(size).sm]};
		height: ${theme.base.spacing[resolveSizeOverload(size).sm]};

		svg {
			width: 100%;
			height: 100%;
		}

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

export const LogoLink = styled.a<Pick<LogoProps, "size">>`
	${({ theme, size = { sm: "sm", md: "sm", lg: "sm" } }) => css`
		width: ${theme.base.spacing[resolveSizeOverload(size).sm]};
		height: ${theme.base.spacing[resolveSizeOverload(size).sm]};

		${simpleTransitionHelper("opacity")}

		&:hover {
			opacity: 0.8;
		}

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
