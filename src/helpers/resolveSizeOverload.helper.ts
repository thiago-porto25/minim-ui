import type { SizeProp, SizeInterface } from "../types/sizes.interface"

export const resolveSizeOverload = (size: SizeProp): SizeInterface => {
	if (typeof size === "string") {
		return { sm: size, md: size, lg: size }
	}

	return size as SizeInterface
}
