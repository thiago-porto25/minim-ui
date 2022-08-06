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

export const ControlStack: Story<SpacerProps> = TemplateStack.bind({})
ControlStack.args = {
	variant: "stack",
	size: { sm: "md", md: "md", lg: "xxxl" },
}

export const ControlInline: Story<SpacerProps> = TemplateInline.bind({})
ControlInline.args = {
	variant: "inline",
	size: "md",
}

export const ControlInlineStringSize: Story<SpacerProps> = TemplateInline.bind(
	{}
)
ControlInlineStringSize.args = {
	variant: "inline",
	size: "xxl",
}

export const ControlStackObjectSize: Story<SpacerProps> = TemplateStack.bind({})
ControlStackObjectSize.args = {
	variant: "stack",
	size: { sm: "md", md: "lg", lg: "ssl" },
}
