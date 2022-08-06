import React from "react"
import { screen } from "@testing-library/react"
import { axe } from "jest-axe"

import { render } from "../../test-utils"
import { tokens } from "../../theme"
import { Avatar, AvatarProps } from "."

const getAvatar = () => screen.getByRole("img")
const renderAvatar = (props?: AvatarProps) =>
	render(
		<Avatar
			size={props?.size || "xxs"}
			src={String(props?.src)}
			alt="Avatar Image"
		/>
	)

// --------------- SIMPLE TESTS ---------------
describe("Avatar - simple tests", () => {
	it("should render without errors", () => {
		renderAvatar()

		expect(getAvatar()).toBeInTheDocument()
	})

	it("should render without errors with src", () => {
		renderAvatar({ src: "https://example.com/avatar.png" })

		expect(getAvatar()).toBeInTheDocument()
	})

	it("should not have basic accessibility issues", async () => {
		const { container } = renderAvatar()
		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})
})

// --------------- STYLE TESTS ---------------
describe("Avatar - style tests", () => {
	it("should render with size xxs as default", () => {
		renderAvatar()

		expect(getAvatar()).toHaveStyle({
			height: tokens.base.spacing.xxs,
			width: tokens.base.spacing.xxs,
		})
	})

	it("should render with size lg for width and height", () => {
		renderAvatar({ size: "lg" })

		expect(getAvatar()).toHaveStyle({
			height: tokens.base.spacing.lg,
			width: tokens.base.spacing.lg,
		})
	})

	it("should render with size sm for width and height", () => {
		renderAvatar({ size: "sm" })

		expect(getAvatar()).toHaveStyle({
			height: tokens.base.spacing.sm,
			width: tokens.base.spacing.sm,
		})
	})

	it("should render with size md for width and height", () => {
		renderAvatar({ size: { sm: "md", md: "md", lg: "md" } })

		expect(getAvatar()).toHaveStyle({
			height: tokens.base.spacing.md,
			width: tokens.base.spacing.md,
		})
	})
})
