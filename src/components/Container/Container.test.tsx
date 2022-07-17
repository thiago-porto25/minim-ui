import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../test-utils"
import { Container, ContainerProps } from "."
import { theme } from "../../theme"

const getContainer = () => screen.getByTestId("container")
const renderContainer = (props?: ContainerProps) =>
	render(
		<Container data-testid="container" maxW={props?.maxW}>
			<div>Hello World</div>
		</Container>
	)

// --------------- SIMPLE TESTS ---------------
describe("Container - simple tests", () => {
	it("should render without errors", () => {
		renderContainer()

		expect(getContainer()).toBeInTheDocument()
	})

	it("should render children", () => {
		renderContainer()

		expect(screen.getByText("Hello World")).toBeInTheDocument()
	})

	it("should render without errors with defined maxW prop", () => {
		renderContainer({ maxW: "sm" })

		expect(getContainer()).toBeInTheDocument()
	})
})

// --------------- STYLE TESTS ---------------
describe("Container - style tests", () => {
	it("should have default max width equal to lg", () => {
		renderContainer()

		expect(getContainer()).toHaveStyle({
			maxWidth: theme.base.breakpoints.lg,
		})
	})

	it("should have max width equal to what was passed through props", () => {
		renderContainer({ maxW: "max" })

		expect(getContainer()).toHaveStyle({
			maxWidth: theme.base.breakpoints.max,
		})
	})
})
