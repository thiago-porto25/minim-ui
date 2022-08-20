import { Colors } from "../../types/colors.interface"
import { SizeProp } from "../../types/sizes.interface"

export interface ClickableIconProps
	extends React.HTMLAttributes<HTMLButtonElement>,
		React.PropsWithChildren {
	bgColor?: Colors
	hoverBgColor?: Colors
	activeBgColor?: Colors
	size?: SizeProp
}
