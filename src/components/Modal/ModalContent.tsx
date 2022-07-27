import React from "react"
import { ModalContentContainer } from "./styles"

export const ModalContent: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const handleParentClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
	}

	return (
		<ModalContentContainer onClick={handleParentClick}>
			{children}
		</ModalContentContainer>
	)
}
