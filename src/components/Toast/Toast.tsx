import React, { useEffect } from "react"

import { ToastProps } from "."
import { ToastPortal } from "./ToastPortal"
import { CloseIcon } from "./assets/CloseIcon"
import { ToastClose, ToastContainer, ToastMessage, ToastTitle } from "./styles"

import { Spacer } from "../Spacer"

export const Toast: React.FC<ToastProps> = ({
	isOpen,
	close,
	duration = 3000,
	type,
	message,
	animationOptions = { type: "slideUp", duration: 300, easing: "linear" },
	horizontalPosition = "right",
	verticalPosition = "bottom",
	onClose,
}) => {
	const closeToast = () => {
		if (onClose) onClose()
		close(false)
	}

	useEffect(() => {
		let timeout: NodeJS.Timeout | undefined

		if (isOpen) {
			timeout = setTimeout(() => {
				closeToast()
			}, duration)
		}

		return () => {
			clearTimeout(timeout)
		}
	}, [isOpen])

	return isOpen ? (
		<ToastPortal>
			<ToastContainer
				role="alert"
				type={type}
				animationOptions={animationOptions}
				verticalPosition={verticalPosition}
				horizontalPosition={horizontalPosition}
			>
				<ToastClose onClick={closeToast}>
					<CloseIcon />
				</ToastClose>
				<ToastTitle>{type[0].toUpperCase() + type.slice(1)}</ToastTitle>
				<Spacer variant="stack" size={{ sm: "nn", md: "nn", lg: "nn" }} />
				<ToastMessage>{message}</ToastMessage>
			</ToastContainer>
		</ToastPortal>
	) : null
}
