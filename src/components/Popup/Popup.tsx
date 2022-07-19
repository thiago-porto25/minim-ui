import React, { useEffect, useRef } from "react"
import { PopupProps, PopupItemProps } from "."
import { StyledPopup, StyledPopupItem } from "./styles"
import { Typography } from "../Typography"

export const Popup: React.FC<PopupProps> = ({
	setOpen,
	x = "qk",
	y = "xxs",
	animationOptions = { duration: 150, easing: "linear", type: "fade" },
	children,
}) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [ref])

	return (
		<StyledPopup
			role="menu"
			ref={ref}
			x={x}
			y={y}
			animationOptions={animationOptions}
		>
			{children}
		</StyledPopup>
	)
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
