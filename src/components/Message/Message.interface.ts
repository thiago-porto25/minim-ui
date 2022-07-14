import { Colors } from "../../types/colors.interface"

export interface MessageProps {
	timestamp: Date
	message: string
	sent?: boolean
	bgColor?: Colors
}
