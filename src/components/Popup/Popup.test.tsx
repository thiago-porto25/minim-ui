import React from "react"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { render } from "../../test-utils"
import { Popup, PopupItem } from "."

const text = "This is a Popup"

// --------------- SIMPLE TESTS ---------------
describe("Popup - Simple tests", () => {
	const setOpen = jest.fn()
	const getPopup = () => screen.getByRole("menu")
	const renderPurePopup = () =>
		render(
			<>
				<div data-testid="div"></div>
				<Popup isOpen={true} close={setOpen}>
					{text}
				</Popup>
			</>
		)

	it("should render correctly", () => {
		renderPurePopup()

		expect(getPopup()).toBeInTheDocument()
	})

	it("should render the correct child", () => {
		renderPurePopup()

		expect(getPopup()).toHaveTextContent(text)
	})

	it("should call close function on a click to close the popup", async () => {
		renderPurePopup()

		const div = screen.getByTestId("div")
		await userEvent.click(div)

		expect(setOpen).toHaveBeenCalled()
	})
})

describe("PopupItem - Simple tests", () => {
	const onClick = jest.fn()
	const getPopupItem = () => screen.getByText(text)
	const renderPopupItem = () =>
		render(<PopupItem onClick={onClick} text={text} />)

	it("should render correctly", () => {
		renderPopupItem()

		expect(getPopupItem()).toBeInTheDocument()
	})

	it("should render the correct child", () => {
		renderPopupItem()

		expect(getPopupItem()).toHaveTextContent(text)
	})

	it("should call onClick function on a click", async () => {
		renderPopupItem()

		await userEvent.click(getPopupItem())

		expect(onClick).toHaveBeenCalled()
	})
})
