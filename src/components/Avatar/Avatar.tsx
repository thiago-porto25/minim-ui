import styled, { css } from "styled-components"
import { AvatarProps } from "."

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import defaultAvatarPath from "./assets/default-avatar.png"

export const Avatar = styled.img.attrs(({ src }) => ({
	src: src || defaultAvatarPath,
}))<AvatarProps>`
	${({ theme, smSize = "xxs", mdSize = "xs", lgSize = "xs" }) => css`
		height: ${theme.base.spacing[smSize]};
		width: ${theme.base.spacing[smSize]};
		border-radius: ${theme.base.borderRadius.round};

		@media (min-width: ${theme.base.breakpoints.md}) {
			height: ${theme.base.spacing[mdSize]};
			width: ${theme.base.spacing[mdSize]};
		}

		@media (min-width: ${theme.base.breakpoints.lg}) {
			height: ${theme.base.spacing[lgSize]};
			width: ${theme.base.spacing[lgSize]};
		}
	`}
`
