import React from "react"
import dayjs from "dayjs"
import { MessageProps } from "."
import {
	MessageContainer,
	MessageTail,
	MessageText,
	MessageTimestamp,
} from "./styles"

export const Message: React.FC<MessageProps> = ({
	message,
	bgColor = "blue10",
	sent = false,
	timestamp,
}) => {
	return (
		<MessageContainer bgColor={bgColor} sent={sent}>
			<MessageText textStyle="text">{message}</MessageText>
			<MessageTimestamp textStyle="timestamp">
				{dayjs(timestamp).format("HH:mm")}
			</MessageTimestamp>
			<MessageTail bgColor={bgColor} sent={sent} />
		</MessageContainer>
	)
}
