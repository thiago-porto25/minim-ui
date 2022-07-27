import { Colors } from "../../types/colors.interface"
import { Sizes } from "../../types/sizes.interface"

export interface ClickableIconProps
	extends React.HTMLAttributes<HTMLDivElement>,
		React.PropsWithChildren {
	bgColor?: Colors
	hoverBgColor?: Colors
	activeBgColor?: Colors
	size?: Sizes
}
