import { Sizes } from "../../types/sizes.interface"

export interface SpacerProps {
	variant: "stack" | "inline"
	size: { sm: Sizes; md: Sizes; lg: Sizes }
}
