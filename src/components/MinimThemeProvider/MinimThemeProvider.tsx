import React, { useMemo } from "react"
import { ThemeProvider } from "styled-components"

import { theme as DefaultTheme } from "../../theme"
import { MinimThemeProviderProps } from "./MinimThemeProvider.interface"

export const MinimThemeProvider: React.FC<MinimThemeProviderProps> = ({
	children,
	customFonts,
}) => {
	const theme: typeof DefaultTheme = customFonts
		? useMemo(
				() => ({
					...DefaultTheme,
					typography: { ...DefaultTheme.typography, fontFamily: customFonts },
				}),
				[customFonts]
		  )
		: DefaultTheme

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
