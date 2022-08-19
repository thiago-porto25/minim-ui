# MinimThemeProvider

MinimThemeProvider is the component that powers our package. It is responsible for setting up the theme and providing the theme to the rest of the components.

It receives the optional `customFonts` prop, which is an object that can be used to override the default fonts. Don't forget to import and declare the fonts you want to use in your project. If not provided, the default fonts will be used.

<br/>

## Import

<br/>

```tsx
import { MinimThemeProvider } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
// In your react entrypoint file

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { MinimThemeProvider, GlobalAndCSSReset } from "@thiagoporto/minim-ui"

// Don't forget to import your custom fonts here
import "@fontsource/open-sans"
import "@fontsource/roboto"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<MinimThemeProvider
			customFonts={{
				primary: "Open Sans, sans-serif",
				secondary: "Roboto, sans-serif",
			}}
		>
			<GlobalAndCSSReset />
			<App />
		</MinimThemeProvider>
	</React.StrictMode>
)
```

<br/>

## Props

<br/>

### customFonts

This prop is used to set custom fonts. It receives an object with the keys: primary, and secondary. The values are the font names. Don't forget to import and declare the fonts you want to use in your project.

<br/>

```tsx
<MinimThemeProvider
	customFonts={{
		primary: "Open Sans, sans-serif",
		secondary: "Roboto, sans-serif",
	}}
>
	<GlobalAndCSSReset />
	<App />
</MinimThemeProvider>
```

<hr/>

### [Back to README](../README.md)
