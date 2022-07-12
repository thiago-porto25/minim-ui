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

export const Disabled: Story<ButtonProps> = Template.bind({})

Disabled.args = {
	disabled: true,
}
