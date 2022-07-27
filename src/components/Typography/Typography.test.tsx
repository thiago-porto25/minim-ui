import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../test-utils"
import { theme } from "../../theme"
import { Typography } from "."
import { axe } from "jest-axe"

const text = "Hello World"

// --------------- SIMPLE TESTS ---------------
describe("Typography - Simple tests", () => {
	it("should render correctly", () => {
		render(<Typography>{text}</Typography>)

		expect(screen.getByText(text)).toBeInTheDocument()
	})

	it("should render correctly as a heading", () => {
		render(
			<Typography as="h1" textStyle="heading1">
				{text}
			</Typography>
		)

		expect(screen.getByRole("heading")).toBeInTheDocument()
	})

	it("should render correctly as a link", () => {
		render(
			<Typography as="a" href="#test" textStyle="link">
				{text}
			</Typography>
		)

		expect(screen.getByRole("link")).toBeInTheDocument()
	})

	it("should not have basic accessibility issues", async () => {
		const { container } = render(<Typography>{text}</Typography>)

		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})
})

// --------------- STYLE TESTS ---------------
describe("Typography - Styles tests", () => {
	it("should render correctly with error textStyle", () => {
		render(<Typography textStyle="error">{text}</Typography>)

		expect(screen.getByText(text)).toHaveStyle(theme.textStyles.error)
	})

	it("should render correctly with default (text) textStyle", () => {
		render(<Typography>{text}</Typography>)

		expect(screen.getByText(text)).toHaveStyle(theme.textStyles.text)
	})

	it("should render correctly with inputLabel textStyle", () => {
		render(<Typography textStyle="inputLabel">{text}</Typography>)

		expect(screen.getByText(text)).toHaveStyle(theme.textStyles.inputLabel)
	})
})
