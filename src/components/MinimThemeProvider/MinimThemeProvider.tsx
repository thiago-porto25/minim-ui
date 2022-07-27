import React, { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"

import "normalize.css/normalize.css"
import "../../theme/reset.css"
import "../../theme/fonts.css"

import { theme as DefaultTheme } from "../../theme"

type Props = PropsWithChildren

// Creation of a body child div to render toast
const toastPortal = document.createElement("div")
toastPortal.id = "toast"
document.body.appendChild(toastPortal)

export const MinimThemeProvider: React.FC<Props> = ({ children }) => {
	return <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
}
