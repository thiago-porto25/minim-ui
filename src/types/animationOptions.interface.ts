import { animationHelper } from "../helpers"

export interface AnimationOptions {
	type: keyof typeof animationHelper
	duration?: number
	easing?: React.CSSProperties["animationTimingFunction"]
}
