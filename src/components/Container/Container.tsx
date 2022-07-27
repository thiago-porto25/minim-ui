import styled, { css } from "styled-components"
import { ContainerProps } from "."

export const Container = styled.div<ContainerProps>`
	${({ theme, maxW = "lg" }) => css`
		max-width: ${theme.base.breakpoints[maxW]};
		width: 100%;
	`}
`
