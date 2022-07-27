import React, { PropsWithChildren, useEffect, useMemo } from "react"
import { createPortal } from "react-dom"

export const ToastPortal: React.FC<PropsWithChildren> = ({ children }) => {
	const portalRoot = document.getElementById("toast") as HTMLDivElement

	const toastContainer = useMemo(() => document.createElement("div"), [])

	useEffect(() => {
		portalRoot.appendChild(toastContainer)

		return () => {
			toastContainer.remove()
		}
	}, [])

	return createPortal(children, portalRoot)
}
