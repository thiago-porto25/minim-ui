import React, { useState } from "react"
import { Meta, Story } from "@storybook/react"
import { Popup, PopupItem, PopupProps } from "."
import { Button } from "../Button"

const meta: Meta = {
	title: "Components/Popup",
	component: Popup,
}

export default meta

const Template: Story<PopupProps> = (args) => {
	const [open, setOpen] = useState(false)

	return (
		<div style={{ position: "relative" }}>
			<Button onClick={() => setOpen(true)}>Open Popup</Button>
			{open && (
				<Popup {...args} setOpen={setOpen}>
					<PopupItem text="Logout" />
				</Popup>
			)}
		</div>
	)
}

export const Default = Template.bind({})

export const Playground = Template.bind({})
Playground.args = {
	x: "xl",
	y: "xxs",
	animationOptions: { duration: 200, easing: "linear", type: "slideUp" },
}

export const SlideRight = Template.bind({})
SlideRight.args = {
	animationOptions: { duration: 300, easing: "ease-in", type: "slideRight" },
}

export const SlideLeft = Template.bind({})
SlideLeft.args = {
	animationOptions: { duration: 500, easing: "ease-out", type: "slideLeft" },
}

export const SlideUp = Template.bind({})
SlideUp.args = {
	animationOptions: { duration: 250, easing: "linear", type: "slideUp" },
}

export const SlideDown = Template.bind({})
SlideDown.args = {
	animationOptions: { duration: 100, easing: "linear", type: "slideDown" },
}
