import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../tests"
import { Button } from "./Button"

describe("Button", () => {
	it("should render without errors", () => {
		render(<Button>test</Button>)

		expect(screen.getByText("test")).toBeInTheDocument()
	})
})
