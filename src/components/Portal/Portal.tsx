import React, { PropsWithChildren, useEffect, useMemo } from "react"
import { createPortal } from "react-dom"

export const Portal: React.FC<PropsWithChildren> = ({ children }) => {
	const portalRoot = document.querySelector("body") as HTMLBodyElement

	const container = useMemo(() => {
		const portal = document.createElement("div")
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
