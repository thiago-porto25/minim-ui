import { Colors } from "../../types/colors.interface"
import { BorderRadius } from "../../types/radius.interface"
import { Sizes } from "../../types/sizes.interface"

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean
	shapedByParent?: boolean
	radius?: BorderRadius
	w?: Sizes
	h?: Sizes
	py?: Sizes
	px?: Sizes
	bgColor?: Colors
	borderColor?: Colors
	hoverBgColor?: Colors
	hoverBorderColor?: Colors
	focusBgColor?: Colors
	focusBorderColor?: Colors
	errorBorderColor?: Colors
	disabledBgColor?: Colors
	disabledBorderColor?: Colors
}
