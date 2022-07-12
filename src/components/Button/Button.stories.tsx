import React from "react"
import { Meta, Story } from "@storybook/react"
import { Button, ButtonProps } from "."

const meta: Meta = {
	title: "Components/Button",
	component: Button,
}

export default meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>Login</Button>

export const Default: Story<ButtonProps> = Template.bind({})
Default.args = {
	disabled: false,
}

export const Disabled: Story<ButtonProps> = Template.bind({})
Disabled.args = {
	disabled: true,
}

export const Black: Story<ButtonProps> = Template.bind({})
Black.args = {
	bgColor: "gray100",
	hoverBgColor: "gray80",
	activeBgColor: "gray80",
	disabledBgColor: "gray100",
	disabled: false,
}

export const BlackDisabled: Story<ButtonProps> = Template.bind({})
BlackDisabled.args = {
	bgColor: "gray100",
	hoverBgColor: "gray80",
	activeBgColor: "gray80",
	disabledBgColor: "gray100",
	disabled: true,
}

export const Large: Story<ButtonProps> = Template.bind({})
Large.args = {
	large: true,
	disabled: false,
}

export const LargeDisabled: Story<ButtonProps> = Template.bind({})
LargeDisabled.args = {
	large: true,
	disabled: true,
}
