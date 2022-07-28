import React from "react"
import { GlobalAndCSSReset, MinimThemeProvider } from "../src"

export const decorators = [
	(Story) => (
		<MinimThemeProvider>
			<GlobalAndCSSReset />
			<Story />
		</MinimThemeProvider>
	),
]
