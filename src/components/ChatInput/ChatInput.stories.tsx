import React from "react"
import { Meta, Story } from "@storybook/react"
import { ChatInput, ChatInputProps } from "."

const meta: Meta = {
	title: "Components/ChatInput",
	component: ChatInput,
}

export default meta

const Template: Story<ChatInputProps> = (args) => (
	<div style={{ width: "400px", height: "48px" }}>
		<ChatInput {...args} />
	</div>
)

export const Default: Story<ChatInputProps> = Template.bind({})
Default.args = {
	placeholder: "Message...",
}

export const WithText: Story<ChatInputProps> = Template.bind({})
WithText.args = {
	placeholder: "Message...",
	value: "Hello World!",
}

export const Disabled: Story<ChatInputProps> = Template.bind({})
Disabled.args = {
	placeholder: "Message...",
	disabled: true,
}

export const NotShapedByParent: Story<ChatInputProps> = Template.bind({})
NotShapedByParent.args = {
	placeholder: "Message...",
	shapedByParent: false,
}

export const DifferentColors: Story<ChatInputProps> = Template.bind({})
DifferentColors.args = {
	placeholder: "Message...",
	bgColor: "blue10",
	hoverBgColor: "blue20",
	focusBgColor: "blue20",
	disabledBgColor: "blue10",
	disabled: false,
}

export const DifferentPadding: Story<ChatInputProps> = Template.bind({})
DifferentPadding.args = {
	placeholder: "Message...",
	px: "xl",
	py: "xs",
	h: "uul",
	shapedByParent: false,
}
