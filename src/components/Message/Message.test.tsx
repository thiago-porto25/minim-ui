import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../test-utils"
import { Message } from "."
import { axe } from "jest-axe"

const text = "This is a message"
const timestamp = new Date()
const getMessage = () => screen.getByText(text)
const renderMessage = () =>
	render(<Message message={text} timestamp={timestamp} />)

// --------------- SIMPLE TESTS ---------------
describe("Message - Simple tests", () => {
	it("should render correctly", () => {
		renderMessage()

		expect(getMessage()).toBeInTheDocument()
	})

	it("should render the correct text", () => {
		renderMessage()

		expect(getMessage()).toHaveTextContent(text)
	})

	it("should not have basic accessibility issues", async () => {
		const { container } = renderMessage()
		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})
})
