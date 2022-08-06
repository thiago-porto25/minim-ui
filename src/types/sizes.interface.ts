import { tokens } from "../theme"

export type Sizes = keyof typeof tokens.base.spacing

export type SizeProp = SizeInterface | Sizes

export interface SizeInterface {
	sm: Sizes
	md: Sizes
	lg: Sizes
}
