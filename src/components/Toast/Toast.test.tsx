import React, { useState } from "react"
import { screen, waitForElementToBeRemoved } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { render } from "../../test-utils"
import { Toast, ToastProps } from "."
import { theme } from "../../theme"

const btnText = "Open Toast"
const message = "This is a message for a toast component"
const onClose = jest.fn()

interface MockProps {
	type: ToastProps["type"]
	duration?: ToastProps["duration"]
}

const MockComponent = (props: MockProps) => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<button onClick={() => setOpen(true)}>{btnText}</button>
			<Toast
				isOpen={open}
				close={setOpen}
				type={props.type}
				message={message}
				duration={props.duration}
				onClose={onClose}
			/>
		</>
	)
}

const getToast = async () => screen.findByRole("alert")
const getClose = async () => screen.findByTitle("Close")
const getTitle = async () => screen.findByRole("heading")
const getOpen = () => screen.getByText(btnText)

describe("Toast - Simple Tests", () => {
	it("When open button is clicked, component should be appear on screen.", async () => {
		render(<MockComponent type="error" />)

		await userEvent.click(getOpen())

		const toast = await getToast()

		expect(toast).toBeInTheDocument()
	})

	it("When close button is clicked, component should disappear from screen.", async () => {
		render(<MockComponent type="success" />)

		await userEvent.click(getOpen())

		const closeBtn = await getClose()

		await userEvent.click(closeBtn)

		const toast = screen.queryByRole("alert")

		expect(toast).not.toBeInTheDocument()
	})

	it("When open button is clicked, toast should disappear after a set duration.", async () => {
		render(<MockComponent type="warning" duration={100} />)

		await userEvent.click(getOpen())

		await waitForElementToBeRemoved(() => screen.queryByRole("alert"))
	})

	it("When toast disappears, onClose callback should be called.", async () => {
		render(<MockComponent type="success" duration={50} />)

		await userEvent.click(getOpen())

		await waitForElementToBeRemoved(() => screen.queryByRole("alert")).then(
			() => {
				expect(onClose).toHaveBeenCalled()
			}
		)
	})

	it("When toast is opened, it should have message passed through props.", async () => {
		render(<MockComponent type="success" />)

		await userEvent.click(getOpen())

		const messageElem = await screen.findByText(message)

		expect(messageElem).toHaveTextContent(message)
	})
})

describe("Toast - Style Tests", () => {
	it("When toast type is success, it should have success styles and correct title.", async () => {
		render(<MockComponent type="success" />)

		await userEvent.click(getOpen())

		const toast = await getToast()
		const title = await getTitle()

		expect(toast).toHaveStyle({
			backgroundColor: theme.colors.feedback.green + "ee",
		})
		expect(title).toHaveTextContent("Success")
	})

	it("When toast type is error, it should have error styles and correct title.", async () => {
		render(<MockComponent type="error" />)

		await userEvent.click(getOpen())

		const toast = await getToast()
		const title = await getTitle()

		expect(toast).toHaveStyle({
			backgroundColor: theme.colors.feedback.red + "ee",
		})
		expect(title).toHaveTextContent("Error")
	})

	it("When toast type is warning, it should have warning styles and correct title.", async () => {
		render(<MockComponent type="warning" />)

		await userEvent.click(getOpen())

		const toast = await getToast()
		const title = await getTitle()

		expect(toast).toHaveStyle({
			backgroundColor: theme.colors.feedback.orange + "ee",
		})
		expect(title).toHaveTextContent("Warning")
	})
})
