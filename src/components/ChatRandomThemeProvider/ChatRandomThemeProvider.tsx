import React, { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"

import "normalize.css/normalize.css"
import "../../theme/reset.css"

import { theme as DefaultTheme } from "../../theme"

type Props = PropsWithChildren

export const ChatRandomThemeProvider: React.FC<Props> = ({ children }) => {
	return <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
}
