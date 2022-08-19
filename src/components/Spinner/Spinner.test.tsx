import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../test-utils"
import { Spinner } from "."
import { axe } from "jest-axe"

const getSpinner = () => screen.getByTestId("Spinner")

// --------------- SIMPLE TESTS ---------------
describe("Spinner - simple tests", () => {
	it("should render without errors", () => {
		render(<Spinner data-testid="Spinner" />)

		expect(getSpinner()).toBeInTheDocument()
	})

	it("should render without errors with props", () => {
		render(<Spinner size="md" data-testid="Spinner" />)

		expect(getSpinner()).toBeInTheDocument()
	})

	it("should not have basic accessibility issues", async () => {
		const { container } = render(
			<Spinner size={{ sm: "md", md: "md", lg: "md" }} />
		)

		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})
})
