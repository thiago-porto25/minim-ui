import { css, FlattenSimpleInterpolation } from "styled-components"

function argsMap(...args: string[]): string {
	let result = ""

	args.forEach((arg, index) => {
		if (index === args.length - 1) return (result += `${arg} 0.3s ease-in-out`)

		return (result += `${arg} 0.3s ease-in-out, `)
	})

	return result
}

function simpleTransitionHelper(...args: string[]): FlattenSimpleInterpolation {
	return css`
		transition: ${argsMap(...args)};
	`
}

export { simpleTransitionHelper }
