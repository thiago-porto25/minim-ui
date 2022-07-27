import { Colors } from "../../types/colors.interface"
import { BorderRadius } from "../../types/radius.interface"
import { Sizes } from "../../types/sizes.interface"

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	activeBgColor?: Colors
	bgColor?: Colors
	disabledBgColor?: Colors
	h?: Sizes
	hoverBgColor?: Colors
	large?: boolean
	py?: Sizes
	px?: Sizes
	radius?: BorderRadius
	ripple?: boolean
	shapedByParent?: boolean
	w?: Sizes
}
