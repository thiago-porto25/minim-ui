import { Colors } from "../../types/colors.interface"
import { BorderRadius } from "../../types/radius.interface"
import { Sizes } from "../../types/sizes.interface"

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	bgColor?: Colors
	borderColor?: Colors
	hoverBgColor?: Colors
	hoverBorderColor?: Colors
	disabledBgColor?: Colors
	disabledBorderColor?: Colors
	focusBgColor?: Colors
	focusBorderColor?: Colors
	errorBorderColor?: Colors
	error?: boolean
	w?: Sizes
	h?: Sizes
	py?: Sizes
	px?: Sizes
	radius?: BorderRadius
	shapedByParent?: boolean
}
