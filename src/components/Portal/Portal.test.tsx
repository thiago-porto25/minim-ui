/* eslint-disable testing-library/no-node-access */
import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../test-utils"
import { Portal } from "."

const text = "Portal"

const getPortalContent = () => screen.getByText(text)

// --------------- SIMPLE TESTS ---------------
describe("Portal - Simple tests", () => {
	it("should render correctly", () => {
		render(
			<Portal>
				<h1>{text}</h1>
			</Portal>
		)

		const portal = getPortalContent().parentElement as HTMLElement

		expect(portal.id).toBe("minim-ui-portal")
	})

	it("should render content correctly", () => {
		render(
			<Portal>
				<h1>{text}</h1>
			</Portal>
		)

		expect(getPortalContent()).toBeInTheDocument()
	})
})
