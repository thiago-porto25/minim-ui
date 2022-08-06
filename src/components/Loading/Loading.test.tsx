/* eslint-disable testing-library/no-node-access */
import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../test-utils"
import { Loading, LoadingProps } from "."
import { axe } from "jest-axe"

const getLoading = () => screen.getByTitle("Loading")
const renderLoading = (props?: LoadingProps) =>
	render(<Loading dots={props?.dots} gap={props?.gap} size={props?.size} />)

// --------------- SIMPLE TESTS ---------------
describe("Loading - simple tests", () => {
	it("should render without errors", () => {
		renderLoading()

		expect(getLoading()).toBeInTheDocument()
	})

	it("should render without errors with more dots", () => {
		renderLoading({ dots: 5 })

		expect(getLoading()).toBeInTheDocument()
	})

	it("should render without errors with bigger gap", () => {
		renderLoading({ gap: "xxs" })

		expect(getLoading()).toBeInTheDocument()
	})

	it("should render without errors with bigger size", () => {
		renderLoading({ size: { sm: "xxxs", md: "xxxs", lg: "xxxs" } })

		expect(getLoading()).toBeInTheDocument()
	})

	it("should render all dots", () => {
		renderLoading({ dots: 8 })

		expect(getLoading().children).toHaveLength(8)
	})

	it("should not have basic accessibility issues", async () => {
		const { container } = renderLoading()
		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})
})
