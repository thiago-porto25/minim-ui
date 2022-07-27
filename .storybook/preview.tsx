import React from "react"
import { MinimThemeProvider } from "../src"

import "normalize.css/normalize.css"
import "../src/theme/reset.css"

export const decorators = [
	(Story) => (
		<MinimThemeProvider>
			<Story />
		</MinimThemeProvider>
	),
]
