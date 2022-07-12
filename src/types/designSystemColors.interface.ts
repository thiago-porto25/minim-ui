import { tokens } from "../theme"

export type DesignSystemColors = keyof typeof tokens.colors.action &
	keyof typeof tokens.colors.brand &
	keyof typeof tokens.colors.feedback &
	keyof typeof tokens.colors.pure
