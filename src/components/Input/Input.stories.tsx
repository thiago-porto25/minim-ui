import React from "react"
import { Meta, Story } from "@storybook/react"
import { Input, InputProps } from "."

const meta: Meta = {
	title: "Components/Input",
	component: Input,
}

export default meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default: Story<InputProps> = Template.bind({})
Default.args = {
	type: "email",
	placeholder: "Email",
}

export const Password: Story<InputProps> = Template.bind({})
Password.args = {
	type: "password",
	placeholder: "Password",
}

export const Error: Story<InputProps> = Template.bind({})
Error.args = {
	type: "text",
	placeholder: "Text",
	required: true,
	error: true,
}

export const NotShapedByParent: Story<InputProps> = Template.bind({})
NotShapedByParent.args = {
	type: "email",
	placeholder: "Email",
	shapedByParent: false,
	w: "uuul",
	h: "sm",
}

export const PaddingPlayground: Story<InputProps> = Template.bind({})
PaddingPlayground.args = {
	type: "email",
	placeholder: "Email",
	py: "sm",
	px: "sm",
}

export const ColorPlayground: Story<InputProps> = Template.bind({})
ColorPlayground.args = {
	type: "email",
	placeholder: "Email",
	bgColor: "white",
	borderColor: "gray30",
	hoverBgColor: "white",
	hoverBorderColor: "gray40",
	focusBgColor: "gray10",
	focusBorderColor: "blue50",
	errorBorderColor: "red",
	disabledBgColor: "white",
	disabledBorderColor: "gray30",
}
