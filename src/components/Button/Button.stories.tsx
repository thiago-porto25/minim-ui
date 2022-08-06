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
	variant: "secondary",
	disabled: false,
}

export const BlackDisabled: Story<ButtonProps> = Template.bind({})
BlackDisabled.args = {
	variant: "secondary",
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

export const Ripple: Story<ButtonProps> = Template.bind({})
Ripple.args = {
	large: true,
	ripple: true,
}

export const BlackRipple: Story<ButtonProps> = Template.bind({})
BlackRipple.args = {
	variant: "secondary",
	ripple: true,
}

export const NewChat: Story<ButtonProps> = Template.bind({})
NewChat.args = {
	w: "uul",
	h: "xxs",
	py: "qk",
	px: "xxs",
	variant: "secondary",
}
