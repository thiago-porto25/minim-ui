import React from "react"
import { ChatRandomThemeProvider } from "../src"

import "normalize.css/normalize.css"
import "../src/theme/reset.css"

export const decorators = [
	(Story) => (
		<ChatRandomThemeProvider>
			<Story />
		</ChatRandomThemeProvider>
	),
]
