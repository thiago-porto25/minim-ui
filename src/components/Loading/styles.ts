import styled, { css } from "styled-components"
import { LoadingDotsContainerProps } from "./Loading.interface"

import { resolveSizeOverload } from "../../helpers"

export const LoadingDotsContainer = styled.div<LoadingDotsContainerProps>`
	${({ theme, size, gap }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		column-gap: ${theme.base.spacing[resolveSizeOverload(gap).sm]};

		@media (min-width: ${theme.base.breakpoints.md}) {
			column-gap: ${theme.base.spacing[resolveSizeOverload(gap).md]};
		}

		@media (min-width: ${theme.base.breakpoints.lg}) {
			column-gap: ${theme.base.spacing[resolveSizeOverload(gap).lg]};
		}

		.casing {
			width: ${theme.base.spacing[resolveSizeOverload(size).sm]};
			height: ${theme.base.spacing[resolveSizeOverload(size).sm]};
			position: relative;

			@media (min-width: ${theme.base.breakpoints.md}) {
				height: ${theme.base.spacing[resolveSizeOverload(size).md]};
				width: ${theme.base.spacing[resolveSizeOverload(size).md]};
			}

			@media (min-width: ${theme.base.breakpoints.lg}) {
				height: ${theme.base.spacing[resolveSizeOverload(size).lg]};
				width: ${theme.base.spacing[resolveSizeOverload(size).lg]};
			}

			.dot {
				position: absolute;
				display: block;
				width: inherit;
				height: inherit;
				background-color: ${theme.colors.brand.gray100};
				border-radius: ${theme.base.borderRadius.round};
				animation: loader-bullets-jump 1.2s infinite ease;
			}

			&:nth-child(even) .dot {
				animation-delay: 0.4s;
			}
		}

		@keyframes loader-bullets-jump {
			0% {
				top: 0;
			}
			40% {
				top: -4px;
			}
			80% {
				top: 0;
			}
		}
	`}
`
