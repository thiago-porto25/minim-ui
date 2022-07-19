import { keyframes } from "styled-components"

export const animationHelper = {
	fade: keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`,

	slideUp: keyframes`
	0% {
		opacity: 0;
		transform: translateY(100px)
	}
	100% {
		opacity: 1;
		transform: translateY(0px)
	}
`,

	slideDown: keyframes`
	0% {
		opacity: 0;
		transform: translateY(-100px)

	}
	100% {
		opacity: 1;
		transform: translateY(0px)
	}
`,

	slideRight: keyframes`
	0% {
		opacity: 0;
		transform: translateX(-100px)
	}
	100% {
		opacity: 1;
		transform: translateX(0px)
	}
`,

	slideLeft: keyframes`
	0% {
		opacity: 0;
		transform: translateX(100px)
	}
	100% {
		opacity: 1;
		transform: translateX(0px)
	}
`,
}
