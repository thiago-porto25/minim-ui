import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../test-utils"
import { theme } from "../../theme"
import { Logo } from "."
import { axe } from "jest-axe"

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

	it("should not have basic accessibility issues when icon", async () => {
		const { container } = render(<Logo />)
		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})

	it("should not have basic accessibility issues when link", async () => {
		const { container } = render(<Logo linkTo="/" />)
		const results = await axe(container)
		expect(results).toHaveNoViolations()
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
		render(<Logo size={{ sm: "xxl", md: "xxl", lg: "xxl" }} linkTo="#test" />)

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
