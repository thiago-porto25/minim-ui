import React from "react"
import { Meta, Story } from "@storybook/react"
import { ClickableIcon, ClickableIconProps } from "."
import { ArrowIcon, EmojiIcon, NewChatIcon, SendIcon } from "../../icons"

const meta: Meta = {
	title: "Components/ClickableIcon",
	component: ClickableIcon,
}

export default meta

const TemplateArrow: Story<ClickableIconProps> = (args) => (
	<ClickableIcon {...args}>
		<ArrowIcon />
	</ClickableIcon>
)

const TemplateSend: Story<ClickableIconProps> = (args) => (
	<ClickableIcon {...args}>
		<EmojiIcon />
	</ClickableIcon>
)

const TemplateEmoji: Story<ClickableIconProps> = (args) => (
	<ClickableIcon {...args}>
		<NewChatIcon />
	</ClickableIcon>
)

const TemplateNewChat: Story<ClickableIconProps> = (args) => (
	<ClickableIcon {...args}>
		<SendIcon />
	</ClickableIcon>
)

export const DefaultArrow: Story<ClickableIconProps> = TemplateArrow.bind({})

export const DefaultSend: Story<ClickableIconProps> = TemplateSend.bind({})
DefaultSend.args = {
	bgColor: "transparent",
	hoverBgColor: "blue20",
	activeBgColor: "blue30",
}

export const DefaultEmoji: Story<ClickableIconProps> = TemplateEmoji.bind({})

export const DefaultNewChat: Story<ClickableIconProps> = TemplateNewChat.bind(
	{}
)

export const LargeArrow: Story<ClickableIconProps> = TemplateArrow.bind({})
LargeArrow.args = {
	size: "lg",
}

export const LargeSend: Story<ClickableIconProps> = TemplateSend.bind({})
LargeSend.args = {
	bgColor: "transparent",
	hoverBgColor: "blue20",
	activeBgColor: "blue30",
	size: "lg",
}

export const LargeEmoji: Story<ClickableIconProps> = TemplateEmoji.bind({})
LargeEmoji.args = {
	size: "lg",
}

export const LargeNewChat: Story<ClickableIconProps> = TemplateNewChat.bind({})
LargeNewChat.args = {
	size: "lg",
}
