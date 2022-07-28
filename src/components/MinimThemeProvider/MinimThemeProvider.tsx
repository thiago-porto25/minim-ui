import React, { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"

import { theme as DefaultTheme } from "../../theme"

// Creation of a body child div to render toast
const toastPortal = document.createElement("div")
toastPortal.id = "toast"
document.body.appendChild(toastPortal)

// Creation of a link tags to import fonts
const preconnect = document.createElement("link")
preconnect.rel = "preconnect"
preconnect.href = "https://fonts.gstatic.com/"

const link = document.createElement("link")
link.rel = "stylesheet"
link.href =
	"https://fonts.googleapis.com/css2?family=Anek+Latin:wght@300;400;500;600;700&family=Lato:wght@300;400;700&display=swap"
link.crossOrigin = "anonymous"

document.head.appendChild(preconnect)
document.head.appendChild(link)

export const MinimThemeProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	return <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
}
