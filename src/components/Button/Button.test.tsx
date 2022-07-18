import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../test-utils"
import { tokens } from "../../theme"
import { Button } from "./Button"

const text = "Button"

// --------------- SIMPLE TESTS ---------------
describe("Button - simple tests", () => {
	it("should render without errors", () => {
		render(<Button>{text}</Button>)

		expect(screen.getByRole("button")).toBeInTheDocument()
	})

	it("should render with correct text", () => {
		render(<Button>{text}</Button>)

		expect(screen.getByText(text)).toBeInTheDocument()
	})
})

// --------------- STYLE TESTS ---------------
describe("Button - style tests", () => {
	it("should render with correct size", () => {
		render(
			<Button h="o" w="o">
				{text}
			</Button>
		)

		expect(screen.getByRole("button")).toHaveStyle({
			height: tokens.base.spacing.o,
			width: tokens.base.spacing.o,
		})
	})

	it("should render with correct design system background color", () => {
		render(<Button bgColor="blue50">{text}</Button>)

		expect(screen.getByRole("button")).toHaveStyle({
			backgroundColor: tokens.colors.action.blue50,
		})
	})

	it("should render with correct css background color", () => {
		render(<Button bgColor="violet">{text}</Button>)

		expect(screen.getByRole("button")).toHaveStyle({
			backgroundColor: "violet",
		})
	})

	it("should render with correct design system disabled background color", () => {
		render(
			<Button disabled disabledBgColor="blue50">
				{text}
			</Button>
		)

		expect(screen.getByRole("button")).toHaveStyle({
			backgroundColor: tokens.colors.action.blue50 + "66",
		})
	})

	it("should render with correct css disabled background color", () => {
		render(
			<Button disabled disabledBgColor="#fff000">
				{text}
			</Button>
		)

		expect(screen.getByRole("button")).toHaveStyle({
			backgroundColor: "#fff000" + "66",
		})
	})

	it("should get bigger height with large prop", () => {
		render(<Button large>{text}</Button>)

		expect(screen.getByRole("button")).toHaveStyle({
			height: tokens.base.spacing.md,
			width: tokens.base.spacing.o,
		})
	})

	it("should change padding if px or py prop is defined", () => {
		render(
			<Button px="sm" py="xl">
				{text}
			</Button>
		)

		expect(screen.getByRole("button")).toHaveStyle({
			paddingLeft: tokens.base.spacing.sm,
			paddingRight: tokens.base.spacing.sm,
			paddingTop: tokens.base.spacing.xl,
			paddingBottom: tokens.base.spacing.xl,
		})
	})

	it("should change border radius if radius prop is defined", () => {
		render(<Button radius="xs">{text}</Button>)

		expect(screen.getByRole("button")).toHaveStyle({
			borderRadius: tokens.base.borderRadius.xs,
		})
	})
})
