import React from "react"
import { Meta, Story } from "@storybook/react"
import { Typography, TypographyProps } from "."

const meta: Meta = {
	title: "Components/Typography",
	component: Typography,
}

export default meta

const Template: Story<TypographyProps> = (args) => (
	<div
		style={{
			maxWidth: "400px",
			width: "100%",
			boxSizing: "border-box",
			padding: "24px",
		}}
	>
		<Typography {...args}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat.
		</Typography>
	</div>
)

export const Default: Story<TypographyProps> = Template.bind({})

export const Heading1: Story<TypographyProps> = Template.bind({})
Heading1.args = {
	textStyle: "heading1",
}

export const Heading2: Story<TypographyProps> = Template.bind({})
Heading2.args = {
	textStyle: "heading2",
}

export const Heading3: Story<TypographyProps> = Template.bind({})
Heading3.args = {
	textStyle: "heading3",
}

export const SubHeading1: Story<TypographyProps> = Template.bind({})
SubHeading1.args = {
	textStyle: "subHeading1",
}

export const SubHeading2: Story<TypographyProps> = Template.bind({})
SubHeading2.args = {
	textStyle: "subHeading2",
}

export const Text: Story<TypographyProps> = Template.bind({})
Text.args = {
	textStyle: "text",
}

export const Link: Story<TypographyProps> = Template.bind({})
Link.args = {
	textStyle: "link",
}

export const Error: Story<TypographyProps> = Template.bind({})
Error.args = {
	textStyle: "error",
}

export const ButtonLarge: Story<TypographyProps> = Template.bind({})
ButtonLarge.args = {
	textStyle: "buttonLg",
}

export const ButtonSmall: Story<TypographyProps> = Template.bind({})
ButtonSmall.args = {
	textStyle: "buttonSm",
}

export const InputLabel: Story<TypographyProps> = Template.bind({})
InputLabel.args = {
	textStyle: "inputLabel",
}

export const Placeholder: Story<TypographyProps> = Template.bind({})
Placeholder.args = {
	textStyle: "placeholder",
}
