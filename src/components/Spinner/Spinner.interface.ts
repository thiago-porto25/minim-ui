import { Colors } from "../../types/colors.interface"
import { SizeProp } from "../../types/sizes.interface"

export interface SpinnerProps {
	color?: Colors
	emptyColor?: Colors
	size?: SizeProp
	speed?: number
	thickness?: number
}
