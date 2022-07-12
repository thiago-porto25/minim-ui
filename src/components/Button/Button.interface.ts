import { Colors } from "../../types/colors.interface"
import { BorderRadius } from "../../types/radius.interface"
import { Sizes } from "../../types/sizes.interface"

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	bgColor?: Colors
	hoverBgColor?: Colors
	disabledBgColor?: Colors
	activeBgColor?: Colors
	shapedByParent?: boolean
	large?: boolean
	w?: Sizes
	h?: Sizes
	py?: Sizes
	px?: Sizes
	radius?: BorderRadius
}
