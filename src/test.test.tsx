import React from "react"
import { render, screen } from "@testing-library/react"
import { Test } from "./Test"

describe("test", () => {
	it("should pass", () => {
		render(<Test />)

		expect(screen.getByText("test")).toBeInTheDocument()
	})
})
