import React from "react"
import { Colors } from "../../types/colors.interface"
import { BorderRadius } from "../../types/radius.interface"
import { Sizes } from "../../types/sizes.interface"

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary"
	bgColor?: Colors
	hoverBgColor?: Colors
	disabledBgColor?: Colors
	activeBgColor?: Colors
	large?: boolean
	h?: Sizes
	w?: Sizes
	py?: Sizes
	px?: Sizes
	radius?: BorderRadius
	ripple?: boolean
	shapedByParent?: boolean
	isLoading?: boolean
}
