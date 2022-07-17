import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../test-utils"
import { Spacer } from "."
import { theme } from "../../theme"

const getSpacer = () => screen.getByTestId("Spacer")

// --------------- SIMPLE TESTS ---------------
describe("Spacer - simple tests", () => {
	it("should render without errors when variant props equals stack", () => {
		render(
			<Spacer
				variant="stack"
				size={{ sm: "md", md: "md", lg: "md" }}
				data-testid="Spacer"
			/>
		)

		expect(getSpacer()).toBeInTheDocument()
	})

	it("should render without errors when variant props equals inline", () => {
		render(
			<Spacer
				variant="inline"
				size={{ sm: "md", md: "md", lg: "md" }}
				data-testid="Spacer"
			/>
		)

		expect(getSpacer()).toBeInTheDocument()
	})
})

// --------------- STYLE TESTS ---------------
describe("Spacer - style tests", () => {
	it("should have correct height when prop variant equal stack", () => {
		render(
			<Spacer
				variant="stack"
				size={{ sm: "md", md: "md", lg: "md" }}
				data-testid="Spacer"
			/>
		)

		expect(getSpacer()).toHaveStyle({
			height: theme.base.spacing.md,
		})
	})

	it("should have correct width when prop variant equal inline", () => {
		render(
			<Spacer
				variant="inline"
				size={{ sm: "o", md: "o", lg: "o" }}
				data-testid="Spacer"
			/>
		)

		expect(getSpacer()).toHaveStyle({
			width: theme.base.spacing.o,
		})
	})
})
