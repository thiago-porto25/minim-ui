import React from "react"
import { Meta, Story } from "@storybook/react"
import { Spacer, SpacerProps } from "."

const meta: Meta = {
	title: "Components/Spacer",
	component: Spacer,
}

export default meta

const TemplateStack: Story<SpacerProps> = (args) => (
	<div>
		<div style={{ backgroundColor: "red", height: "40px", width: "40px" }} />
		<Spacer {...args} />
		<div style={{ backgroundColor: "green", height: "40px", width: "40px" }} />
	</div>
)

const TemplateInline: Story<SpacerProps> = (args) => (
	<div style={{ display: "flex" }}>
		<div style={{ backgroundColor: "yellow", height: "40px", width: "40px" }} />
		<Spacer {...args} />
		<div style={{ backgroundColor: "blue", height: "40px", width: "40px" }} />
	</div>
)

export const ControlStack = TemplateStack.bind({})
ControlStack.args = {
	variant: "stack",
	size: { sm: "md", md: "md", lg: "xxxl" },
}

export const ControlInline = TemplateInline.bind({})
ControlInline.args = {
	variant: "inline",
	size: { sm: "uul", md: "uul", lg: "o" },
}
