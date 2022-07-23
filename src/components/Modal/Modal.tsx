import React from "react"
import { defaultObjectPropsHelper } from "../../helpers"
import { AnimationOptions } from "../../types/animationOptions.interface"
import { BackdropOptions } from "../../types/backdropOptions.interface"
import { ModalProps } from "./Modal.interface"
import { ModalContainer } from "./styles"

export const Modal: React.FC<ModalProps> = ({
	children,
	isOpen,
	close,
	onClose,
	animationOptions,
	backdropOptions,
}) => {
	const newAnimationOptions = defaultObjectPropsHelper<AnimationOptions>(
		{
			type: "fade",
			duration: 250,
			easing: "ease-in-out",
		},
		animationOptions
	)
	const newBackdropOptions = defaultObjectPropsHelper<BackdropOptions>(
		{
			bgColor: "rgba(0, 0, 0, 0.15)",
			alignChildren: "center",
			justifyChildren: "center",
		},
		backdropOptions
	)

	const closeModal = (): void => {
		if (onClose) onClose()
		close(false)
	}

	return isOpen ? (
		<ModalContainer
			role="dialog"
			animationOptions={newAnimationOptions}
			backdropOptions={newBackdropOptions}
			onClick={closeModal}
		>
			{children}
		</ModalContainer>
	) : null
}
