import React from "react"
import { AnimationOptions } from "../../types/animationOptions.interface"

export interface ToastProps {
	isOpen: boolean
	close: React.Dispatch<React.SetStateAction<boolean>>
	duration?: number
	type: "error" | "success" | "warning"
	message: string
	animationOptions?: AnimationOptions
	verticalPosition?: "bottom" | "top" | "center"
	horizontalPosition?: "left" | "right" | "center"
	onClose?: () => void
}

export interface ToastContainerProps {
	verticalPosition: ToastProps["verticalPosition"]
	horizontalPosition: ToastProps["horizontalPosition"]
	animationOptions: AnimationOptions
	type: ToastProps["type"]
}
