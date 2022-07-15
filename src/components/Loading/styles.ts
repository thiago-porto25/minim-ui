import styled, { css } from "styled-components"
import { LoadingDotsContainerProps } from "./Loading.interface"

export const LoadingDotsContainer = styled.div<LoadingDotsContainerProps>`
	${({ theme, size, gap }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		column-gap: ${theme.base.spacing[gap]};

		.casing {
			width: ${theme.base.spacing[size]};
			height: ${theme.base.spacing[size]};
			position: relative;

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
