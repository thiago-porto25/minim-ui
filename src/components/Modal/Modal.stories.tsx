import React, { useState } from "react"
import { Meta, Story } from "@storybook/react"
import { Modal, ModalProps, ModalContent } from "."
import { Typography } from "../Typography"
import { Button } from "../Button"
import { Input } from "../Input"

const meta: Meta = {
	title: "Components/Modal",
	component: Modal,
}

export default meta

const Template: Story<ModalProps> = (args) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
			<Modal {...args} isOpen={isOpen} close={setIsOpen}>
				<ModalContent>
					<div
						style={{
							backgroundColor: "white",
							width: "500px",
							padding: "24px",
							display: "flex",
							flexDirection: "column",
							rowGap: "24px",
							alignItems: "center",
							borderRadius: "15px",
						}}
					>
						<Typography textStyle="heading1" as="h1">
							Hello world
						</Typography>
						<Input type="text" shapedByParent={false} />
						<Button ripple>Click here</Button>
					</div>
				</ModalContent>
			</Modal>
		</>
	)
}

export const Default = Template.bind({})

export const FadeUp = Template.bind({})
FadeUp.args = {
	animationOptions: {
		type: "slideUp",
	},
}

export const BackdropNotVisible = Template.bind({})
BackdropNotVisible.args = {
	backdropOptions: {
		visible: false,
	},
}

export const BackdropRed = Template.bind({})
BackdropRed.args = {
	backdropOptions: {
		bgColor: "rgba(255, 0, 0, 0.5)",
	},
}

export const DifferentContentPosition = Template.bind({})
DifferentContentPosition.args = {
	backdropOptions: {
		alignChildren: "flex-end",
		justifyChildren: "flex-start",
	},
}
