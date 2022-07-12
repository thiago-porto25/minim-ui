import { tokens } from "../theme"
import { Colors } from "../types/colors.interface"
import { DesignSystemColors } from "../types/designSystemColors.interface"

export const parseColorHelper = (color: Colors) => {
	let objectColor

	Object.keys(tokens.colors).forEach((key: keyof typeof tokens.colors) => {
		Object.keys(tokens.colors[key]).forEach((subKey: DesignSystemColors) => {
			if (subKey === color) {
				objectColor = tokens.colors[key][subKey]
			}
		})
	})

	return objectColor ? objectColor : color
}
