import React from "react"
import { GlobalAndCSSReset, MinimThemeProvider } from "../src"
import "@fontsource/lato"
import "@fontsource/anek-latin"

export const decorators = [
	(Story) => (
		<MinimThemeProvider>
			<GlobalAndCSSReset />
			<Story />
		</MinimThemeProvider>
	),
]
