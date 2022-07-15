import React from "react"
import { Meta, Story } from "@storybook/react"
import { Avatar, AvatarProps } from "."

const avatarSrc =
	"https://lh3.googleusercontent.com/a-/AFdZuco9g5GQ2E-_2ia2va4ECEc99z3liQQQwN1ff82_=s83-c-mo"

const meta: Meta = {
	title: "Components/Avatar",
	component: Avatar,
}

export default meta

const Template: Story<AvatarProps> = (args) => (
	<Avatar alt="User avatar" {...args} />
)

export const Default: Story<AvatarProps> = Template.bind({})

export const WithSrc: Story<AvatarProps> = Template.bind({})
WithSrc.args = {
	src: avatarSrc,
}

export const DefaultLarge: Story<AvatarProps> = Template.bind({})
DefaultLarge.args = {
	lgSize: "xxl",
}

export const WithSrcLarge: Story<AvatarProps> = Template.bind({})
WithSrcLarge.args = {
	src: avatarSrc,
	lgSize: "xxl",
}
