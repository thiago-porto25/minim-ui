import "@testing-library/jest-dom"
import "jest-axe/extend-expect"

beforeAll(() => {
	const { getComputedStyle } = window
	window.getComputedStyle = (elt) => getComputedStyle(elt)
})
