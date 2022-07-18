import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../test-utils"
import { tokens } from "../../theme"
import { Avatar, AvatarProps } from "."

const getAvatar = () => screen.getByRole("img")
const renderAvatar = (props?: AvatarProps) =>
	render(
		<Avatar
			lgSize={props?.lgSize || "xxs"}
			mdSize={props?.lgSize || "xxs"}
			smSize={props?.lgSize || "xxs"}
			src={String(props?.src)}
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
		renderAvatar({ smSize: "lg", mdSize: "lg", lgSize: "lg" })

		expect(getAvatar()).toHaveStyle({
			height: tokens.base.spacing.lg,
			width: tokens.base.spacing.lg,
		})
	})

	it("should render with size sm for width and height", () => {
		renderAvatar({ smSize: "sm", mdSize: "sm", lgSize: "sm" })

		expect(getAvatar()).toHaveStyle({
			height: tokens.base.spacing.sm,
			width: tokens.base.spacing.sm,
		})
	})

	it("should render with size md for width and height", () => {
		renderAvatar({ smSize: "md", lgSize: "md", mdSize: "md" })

		expect(getAvatar()).toHaveStyle({
			height: tokens.base.spacing.md,
			width: tokens.base.spacing.md,
		})
	})
})
