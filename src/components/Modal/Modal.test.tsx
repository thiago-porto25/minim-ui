import React, { useState } from "react"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { render } from "../../test-utils"
import { Modal, ModalContent } from "."

const btnText = "Open Modal"
const message = "This is a message for a Modal component"
const onClose = jest.fn()

const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<button onClick={() => setOpen(true)}>{btnText}</button>
			<Modal isOpen={open} close={setOpen} onClose={onClose}>
				<ModalContent>{message}</ModalContent>
			</Modal>
		</>
	)
}

const getModal = async () => screen.findByRole("dialog")
const getContent = async () => screen.findByText(message)
const getOpen = () => screen.getByText(btnText)

describe("Modal - Simple Tests", () => {
	it("When open button is clicked, component should be appear on screen.", async () => {
		render(<MockComponent />)

		await userEvent.click(getOpen())

		const Modal = await getModal()
		const Content = await getContent()

		expect(Modal).toBeInTheDocument()
		expect(Content).toBeInTheDocument()
	})

	it("When clicking outside of content, component should disappear from screen.", async () => {
		render(<MockComponent />)

		await userEvent.click(getOpen())

		const close = await getModal()

		await userEvent.click(close)

		const Modal = screen.queryByRole("dialog")

		expect(Modal).not.toBeInTheDocument()
	})

	it("When Modal disappears, onClose callback should be called.", async () => {
		render(<MockComponent />)

		await userEvent.click(getOpen())
		await userEvent.click(await getModal())

		expect(onClose).toHaveBeenCalled()
	})

	it("When Modal is opened, it should have message passed through props.", async () => {
		render(<MockComponent />)

		await userEvent.click(getOpen())

		const messageElem = await screen.findByText(message)

		expect(messageElem).toHaveTextContent(message)
	})
})
