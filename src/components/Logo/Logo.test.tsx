import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../tests"
import { theme } from "../../theme"
import { Logo } from "."

const getLogo = () => screen.getByRole("img")

const getLogoLink = () => screen.getByRole("link")

// --------------- SIMPLE TESTS ---------------
describe("Logo - Simple tests", () => {
	it("should render correctly", () => {
		render(<Logo />)

		expect(getLogo()).toBeInTheDocument()
	})

	it("should render correctly as a link", () => {
		render(<Logo linkTo="#test" />)

		expect(getLogoLink()).toBeInTheDocument()
		expect(getLogoLink()).toHaveAttribute("href", "#test")
	})
})

// --------------- STYLE TESTS ---------------
describe("Logo - Styles tests", () => {
	it("should have correct size with undefined size prop", () => {
		render(<Logo />)

		expect(getLogo()).toHaveStyle({
			width: theme.base.spacing.sm,
			height: theme.base.spacing.sm,
		})
	})

	it("should have correct size with size prop = lg", () => {
		render(<Logo size="lg" />)

		expect(getLogo()).toHaveStyle({
			width: theme.base.spacing.lg,
			height: theme.base.spacing.lg,
		})
	})

	it("should have correct size with size prop = o", () => {
		render(<Logo size="o" />)

		expect(getLogo()).toHaveStyle({
			width: theme.base.spacing.o,
			height: theme.base.spacing.o,
		})
	})

	it("should have correct size with size prop = lg when it is a link", () => {
		render(<Logo size="lg" linkTo="#test" />)

		expect(getLogo()).toHaveStyle({
			width: theme.base.spacing.lg,
			height: theme.base.spacing.lg,
		})
	})

	it("should have correct size with size prop = xxl when it is a link", () => {
		render(<Logo size="xxl" linkTo="#test" />)

		expect(getLogo()).toHaveStyle({
			width: theme.base.spacing.xxl,
			height: theme.base.spacing.xxl,
		})
	})

	it("should have correct size with size prop = o when it is a link", () => {
		render(<Logo size="o" linkTo="#test" />)

		expect(getLogo()).toHaveStyle({
			width: theme.base.spacing.o,
			height: theme.base.spacing.o,
		})
	})
})
