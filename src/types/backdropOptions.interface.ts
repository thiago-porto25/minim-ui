import { Colors } from "./colors.interface"

export interface BackdropOptions {
	bgColor?: Colors
	visible?: boolean
	alignChildren?: "center" | "flex-start" | "flex-end"
	justifyChildren?: "center" | "flex-start" | "flex-end"
}
