import React from "react"
import { Meta, Story } from "@storybook/react"
import { Avatar, AvatarProps } from "."

const avatarSrc =
	"https://c.pxhere.com/photos/50/77/business_meeting_people_corporate_success_person_professional-893119.jpg!d"

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
	size: "xxl",
}

export const WithSrcLarge: Story<AvatarProps> = Template.bind({})
WithSrcLarge.args = {
	src: avatarSrc,
	size: "xxl",
}
