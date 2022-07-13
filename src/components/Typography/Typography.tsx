import styled, { css } from "styled-components"
import { TypographyProps } from "."

export const Typography = styled.p<TypographyProps>`
	${({ theme, textStyle = "text" }) => css`
		${theme.textStyles[textStyle]}
	`}
`
