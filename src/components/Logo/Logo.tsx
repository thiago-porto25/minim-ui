import React from "react"
import { LogoProps } from "."
import { LogoSVG } from "./assets/LogoSvg"
import { LogoContainer, LogoLink } from "./styles"

export const Logo: React.FC<LogoProps> = ({ size, linkTo }) => {
	if (linkTo)
		return (
			<LogoLink href={linkTo} rel="noopener">
				<LogoContainer size={size}>
					<LogoSVG />
				</LogoContainer>
			</LogoLink>
		)

	return (
		<LogoContainer size={size}>
			<LogoSVG />
		</LogoContainer>
	)
}
