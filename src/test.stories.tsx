import React from "react"
import { Meta, Story } from "@storybook/react"
import { Test } from "./Test"

const meta: Meta = {
	title: "Components/Test",
	component: Test,
}

export default meta

const Template: Story = (args) => <Test {...args} />

export const Default = Template.bind({})
