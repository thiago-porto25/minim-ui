import styled, { css } from "styled-components"
import { AvatarProps } from "."
import { resolveSizeOverload } from "../../helpers"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import defaultAvatarPath from "./assets/default-avatar.png"

export const Avatar = styled.img.attrs(({ src }) => ({
	src: src || defaultAvatarPath,
}))<AvatarProps>`
	${({ theme, size = { sm: "xxs", md: "xs", lg: "xs" } }) => css`
		height: ${theme.base.spacing[resolveSizeOverload(size).sm]};
		width: ${theme.base.spacing[resolveSizeOverload(size).sm]};
		border-radius: ${theme.base.borderRadius.round};
		object-fit: cover;

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
