import React from "react"
import { Meta, Story } from "@storybook/react"
import { Loading, LoadingProps } from "."

const meta: Meta = {
	title: "Components/Loading",
	component: Loading,
}

export default meta

const Template: Story<LoadingProps> = (args) => <Loading {...args} />

export const Default: Story<LoadingProps> = Template.bind({})

export const FiveDots: Story<LoadingProps> = Template.bind({})
FiveDots.args = {
	dots: 5,
}

export const EightDots: Story<LoadingProps> = Template.bind({})
EightDots.args = {
	dots: 8,
}

export const Medium: Story<LoadingProps> = Template.bind({})
Medium.args = {
	size: "nn",
}

export const Large: Story<LoadingProps> = Template.bind({})
Large.args = {
	size: "xxxs",
}

export const Responsive: Story<LoadingProps> = Template.bind({})
Responsive.args = {
	gap: { sm: "qk", md: "xxxs", lg: "sm" },
	size: { sm: "qk", md: "nn", lg: "xxs" },
}

export const WiderGap: Story<LoadingProps> = Template.bind({})
WiderGap.args = {
	gap: "xxxs",
}
