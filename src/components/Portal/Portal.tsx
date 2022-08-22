import React, { PropsWithChildren, useEffect, useMemo } from "react"
import { createPortal } from "react-dom"

export const Portal: React.FC<PropsWithChildren> = ({ children }) => {
	const portalRoot = document.querySelector("body") as HTMLBodyElement

	const container = useMemo(() => {
		const portal = document.createElement("div")
		portal.style.overflow = "auto"
		portal.style.position = "fixed"
		portal.style.left = "0"
		portal.style.top = "0"
		portal.style.right = "0"
		portal.style.bottom = "0"
		portal.id = "minim-ui-portal"
		return portal
	}, [])

	useEffect(() => {
		portalRoot.appendChild(container)

		return () => {
			container.remove()
		}
	}, [])

	return createPortal(children, container)
}
