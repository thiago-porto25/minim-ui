import React from "react"
import { Meta, Story } from "@storybook/react"
import { Logo, LogoProps } from "."

const meta: Meta = {
	title: "Components/Logo",
	component: Logo,
}

export default meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Default: Story<LogoProps> = Template.bind({})

export const Medium: Story<LogoProps> = Template.bind({})
Medium.args = {
	size: "xxl",
}

export const Big: Story<LogoProps> = Template.bind({})
Big.args = {
	size: "uul",
}

export const Link: Story<LogoProps> = Template.bind({})
Link.args = {
	linkTo: "#test",
}
