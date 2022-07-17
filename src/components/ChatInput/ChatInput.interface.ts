import { Colors } from "../../types/colors.interface"
import { BorderRadius } from "../../types/radius.interface"
import { Sizes } from "../../types/sizes.interface"

export interface ChatInputProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	bgColor?: Colors
	focusBgColor?: Colors
	hoverBgColor?: Colors
	disabledBgColor?: Colors
	radius?: BorderRadius
	w?: Sizes
	h?: Sizes
	py?: Sizes
	px?: Sizes
	shapedByParent?: boolean
}
