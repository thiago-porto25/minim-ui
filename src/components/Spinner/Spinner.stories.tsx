import React from "react"
import { Meta, Story } from "@storybook/react"
import { Spinner, SpinnerProps } from "."

const meta: Meta = {
	title: "Components/Spinner",
	component: Spinner,
}

export default meta

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />

export const Default = Template.bind({})

export const Bigger = Template.bind({})
Bigger.args = {
	size: "sm",
}

export const DifferentColor = Template.bind({})
DifferentColor.args = {
	color: "red",
	emptyColor: "pink",
}

export const DifferentSpeed = Template.bind({})
DifferentSpeed.args = {
	speed: 500,
}

export const DifferentThickness = Template.bind({})
DifferentThickness.args = {
	thickness: 5,
	size: "sm",
}
