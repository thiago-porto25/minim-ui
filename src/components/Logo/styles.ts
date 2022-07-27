import styled, { css } from "styled-components"
import { simpleTransitionHelper } from "../../helpers"
import { LogoProps } from "./Logo.interface"

export const LogoContainer = styled.div.attrs({
	role: "img",
})<Pick<LogoProps, "size">>`
	${({ theme, size = "sm" }) => css`
		width: ${theme.base.spacing[size]};
		height: ${theme.base.spacing[size]};

		svg {
			width: 100%;
			height: 100%;
		}
	`}
`

export const LogoLink = styled.a<Pick<LogoProps, "size">>`
	${({ theme, size = "sm" }) => css`
		width: ${theme.base.spacing[size]};
		height: ${theme.base.spacing[size]};

		${simpleTransitionHelper("opacity")}
		&:hover {
			opacity: 0.8;
		}
	`}
`
