import React, { useState } from "react"
import { Meta, Story } from "@storybook/react"
import { Toast, ToastProps } from "."
import { Button } from "../Button"

const meta: Meta = {
	title: "Components/Toast",
	component: Toast,
}

export default meta

const Template: Story<ToastProps> = (args) => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Button onClick={() => setOpen(!open)}>Open Toast</Button>
			<Toast {...args} isOpen={open} close={setOpen} />
		</>
	)
}

export const Error = Template.bind({})
Error.args = {
	type: "error",
	message:
		"This is an error message! error message! This is an! This error message!",
}

export const Success = Template.bind({})
Success.args = {
	type: "success",
	message:
		"This is an success message! success message! This is an! This success message!",
	horizontalPosition: "center",
	verticalPosition: "center",
}

export const Warning = Template.bind({})
Warning.args = {
	type: "warning",
	message:
		"This is an warning message! warning message! This is an! This warning message!",
	horizontalPosition: "left",
	verticalPosition: "top",
	animationOptions: {
		duration: 200,
		easing: "ease-out",
		type: "slideDown",
	},
}
