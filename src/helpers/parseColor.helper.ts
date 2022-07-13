/* eslint-disable @typescript-eslint/ban-ts-comment */
import { tokens } from "../theme"
import { Colors } from "../types/colors.interface"
import { ColorKeys } from "../types/colorsKeys.interface"
import { DesignSystemColors } from "../types/designSystemColors.interface"

export const parseColorHelper = (color: Colors) => {
	let objectColor: DesignSystemColors | undefined

	Object.keys(tokens.colors).forEach((key: ColorKeys) => {
		Object.keys(tokens.colors[key]).forEach((subKey: DesignSystemColors) => {
			if (subKey === color) {
				//@ts-ignore
				objectColor = tokens.colors[key][subKey]
			}
		})
	})

	return objectColor ? objectColor : color
}
