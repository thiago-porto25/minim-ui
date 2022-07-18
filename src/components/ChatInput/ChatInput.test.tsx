import React from "react"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { render } from "../../test-utils"
import { ChatInput, ChatInputProps } from "."
import { theme } from "../../theme"

const onChange = jest.fn()
const getChatInput = () => screen.getByPlaceholderText("ChatInput")
const renderChatInput = (props?: ChatInputProps) =>
	render(<ChatInput placeholder="ChatInput" onChange={onChange} {...props} />)

// --------------- SIMPLE TESTS ---------------
describe("ChatInput - simple tests", () => {
	it("should render without errors", () => {
		renderChatInput()

		expect(getChatInput()).toBeInTheDocument()
	})

	it("should have a text value when 'value' prop is set", () => {
		renderChatInput({ value: "test" })

		expect(getChatInput()).toHaveValue("test")
	})

	it("should run onChange function when 'onChange' event fire", async () => {
		renderChatInput()

		const chatInput = getChatInput() as HTMLTextAreaElement

		await userEvent.type(chatInput, "test")

		expect(onChange).toHaveBeenCalledTimes(4)
	})
})

// --------------- STYLE TESTS ---------------
describe("ChatInput - style tests", () => {
	it("should have default styles when no props are passed", () => {
		renderChatInput()

		expect(getChatInput()).toHaveStyle({
			width: "100%",
			height: "100%",
			borderRadius: theme.base.borderRadius.md,
			padding: `${theme.base.spacing.nn} ${theme.base.spacing.nn}`,
		})
	})

	it("should have custom styles when props are passed", () => {
		renderChatInput({
			w: "lg",
			h: "sm",
			shapedByParent: false,
			radius: "sm",
			py: "xs",
			px: "xxs",
		})

		expect(getChatInput()).toHaveStyle({
			width: theme.base.spacing.lg,
			height: theme.base.spacing.sm,
			borderRadius: theme.base.borderRadius.sm,
			padding: `${theme.base.spacing.xs} ${theme.base.spacing.xxs}`,
		})
	})
})
