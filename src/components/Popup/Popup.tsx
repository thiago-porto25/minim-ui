import React, { useEffect } from "react"
import { PopupProps, PopupItemProps } from "."
import { StyledPopup, StyledPopupItem } from "./styles"
import { Typography } from "../Typography"

export const Popup: React.FC<PopupProps> = ({
	isOpen,
	close,
	x = "qk",
	y = "xxs",
	animationOptions = { duration: 150, easing: "linear", type: "fade" },
	children,
}) => {
	useEffect(() => {
		const handleClick = () => setTimeout(() => close(false), 0)

		if (isOpen) document.addEventListener("mouseup", handleClick)
		return () => {
			document.removeEventListener("mouseup", handleClick)
		}
	}, [isOpen])

	return isOpen ? (
		<StyledPopup role="menu" x={x} y={y} animationOptions={animationOptions}>
			{children}
		</StyledPopup>
	) : null
}

export const PopupItem: React.FC<PopupItemProps> = ({ text, ...props }) => {
	return (
		<StyledPopupItem role="menuitem" {...props}>
			<Typography textStyle="text" as="span">
				{text}
			</Typography>
		</StyledPopupItem>
	)
}
