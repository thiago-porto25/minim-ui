import React from "react"
import { Meta, Story } from "@storybook/react"
import { Message, MessageProps } from "."

const meta: Meta = {
	title: "Components/Message",
	component: Message,
}

export default meta

const Template: Story<MessageProps> = (args) => <Message {...args} />

export const Default = Template.bind({})
Default.args = {
	message: "Hello World!",
	timestamp: new Date(),
	sent: true,
}

export const LongText = Template.bind({})
LongText.args = {
	message:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	timestamp: new Date(),
	sent: true,
}

export const Received = Template.bind({})
Received.args = {
	message: "Hello friend, how are you?",
	timestamp: new Date(),
}

export const ReceivedLong = Template.bind({})
ReceivedLong.args = {
	message:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	timestamp: new Date(),
}
